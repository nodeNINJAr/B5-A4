import { useEffect } from 'react';
import { useForm, type FieldValues, type SubmitHandler } from 'react-hook-form';
import { useUpdateBookMutation } from '../../../redux/api/bookApi';
import { useLocation, useParams } from 'react-router';
import { Loader2 } from 'lucide-react';


const UpdateBookForm = () => {
// params for catch the id
const {id} = useParams();
// for catch the initial states
const {state} = useLocation();
const initialData = state.initialData;


 // 
  const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm();
  //RTK Query UPDATE Hook    
  const [updateBook, { isLoading }] = useUpdateBookMutation();


  // Set default values when editing
  useEffect(() => {
    if (initialData) {
      Object.entries(initialData).forEach(([key, value]) => {
        setValue(key, value);
      });
    }
  }, [initialData, setValue]);

  

  // submit handler
  const onSubmit:SubmitHandler<FieldValues> = async (data)=> {
    // 
    try {
      data.copies = parseInt(data.copies);
      await updateBook({ id: id || initialData._id, ...data }).unwrap();
      reset();
      alert('Book updated!');
   
    } catch (err) {
      console.error(err);
      alert('Failed to update book.');
    }
  };



//   
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-xl mx-auto p-6 bg-white text-[#121212] rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">Update Book</h2>

      <div className="form-control mb-3">
        <label className="label">Book Title</label>
        <input {...register('title', { required: 'Title is required' })} className="input input-bordered w-full mt-1 bg-gray-50" />
        {errors.title?.message && typeof errors.title.message === 'string' && (
          <p className="text-red-500 text-sm">{errors.title.message}</p>
        )}
      </div>

      <div className="form-control mb-3">
        <label className="label">Author</label>
        <input {...register('author', { required: 'Author is required' })} className="input input-bordered w-full mt-1 bg-gray-50" />
        {errors.author?.message && typeof errors.author.message === 'string' && (
          <p className="text-red-500 text-sm">{errors.author.message}</p>
        )}
      </div>

      <div className="form-control mb-3">
        <label className="label">Genre</label>
        <input {...register('genre', { required: 'Genre is required' })} className="input input-bordered w-full mt-1 bg-gray-50" />
        {errors.genre?.message && typeof errors.genre.message === 'string' && (
          <p className="text-red-500 text-sm">{errors.genre.message}</p>
        )}
      </div>

      <div className="form-control mb-3">
        <label className="label">ISBN</label>
        <input {...register('isbn', { required: 'ISBN is required' })} className="input input-bordered w-full mt-1 bg-gray-50" />
        {errors.isbn?.message && typeof errors.isbn.message === 'string' && (
          <p className="text-red-500 text-sm">{errors.isbn.message}</p>
        )}
      </div>

      <div className="form-control mb-3">
        <label className="label">Description</label>
        <textarea {...register('description', { required: 'Description is required' })} className="textarea textarea-bordered w-full mt-1 bg-gray-50" />
        {errors.description?.message && typeof errors.description.message === 'string' && (
          <p className="text-red-500 text-sm">{errors.description.message}</p>
        )}
      </div>

      <div className="form-control mb-3">
        <label className="label">Copies</label>
        <input
          type="number"
          min={0}
          {...register('copies', {
            required: 'Copies required',
            min: { value: 0, message: 'Minimum 0 copy' },
            valueAsNumber: true,
          })}
          className="input input-bordered w-full mt-1 bg-gray-50"
        />
        {errors.copies?.message && typeof errors.copies.message === 'string' && (
          <p className="text-red-500 text-sm">{errors.copies.message}</p>
        )}
      </div>

      {/* <div className="form-control mb-4">
        <label className="cursor-pointer label justify-start gap-4">
          <input type="checkbox" {...register('available')} className="checkbox" />
          <span className="label-text">Available</span>
        </label>
      </div> */}

      <button type="submit" className="btn btn-warning w-full" disabled={isLoading}>
        {isLoading ? <Loader2/> : 'Update Book'}
      </button>
    </form>
  );
};

export default UpdateBookForm;
