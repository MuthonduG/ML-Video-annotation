import React from 'react';
import { Video, Brain, Upload } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="bg-gray-900 border-b border-gray-800">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="p-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                VideoAnnotation
              </h1>
              <p className="text-xs text-gray-400">Smart Video Analysis</p>
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center space-x-6">
            <Link
              to="/"
              className={`flex items-center space-x-2 transition-colors ${
                location.pathname === '/'
                  ? 'text-blue-400'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              <Video className="w-5 h-5" />
              <span>Upload</span>
            </Link>
            
            <Link
              to="/results"
              className={`flex items-center space-x-2 transition-colors ${
                location.pathname === '/results'
                  ? 'text-blue-400'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              <Upload className="w-5 h-5" />
              <span>Results</span>
            </Link>

            {/* Upload Button */}
            <Link
              to="/"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-all transform hover:scale-105"
            >
              <Upload className="w-5 h-5" />
              <span>New Analysis</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;