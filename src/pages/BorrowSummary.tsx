import Loader from '../components/modules/loader/Loader';
import BorrowTable from '../components/modules/table/BorrowTable';
import { useGetBorrowdBooksQuery } from '../redux/api/bookApi'


// 
const BorrowSummary = () => {

const {data, isLoading,isSuccess} = useGetBorrowdBooksQuery(undefined);

  console.log(data);

  if(isLoading) return <Loader/>

  // 
  return (
    <div>   
       <h2 className='text-center text-3xl mt-6 mb-8'> Borrow Book Summary</h2>
        <BorrowTable borrowData={data}/>
    </div>
  )
}

export default BorrowSummary