import { useState } from 'react';
import { Library, Menu, X } from 'lucide-react';
import { Link, NavLink } from 'react-router';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

      // 
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
    <header className="bg-white shadow-sm border-b border-gray-100 backdrop-blur-lg px-2 md:px-6 py-0 rounded-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <Link to={"/"} className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-blue-600 to-indigo-600 p-2 rounded-xl">
              <Library className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900 uppercase italic">Bibliotica</h1>
              <p className="text-sm text-gray-600">Digital Library Management</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex justify-center items-center gap-5 text-black font-medium">
              {links}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-black focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4">
            <ul className="flex flex-col gap-4 text-black font-medium">
              {links}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
