import React from 'react'
import { useGetBooksQuery } from '../redux/api/bookApi'
import Loader from '../components/modules/loader/Loader';

const Books = () => {


const {data:books , isError, isLoading, isSuccess} = useGetBooksQuery(undefined);

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
          {books.data.length > 0 ? <>
             {
              books?.data.map(book =>(
                <h3>{book.title}</h3>
              ))
            }
          </> :
           <p className='flex justify-center items-center min-h-dvh text-red-600 text-3xl font-semibold'>No Books found</p>
          }
    </div>
  )
}

export default Books