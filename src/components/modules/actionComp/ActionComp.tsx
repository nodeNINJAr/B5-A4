import { CircleFadingArrowUp, DiamondPlus } from "lucide-react"
import type { IBook } from "../../../types";
import { useDeleteBookMutation } from "../../../redux/api/bookApi";
import DeleteModal from "../modal/DeleteModal";
import { Link } from "react-router";


const ActionComp = ({ bookData }: { bookData: IBook }) => {

const [deleteItem, {isLoading,isSuccess}] = useDeleteBookMutation()


// handle delete
 const handleDelete = (bool:boolean)=>{
         console.log(bool);  
          if(bool===true){
             deleteItem(bookData._id)
          }

      }
    //
    const handleUpdate =(id:string)=>{
       console.log(id);
    }


    // 
  return (
    <div className="flex justify-center items-center gap-4">
          <DeleteModal handleDelete={handleDelete} isLoading={isLoading} isSuccess={isSuccess} />
          <button className="cursor-pointer" onClick={()=>handleUpdate(bookData?._id)}></button>
          <Link to={`/edit-book/${bookData._id}`} state={{initialData:bookData}}><CircleFadingArrowUp className="text-green-500" /></Link>
          <Link className="btn btn-primary" to={`/borrow/${bookData._id}`} state={{initialData:{title:bookData?.title, copies:bookData?.copies}}}>Borrow<DiamondPlus className="w-6" /></Link>
    </div>
  )
}

export default ActionComp