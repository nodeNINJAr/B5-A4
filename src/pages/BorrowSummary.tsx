import Loader from '../components/modules/loader/Loader';
import BorrowTable from '../components/modules/table/BorrowTable';
import { useGetBorrowdBooksQuery } from '../redux/api/bookApi'


// 
const BorrowSummary = () => {

const {data, isLoading} = useGetBorrowdBooksQuery(undefined);

  console.log(data?.data);

  if(isLoading) return <Loader/>

  // 
  return (
    <div>   
       <h2 className='text-center text-3xl mt-6 mb-8'> Borrow Book Summary</h2>
      {data?.data?.length > 0 ? 
          <BorrowTable borrowData={data}/>
          :
          <p className='flex justify-center items-center min-h-dvh'>No Borrow Book Here</p>
      }
    </div>
  )
}

export default BorrowSummary