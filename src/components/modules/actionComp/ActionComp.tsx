import { CircleFadingArrowUp, DiamondPlus } from "lucide-react"
import type { IBook } from "../../../types";
import { useDeleteBookMutation } from "../../../redux/api/bookApi";
import DeleteModal from "../modal/DeleteModal";


const ActionComp = ({ bookData }: { bookData: IBook }) => {

   
const [deleteItem, {isLoading,isSuccess,isError}] = useDeleteBookMutation()

 console.log(bookData, isSuccess, isError);




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
          <button className="cursor-pointer" onClick={()=>handleUpdate(bookData?._id)}><CircleFadingArrowUp className="text-green-500" /></button>
          <button className="btn btn-primary">Borrow<DiamondPlus className="w-6" /></button>
    </div>
  )
}

export default ActionComp