import { Trash } from 'lucide-react'
import Loader from '../loader/Loader';

// 
type DeleteModalProps = {
  handleDelete: (confirmed: boolean) => void;
  isLoading:boolean;
};

const DeleteModal = ({ handleDelete,isLoading }: DeleteModalProps) => {
    // 
  return (
    <div>
         <button
           title='Delete'
           className="cursor-pointer"
           onClick={() => {
             const modal = document.getElementById('my_modal_1') as HTMLDialogElement | null;
             if (modal) {
               modal.showModal();
             }
           }}
         >
           <Trash className="text-red-600" />
         </button>
        <dialog id="my_modal_1" className="modal">
        <div className="modal-box bg-blue-200">
            <h3 className="font-bold text-lg">
              ⚠️ Warning! Do you want to delete the book?
             </h3>
              <p className="py-4">
                If you click the <strong>Yes</strong> button, this book will be permanently deleted.
              </p>
            <div className="modal-action">
                {/*  */}
            <form method="dialog" className='space-x-3'>
                {/* if there is a button in form, it will close the modal */}
                <button onClick={()=>handleDelete(true)} className="btn btn-warning">{isLoading && <Loader/>}Yes!</button>
                <button className="btn btn-dash">Close</button>
            </form>
            </div>
        </div>
        </dialog>
    </div>
  )
}

export default DeleteModal