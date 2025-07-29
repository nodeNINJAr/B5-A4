import { useGetBooksQuery } from '../redux/api/bookApi'
import Loader from '../components/modules/loader/Loader';
import BooksTable from '../components/modules/table/BooksTable';

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
        <div className='flex justify-between gap-5 items-center'><h2 className=''>All Books Here</h2> <button className='btn btn-accent'>Add Books</button></div>
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