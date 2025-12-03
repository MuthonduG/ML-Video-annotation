// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Results from './pages/Results';

function App() {
  return (
    <Router>
      {/* REMOVE all flex classes and use simple w-full */}
      <div className="w-[100vw] min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        {/* Navbar - ensure it's full width */}
        <div className="w-full">
          <Navbar />
        </div>
        
        {/* Main content - simple w-full without flex */}
        <div className="w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/results" element={<Results />} />
          </Routes>
        </div>
        
        {/* Footer - full width */}
        <footer className="w-full border-t border-gray-800 mt-12">
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  VideoAnnotation AI
                </h3>
                <p className="text-gray-400 text-sm">AI-powered video content analysis</p>
              </div>
              <div className="text-gray-400 text-sm">
                <p>© {new Date().getFullYear()} VideoAnnotation AI. All rights reserved.</p>
                <p className="mt-1">Powered by advanced machine learning models</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;