import { useForm, type FieldValues, type SubmitHandler } from 'react-hook-form';
import { useAddBookMutation } from '../../../redux/api/bookApi';
import { useNavigate } from 'react-router';
import type { IBookForm } from '../../../types';
import Loader from '../loader/Loader';
import { useAppDispatch } from '../../../hooks/hooks';
import { showTimedAlert } from '../../lib/alertActions';



// 
const BookForm = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<IBookForm>({
    defaultValues: {
      available: true,
      copies: 1,
    },
  });

const disPatch = useAppDispatch();

  
  //   
  const [addBook, { isLoading }] = useAddBookMutation();
  const navigate = useNavigate();


  //   
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    // 
    try {
      const value = await addBook(data).unwrap();
      disPatch(showTimedAlert(value.message,"success"));
      reset();
      navigate('/books')

    } catch (err:any) {
     const errorMessage =
      err?.data?.message ||
      err?.message ||
      'Something went wrong. Please try again.';
      disPatch(showTimedAlert(errorMessage,"error"));
    }
  };


  //   
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow text-[#121212]">
      <h2 className="text-2xl font-bold mb-4 ">Add New Book</h2>

      <div className="form-control mb-3 flex flex-col gap-1 w-full">
        <label className="label">Title</label>
        <input {...register('title', { required: 'Title is required' })} placeholder='Enter Book Tiile' className="input input-bordered  w-full bg-gray-50 mt-1" />
        {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}
      </div>

      <div className="form-control mb-3">
        <label className="label">Author</label>
        <input placeholder='Enter Author Name' {...register('author', { required: 'Author is required' })} className="input input-bordered   w-full bg-gray-50 mt-1" />
        {errors.author && <p className="text-red-500 text-sm">{errors.author.message}</p>}
      </div>

      <div className="form-control mb-3">
        <label className="label">Select a Book Genre</label>
        <select className="input input-bordered   w-full bg-gray-50 mt-1" {...register('genre', { required: 'Genre is required' })}>
            <option disabled={true}>Pick a Genre</option>
            <option value={"FICTION"}>FICTION</option>
            <option value={"NON_FICTION"}>NON_FICTION</option>
            <option value={"SCIENCE"}>SCIENCE</option>
            <option value={"HISTORY"}>HISTORY</option>
            <option value={"BIOGRAPHY"}>BIOGRAPHY</option>
            <option value={"FANTASY"}>FANTASY</option>
          </select>
        {errors.genre && <p className="text-red-500 text-sm">{errors.genre.message}</p>}
      </div>

      <div className="form-control mb-3">
        <label className="label">ISBN</label>
        <input placeholder='Enter Book ISBN ID' {...register('isbn')} className="input input-bordered  w-full bg-gray-50 mt-1" />
        {errors.isbn && <p className="text-red-500 text-sm">{errors.isbn.message}</p>}
      </div>

      <div className="form-control mb-3">
        <label className="label">Description</label>
        <textarea placeholder='Enter Book Description' {...register('description')} className="textarea textarea-bordered  w-full bg-gray-50 mt-1" />
        {errors.description && <p className="text-red-500 text-sm">{errors.description.message}</p>}
      </div>

     <div className='flex justify-between items-center gap-4 w-full'>
     {/*  */}
        <div className="form-control mb-3 w-1/2">
            <label className="label">Copies</label>
            <input
            type="number"
            min={1}
            {...register('copies', {
                required: 'Copies required',
                min: { value: 1, message: 'Minimum 1 copy' },
                valueAsNumber: true,
            })}
            className="input input-bordered  w-full bg-gray-50 mt-1"
            />
            {errors.copies && <p className="text-red-500 text-sm">{errors.copies.message}</p>}
        </div>

       {/*  */}
     </div>

      {/*  */}
      <button type="submit" className="btn btn-primary w-full mt-2" disabled={isLoading}>
        {isLoading ? <Loader/> : 'Submit'}
      </button>
    </form>
  );
};

export default BookForm;
