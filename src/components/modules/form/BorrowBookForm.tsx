import { useForm, type FieldValues, type SubmitHandler } from 'react-hook-form';
import { useBorrowBookMutation } from '../../../redux/api/bookApi';
import { Loader2 } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router';
import type { IBorrow } from '../../../types';


// 
const BorrowBookForm = ({ bookId }: IBorrow) => {

    // 
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      quantity: 1,
      dueDate: '', 
    },
  });

  //   
  const [borrowBook, { isLoading }] = useBorrowBookMutation();
  // location
  const {state} = useLocation();  
  const navigate = useNavigate();





//   
  const onSubmit:SubmitHandler<FieldValues> = async (data) => {
    // 
    try {
      const payload = {
        ...data,
        quantity: parseInt(data.quantity),
        book: bookId,
      };
      await borrowBook(payload).unwrap();
      alert('Book borrowed successfully!');
      reset();
      navigate("/borrow-summary")
    } catch (err) {
      console.error(err);
      alert('Failed to borrow book');
    }
  };

  //    
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg mx-auto p-6 bg-base-200 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-8 text-center">Borrow Book</h2>

      {/* title */}
      <div className="form-control mb-4">
          <p className='font-medium capitalize text-green-500'>Book Name: {state?.initialData?.title}</p>
      </div>
      {/* copies */}
      <div className="form-control mb-4">
          <p className={`font-medium capitalize ${state?.initialData?.copies > 3 && state?.initialData?.copies < 10 && "text-yellow-500" || state?.initialData?.copies >= 10 && "text-green-500" || state?.initialData?.copies <= 3 && "text-red-500"}`}>Available Copies: {state?.initialData?.copies}</p>
      </div>

      {/* Quantity */}
      <div className="form-control mb-4">
        <label className="label">Quantity</label>
        <input
          type="number"
          min={1}
          {...register('quantity', {
            required: 'Quantity is required',
            min: { value: 1, message: 'At least 1 copy must be borrowed' },
            valueAsNumber: true,
          })}
          className="input input-bordered w-full mt-1"
        />
        {errors.quantity && <p className="text-red-500 text-sm">{errors.quantity.message}</p>}
      </div>

      {/* Due Date */}
      <div className="form-control mb-4">
        <label className="label">Due Date</label>
        <input
          type="date"
          {...register('dueDate', { required: 'Due date is required' })}
          className="input input-bordered w-full mt-1"
        />
        {errors.dueDate && <p className="text-red-500 text-sm">{errors.dueDate.message}</p>}
      </div>

      {/* Submit */}
      <button type="submit" className="btn btn-primary w-full" disabled={isLoading}>
        {isLoading ? <Loader2/> : 'Borrow Book'}
      </button>
    </form>
  );
};

export default BorrowBookForm;
