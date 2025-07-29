import { useLocation, useParams } from 'react-router';
import BookForm from '../components/modules/form/BookForm'
import UpdateBookForm from '../components/modules/form/UpdateBookForm';
import BorrowBookForm from '../components/modules/form/BorrowBookForm';

const CreateBooks = () => {

const {pathname} = useLocation();
const id = useParams();

// 
const renderForm =()=>{
    switch (pathname) {
    case '/create-book':
      return <BookForm/>
    case `/edit-book/${id?.id}`:
      return <UpdateBookForm/>
    case `/borrow/${id?.bookId}`:
      return <BorrowBookForm bookId={id?.bookId}/>
     default:
       return null
   }

}

  // 
  return (
    <div className='space-y-10 py-14'>
       <h2 className='text-center text-4xl font-bold'>{pathname==="/create-book" && "Create a New Book" || pathname === `/edit-book/${id?.id}`&& "Update Your Existing Book" ||  pathname === `/borrow/${id?.bookId}`&& "Borrow Your fav Book" }</h2>
        {renderForm()}
    </div>
  )
}

export default CreateBooks