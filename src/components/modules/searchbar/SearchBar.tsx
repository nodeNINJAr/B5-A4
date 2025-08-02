import React from 'react';
import { Search, Filter } from 'lucide-react';


interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
  selectedGenre: string;
  onGenreChange: (term:string) => void;
}

const genres = ["ALL" , "FANTASY" , "BIOGRAPHY" , "HISTORY" , "SCIENCE" , "NON_FICTION" , "FICTION"];



// 
export const SearchBar: React.FC<SearchBarProps> = ({
  searchTerm,
  onSearchChange,
  selectedGenre,
  onGenreChange
}) => {





// 
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-700 w-5 h-5" />
          <input
            type="text"
            placeholder="Search books, authors, or ISBN..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="text-gray-800 w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
          />
        </div>
        
        <div className="relative">
          <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <select
            value={selectedGenre}
            onChange={(e) => onGenreChange(e.target.value)}
            className="text-gray-800 pl-10 pr-8 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white min-w-[150px]"
          >
            {genres.map(genre => (
              <option key={genre} value={genre}>
                {genre.split('_').join(" ")}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};