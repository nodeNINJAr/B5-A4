import { useGetBooksQuery } from '../redux/api/bookApi'
import Loader from '../components/modules/loader/Loader';
import BooksTable from '../components/modules/table/BooksTable';
import { Link } from 'react-router';
import { SearchBar } from '../components/modules/searchbar/SearchBar';
import { useState } from 'react';

const Books = () => {
  // 
  const [searchTerm, setSearchTerm] = useState('');
  //  
  const [selectedGenre, setSelectedGenre] = useState('ALL');
  
  
  // 
  const onGenreChange = (data: "ALL" | "FANTASY" | "BIOGRAPHY" | "HISTORY" | "SCIENCE" | "NON_FICTION" | "FICTION"): void => {
    setSelectedGenre(data);
  };
  
  
  const { data: books, isLoading } = useGetBooksQuery({
    genre: selectedGenre,
    search: searchTerm,
  });

  // 
  if(isLoading){
    return <Loader/>
  }



  // 
  return (
    <div>
        <div className='flex justify-between gap-5 items-center'><h2 className='text-2xl text-black font-bold'>All Books Here</h2> <Link to={"/create-book"}><button className='btn btn-accent font-bold'>Add Books</button></Link></div>
         
         {/* search bar */}
          <SearchBar
                  searchTerm={searchTerm}
                  onSearchChange={setSearchTerm}
                  selectedGenre={selectedGenre}
                  onGenreChange={onGenreChange}
                />

         {/*  */}
          {(books?.data && books.data.length > 0) ? (
            <>
              <BooksTable books={books.data} />
            </>
          ) : (
            <p className='flex justify-center items-center min-h-dvh text-red-600 text-3xl font-semibold'>No Books found</p>
          )}
    </div>
  )
}

export default Books