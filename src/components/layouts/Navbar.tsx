import React from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {

const links = <>
         <li>
            <NavLink to={'/'}>Home</NavLink>
        </li>
        <li>
            <NavLink to={'/books'}>All Books</NavLink>
        </li>
        <li>
            <NavLink to={'/create-book'}>Add Book</NavLink>
        </li>
        <li>
            <NavLink to={'/borrow-summary'}>Borrow Summary</NavLink>
        </li>
    </>


  // 
  return (
    <div className='flex justify-between items-center gap-6 bg-white backdrop-blur-lg px-6 py-5 rounded-xl'>
        <div className='text-black'>Navbar</div>
         <div>
            <ul className='flex justify-center items-center gap-5 text-black font-medium'>
               {links}
            </ul>
        </div>
    </div>
  )
}

export default Navbar