import { useGetBooksQuery } from '../redux/api/bookApi'
import Loader from '../components/modules/loader/Loader';
import BooksTable from '../components/modules/table/BooksTable';
import { Link } from 'react-router';

const Books = () => {


const {data:books, isLoading} = useGetBooksQuery(undefined);

   console.log(books);

  // 
  if(isLoading){
    return <Loader/>
  }


  // 
  return (
    <div>
        <div className='flex justify-between gap-5 items-center'><h2 className='text-2xl text-black font-bold'>All Books Here</h2> <Link to={"/create-book"}><button className='btn btn-accent font-bold'>Add Books</button></Link></div>
         {/*  */}
          {books?.data?.length > 0 ? <>
             <BooksTable books={books?.data ?? []}/>
          </> :
           <p className='flex justify-center items-center min-h-dvh text-red-600 text-3xl font-semibold'>No Books found</p>
          }
    </div>
  )
}

export default Books