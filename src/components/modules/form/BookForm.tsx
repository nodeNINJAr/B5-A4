import { useForm, type FieldValues, type SubmitHandler } from 'react-hook-form';
import { useAddBookMutation } from '../../../redux/api/bookApi';
import { Loader2 } from 'lucide-react';
import { useNavigate } from 'react-router';
import type { IBookForm } from '../../../types';


// 
const BookForm = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<IBookForm>({
    defaultValues: {
      available: true,
      copies: 1,
    },
  });

  
  //   
  const [addBook, { isLoading }] = useAddBookMutation();
  const navigate = useNavigate();


  //   
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);
    // 
    try {
      await addBook(data).unwrap();
      alert('Book added successfully!');
      reset();
      navigate('/books')

    } catch (err) {
      console.error(err);
      alert('Failed to add book.');
    }
  };


  //   
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-xl mx-auto p-6 bg-base-200 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">Add New Book</h2>

      <div className="form-control mb-3 flex flex-col gap-1 w-full">
        <label className="label">Title</label>
        <input {...register('title', { required: 'Title is required' })} className="input input-bordered  w-full" />
        {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}
      </div>

      <div className="form-control mb-3">
        <label className="label">Author</label>
        <input {...register('author', { required: 'Author is required' })} className="input input-bordered  w-full" />
        {errors.author && <p className="text-red-500 text-sm">{errors.author.message}</p>}
      </div>

      <div className="form-control mb-3">
        <label className="label">Genre</label>
        <input {...register('genre', { required: 'Genre is required' })} className="input input-bordered  w-full" />
        {errors.genre && <p className="text-red-500 text-sm">{errors.genre.message}</p>}
      </div>

      <div className="form-control mb-3">
        <label className="label">ISBN</label>
        <input {...register('isbn', { required: 'ISBN is required' })} className="input input-bordered w-full" />
        {errors.isbn && <p className="text-red-500 text-sm">{errors.isbn.message}</p>}
      </div>

      <div className="form-control mb-3">
        <label className="label">Description</label>
        <textarea {...register('description', { required: 'Description is required' })} className="textarea textarea-bordered w-full" />
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
            className="input input-bordered w-full"
            />
            {errors.copies && <p className="text-red-500 text-sm">{errors.copies.message}</p>}
        </div>

        <div className="form-control mb-4 w-1/2 flex justify-end items-center">
            <label className="cursor-pointer label justify-start gap-4">
            <input type="checkbox" {...register('available')} className="checkbox" />
            <span className="label-text">Available</span>
            </label>
        </div>
       {/*  */}
     </div>

      {/*  */}
      <button type="submit" className="btn btn-primary w-full" disabled={isLoading}>
        {isLoading ? <Loader2/> : 'Submit'}
      </button>
    </form>
  );
};

export default BookForm;
