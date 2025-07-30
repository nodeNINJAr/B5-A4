import { Link, useParams } from 'react-router';
import {useGetBookQuery } from '../redux/api/bookApi';
import { ArrowLeft, Book, Calendar, CheckCircle, Clock, Hash,Tag, Users, XCircle } from 'lucide-react';
import Loader from '../components/modules/loader/Loader';




// 
const BookDetails = () => {

const { id } = useParams<{ id:string}>();
const { data, isLoading } = useGetBookQuery(id);

  // 
  const book = data?.data;



  //  
  if (isLoading) return <Loader/>

  // 
  if (!book) return <p className="text-center text-error mt-10">Book not found</p>;


    // 
   return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
         <Link to={"/books"}> <button 
            className="cursor-pointer flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Library
          </button></Link>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Book Cover Section */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 lg:p-12 flex items-center justify-center">
              <div className="relative max-w-sm w-full">
                <img 
                  src={'https://images.pexels.com/photos/1130980/pexels-photo-1130980.jpeg?auto=compress&cs=tinysrgb&w=400'} 
                  alt={book.title}
                  className="w-full h-96 object-cover rounded-xl shadow-2xl"
                />
                <div className="absolute -top-4 -right-4 bg-white rounded-full p-3 shadow-lg">
                  {book.available ? (
                    <CheckCircle className="w-8 h-8 text-green-500" />
                  ) : (
                    <XCircle className="w-8 h-8 text-red-500" />
                  )}
                </div>
              </div>
            </div>

            {/* Book Details Section */}
            <div className="p-8 lg:p-12">
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    book.available 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {book.available ? 'Available for Borrow' : 'Currently Checked Out'}
                  </span>
                  <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                    {book.genre.replace('_', ' ')}
                  </span>
                </div>
                
                <h1 className="text-4xl font-bold text-gray-900 mb-3 leading-tight">
                  {book.title}
                </h1>
                
                <p className="text-xl text-gray-600 mb-4">by {book.author}</p>
                
                 {/* book rating */}
                {/* {book.rating && (
                  <div className="flex items-center gap-2 mb-6">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-5 h-5 ${
                            i < Math.floor(book.rating!) 
                              ? 'fill-yellow-400 text-yellow-400' 
                              : 'text-gray-300'
                          }`} 
                        />
                      ))}
                    </div>
                    <span className="text-lg font-semibold text-gray-700">{book.rating}</span>
                    <span className="text-gray-500">rating</span>
                  </div>
                )} */}
              </div>

              <div className="prose prose-lg text-gray-700 mb-8">
                <p>{book.description}</p>
              </div>

              {/* Book Metadata */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Hash className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">ISBN</p>
                    <p className="font-semibold text-gray-900">{book.isbn}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <Calendar className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Publishe Year</p>
                    <p className="font-semibold text-gray-900">{book.publishedYear || 'Unknown'}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="bg-purple-100 p-2 rounded-lg">
                    <Users className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Total Copies</p>
                    <p className="font-semibold text-gray-900">{book.copies}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="bg-orange-100 p-2 rounded-lg">
                    <Tag className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Genre</p>
                    <p className="font-semibold text-gray-900">{book.genre.replace('_', ' ')}</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                {book.available ? (
                  <>
                   <Link to={`/borrow/${book?._id}`}>
                    <button className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-200 hover:scale-105">
                      <Book className="w-5 h-5" />
                      Borrow Book
                      </button>
                    </Link>
          
                  </>
                ) : (
                  <button className="bg-gray-400 text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 cursor-not-allowed">
                    <Clock className="w-5 h-5" />
                    Currently Unavailable
                  </button>
                )}
              </div>

              {!book.available && (
                <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
                  <p className="text-amber-800 text-sm">
                    <strong>Note:</strong> This book is currently checked out. You can reserve it to be notified when it becomes available.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-8 bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Library Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <Clock className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900 mb-2">Loan Period</h4>
              <p className="text-gray-600">14 days with option to renew</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <Users className="w-8 h-8 text-green-600 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900 mb-2">Current Status</h4>
              <p className={book.available ? 'text-green-600' : 'text-red-600'}>
                {book.available ? 'Available Now' : 'Checked Out'}
              </p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <Book className="w-8 h-8 text-purple-600 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900 mb-2">Format</h4>
              <p className="text-gray-600">Physical & Digital Copy</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
