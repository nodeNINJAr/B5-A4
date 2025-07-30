import { ArrowRight, Award, BookOpen, Library, Sparkles, Users } from 'lucide-react'
import { Link } from 'react-router'




// 
const LandingPage = () => {
  return (
    <div>
    {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                <div className="flex items-center gap-2 mb-6">
                    <Sparkles className="w-5 h-5 text-blue-600" />
                    <span className="text-blue-600 font-semibold">Welcome to LibraryHub</span>
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                    Your Gateway to
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600"> Knowledge</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                    Discover, borrow, and explore thousands of books in our comprehensive digital library. From classics to contemporary works, find your next favorite read.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <Link to={'/books'}>
                        <button className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-2 transition-all duration-200 hover:scale-105">
                        Browse Collection
                        <ArrowRight className="w-5 h-5" />
                        </button>
                    </Link>
                    <button className="border-2 border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 px-8 py-4 rounded-xl font-semibold transition-all duration-200">
                    Learn More
                    </button>
                </div>
                </div>
                <div className="relative">
                <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-3xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                    <img 
                    src="https://images.pexels.com/photos/1370298/pexels-photo-1370298.jpeg?auto=compress&cs=tinysrgb&w=800" 
                    alt="Library books"
                    className="w-full h-80 object-cover rounded-2xl shadow-lg"
                    />
                </div>
                </div>
            </div>
            </div>
        </section>

        {/* Stats Section */}
        <section className="bg-white border-y border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">60</h3>
                <p className="text-gray-600">Total Books</p>
                </div>
                <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Library className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">20</h3>
                <p className="text-gray-600">Available Now</p>
                </div>
                <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">10</h3>
                <p className="text-gray-600">Total Copies</p>
                </div>
                <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">50+</h3>
                <p className="text-gray-600">Categories</p>
                </div>
            </div>
            </div>
        </section>

    </div>
  )
}

export default LandingPage