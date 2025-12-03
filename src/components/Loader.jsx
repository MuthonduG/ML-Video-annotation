// src/components/Loader.jsx
import React from 'react';
import { Loader2 } from 'lucide-react';

const Loader = ({ message = "Processing your video..." }) => {
  return (
    <div className="fixed inset-0 bg-gray-900/90 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="bg-gray-800 p-8 rounded-2xl shadow-2xl border border-gray-700 max-w-md w-full mx-4">
        <div className="flex flex-col items-center">
          {/* Animated spinner */}
          <div className="relative mb-6">
            <div className="w-20 h-20 border-4 border-gray-700 rounded-full"></div>
            <div className="absolute top-0 left-0 w-20 h-20 border-4 border-blue-500 rounded-full border-t-transparent animate-spin"></div>
            <Loader2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 text-blue-400 animate-pulse" />
          </div>
          
          {/* Progress text */}
          <h3 className="text-xl font-semibold text-white mb-2">AI Analysis in Progress</h3>
          <p className="text-gray-400 text-center mb-6">{message}</p>
          
          {/* Progress bar */}
          <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full animate-pulse w-3/4"></div>
          </div>
          <p className="text-sm text-gray-400">This may take a few moments...</p>
          
          {/* Tips */}
          <div className="mt-6 p-4 bg-gray-900/50 rounded-lg border border-gray-700">
            <p className="text-sm text-gray-400">
              <span className="text-blue-400">Tip:</span> Larger videos may take longer to process
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;