import { Book, Users } from 'lucide-react';
import type { IBook } from '../../../types';

interface BookCardProps {
  book: IBook;
  onclick: (id: string) => void;
}

export const BookCard = ({ book, onclick}:BookCardProps) => {
  return (
    <div 
      onClick={()=>onclick(book?._id)}
      className="relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group overflow-hidden border border-gray-100"
    >
      <div className="z-10">
        <div className="absolute bottom-4 right-3">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
            book.available 
              ? 'bg-green-100 text-green-800' 
              : 'bg-red-100 text-red-800'
          }`}>
            {book.available ? 'Available' : 'Checked Out'}
          </span>
        </div>
      </div>
      
      <div className="p-5">
        <div className="mb-2">
          <h3 className="font-bold text-lg text-gray-900 group-hover:text-blue-600 transition-colors duration-200 line-clamp-2">
            {book.title}
          </h3>
          <p className="text-gray-600 text-sm font-medium">{book.author}</p>
        </div>
        
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
          <div className="flex items-center gap-1">
            <Book className="w-4 h-4" />
            <span>{book.genre.replace('_', ' ')}</span>
          </div>
          {/* {book.rating && (
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span>{book.rating}</span>
            </div>
          )} */}
        </div>
        
        <p className="text-gray-600 text-sm line-clamp-3 mb-4">
          {book.description}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-sm text-gray-500">
            <Users className="w-4 h-4" />
            <span>{book.copies} copies</span>
          </div>
          {/* <div className="flex items-center gap-1 text-sm text-gray-500">
            <Clock className="w-4 h-4" />
            <span>{book.publishedYear}</span>
          </div> */}
        </div>
      </div>
    </div>
  );
};