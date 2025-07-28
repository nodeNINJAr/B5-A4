import { useLocation } from 'react-router';
import BookForm from '../components/modules/form/BookForm'
import UpdateBookForm from '../components/modules/form/UpdateBookForm';

const CreateBooks = () => {

const {pathname} = useLocation();


  // 
  return (
    <div className='space-y-10 py-14'>
       <h2 className='text-center text-4xl font-bold'>{pathname==="/create-book"?"Create a New Book":"Update Your Existing Book"}</h2>
       {/*  */}
       {pathname==="/create-book"?
         <BookForm/> :
        <UpdateBookForm />
       }
    </div>
  )
}

export default CreateBooks