import { useGetBooksQuery } from '../redux/api/bookApi'
import Loader from '../components/modules/loader/Loader';
import BooksTable from '../components/modules/table/BooksTable';
import { Link } from 'react-router';
import { SearchBar } from '../components/modules/searchbar/SearchBar';
import { useState } from 'react';
import { BookOpen } from 'lucide-react';

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
    <div className='pb-14'>
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
            <div className='overflow-x-auto'>
              <BooksTable books={books.data} />
            </div>
          ) : (
             
            <div className="text-center py-12">
              <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No books found</h3>
              <p className="text-gray-500">Try adjusting your search criteria or browse different categories.</p>
            </div>
          )}
    </div>
  )
}

export default Books