import { AlertTriangle } from 'lucide-react';
import { Link } from 'react-router';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-6">
      <div className="text-center">
        <div className="flex justify-center mb-4">
          <AlertTriangle className="w-16 h-16 text-yellow-500" />
        </div>
        <h1 className="text-5xl font-bold text-gray-800">404</h1>
        <p className="mt-2 text-lg text-gray-600">Oops! Page not found.</p>
        <p className="mt-1 text-gray-500">The page you're looking for doesn't exist or has been moved.</p>
        <Link to="/" className="mt-6 inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all">
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
