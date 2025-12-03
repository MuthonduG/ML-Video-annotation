// src/pages/Home.jsx
import React, { useState } from 'react';
import VideoUpload from '../components/VideoUpload';
import Loader from '../components/Loader';

const Home = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [uploadedVideo, setUploadedVideo] = useState(null);

  const handleVideoUpload = (file) => {
    console.log('Video uploaded:', file);
    setUploadedVideo(file);
    // In a real app, you would upload to your backend here
  };

  const handleAnalyze = () => {
    if (!uploadedVideo) return;
    
    setIsAnalyzing(true);
    // Simulate analysis process
    setTimeout(() => {
      // After analysis, redirect to results page
      window.location.href = '/results';
    }, 3000);
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {isAnalyzing && <Loader message="AI is analyzing your video content..." />}
      
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            AI-Powered <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Video Analysis</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Upload your videos and let AI automatically detect and extract specific topics, moments, and segments.
          </p>
        </div>

        {/* Main Content */}
        <div className="mx-auto">
          <VideoUpload onVideoUpload={handleVideoUpload} />
          
          {/* How It Works */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-800/30 backdrop-blur-sm p-6 rounded-2xl border border-gray-700/50">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Upload Video</h3>
                <p className="text-gray-400">Upload any video file up to 2GB in size</p>
              </div>
              
              <div className="bg-gray-800/30 backdrop-blur-sm p-6 rounded-2xl border border-gray-700/50">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-purple-400 flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">AI Analysis</h3>
                <p className="text-gray-400">Our model analyzes video content for topics</p>
              </div>
              
              <div className="bg-gray-800/30 backdrop-blur-sm p-6 rounded-2xl border border-gray-700/50">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-600 to-green-400 flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Get Results</h3>
                <p className="text-gray-400">Receive timestamped segments with key topics</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;