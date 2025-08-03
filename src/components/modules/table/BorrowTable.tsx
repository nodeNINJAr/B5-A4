import type { IBorrowTable } from "../../../types";



const BorrowTable = ({ borrowData }: IBorrowTable) => {
   
    // 
  return (
   <div className="overflow-x-scroll">
  <table className="table  text-[#121212]">
    {/* head */}
    <thead className="text-[#121212] bg-blue-100">
      <tr>
        <th>Index</th>
        <th>Title</th>
        <th>ISBN</th>
        <th>Total Quantity</th>
      </tr>
    </thead>
    <tbody className="bg-blue-50">
    {borrowData?.data?.map((item, i: number) => (
        <tr key={i}>
            <th>{i + 1}</th>
            <td>{item?.book?.title}</td>
            <td>{item?.book?.isbn}</td>
            <td>{item?.totalQuantity}</td>
        </tr>
    ))}
    </tbody>
  </table>
</div>
  )
}

export default BorrowTable