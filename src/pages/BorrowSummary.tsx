import { BookOpen } from 'lucide-react';
import Loader from '../components/modules/loader/Loader';
import BorrowTable from '../components/modules/table/BorrowTable';
import { useGetBorrowdBooksQuery } from '../redux/api/bookApi'


// 
const BorrowSummary = () => {

const {data, isLoading} = useGetBorrowdBooksQuery(undefined);


  if(isLoading) return <Loader/>

  // 
  return (
    <div>   
       <h2 className='text-center text-3xl mt-6 mb-8 text-[#121212]'> Borrow Book Summary</h2>
      {data?.data?.length > 0 ? 
          <BorrowTable borrowData={data}/>
          :
            <div className="text-center py-12">
              <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No books found</h3>
              <p className="text-gray-500">Try adjusting your search criteria or browse different categories.</p>
            </div>
         
      }
    </div>
  )
}

export default BorrowSummary