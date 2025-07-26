import React from 'react'



// 
const BooksTable = ({books}) => {


    // 
    return (
        <div className="overflow-x-auto mt-8">
        <table className="table">
            {/* head */}
            <thead className='mb-3'>
            <tr>
                <th>Index</th>
                <th>Title</th>
                <th>Author</th>
                <th>Genre</th>
                <th>ISBN</th>
                <th>Copies</th>
                <th>Availability</th>
                <th>Actions</th>
            </tr>
            </thead>
             {/* cols */}
             {
              books?.map((book, idx) =>(
                <tbody key={book?._id}>
                    {/* row 1 */}
                    <tr>
                        <th>{idx+1}</th>
                        <td>{book?.title}</td>
                        <td>{book.author}</td>
                        <td>{book?.genre}</td>
                        <td>{book?.isbn}</td>
                        <td>{book?.copies}</td>
                        <td>{book?.available ? "Yes" : "No"}</td>
                    </tr>
                </tbody>
              ))
            }
        </table>
        </div>
  )
}

export default BooksTable