// src/components/VideoUpload.jsx
import React, { useState } from 'react';
import { Upload, Video, FileVideo, Clock, CheckCircle2, AlertCircle } from 'lucide-react';

const VideoUpload = ({ onVideoUpload }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('video/')) {
      handleFileSelect(file);
    }
  };

  const handleFileSelect = (file) => {
    setUploadedFile(file);
    if (onVideoUpload) {
      onVideoUpload(file);
    }
  };

  const handleFileInput = (e) => {
    const file = e.target.files[0];
    if (file) {
      handleFileSelect(file);
    }
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border-2 border-gray-700/50 p-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-white mb-2">Upload Your Video</h2>
        <p className="text-gray-400">Upload a video and our AI will analyze it for specific topics</p>
      </div>

      {/* Upload Area */}
      <div
        className={`border-3 border-dashed rounded-2xl p-12 text-center transition-all ${
          isDragging
            ? 'border-blue-500 bg-blue-900/20'
            : 'border-gray-600 hover:border-gray-500 bg-gray-900/30'
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => document.getElementById('fileInput')?.click()}
      >
        <input
          type="file"
          id="fileInput"
          className="hidden"
          accept="video/*"
          onChange={handleFileInput}
        />
        
        <div className="flex flex-col items-center justify-center">
          <div className="p-4 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full mb-6">
            <Upload className="w-12 h-12 text-gray-400" />
          </div>
          
          <h3 className="text-xl font-semibold text-white mb-2">
            {uploadedFile ? 'Video Ready for Analysis' : 'Drag & Drop or Click to Upload'}
          </h3>
          
          <p className="text-gray-400 mb-6 max-w-md">
            {uploadedFile
              ? 'Your video is ready for AI analysis. Click "Analyze Video" to proceed.'
              : 'Upload your video file (MP4, MOV, AVI, MKV) up to 2GB'}
          </p>
          
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-xl font-semibold flex items-center gap-2 transition-all transform hover:scale-105">
            <Upload className="w-5 h-5" />
            {uploadedFile ? 'Change Video' : 'Browse Files'}
          </button>
        </div>
      </div>

      {/* Uploaded File Info */}
      {uploadedFile && (
        <div className="mt-8 bg-gradient-to-r from-gray-800 to-gray-900/50 rounded-xl p-6 border border-gray-700">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-blue-900/30 rounded-lg">
                <FileVideo className="w-8 h-8 text-blue-400" />
              </div>
              <div>
                <h4 className="font-semibold text-white">{uploadedFile.name}</h4>
                <div className="flex items-center space-x-4 mt-2 text-sm text-gray-400">
                  <span className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>Size: {formatFileSize(uploadedFile.size)}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    <span>Ready for analysis</span>
                  </span>
                </div>
              </div>
            </div>
            <button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 transition-all">
              <Video className="w-5 h-5" />
              Analyze Video
            </button>
          </div>
        </div>
      )}

      {/* Features */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gray-900/50 p-4 rounded-xl border border-gray-700">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-blue-900/30 rounded-lg">
              <Video className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <h4 className="font-semibold text-white">AI Analysis</h4>
              <p className="text-sm text-gray-400">Smart topic detection</p>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-900/50 p-4 rounded-xl border border-gray-700">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-purple-900/30 rounded-lg">
              <Clock className="w-6 h-6 text-purple-400" />
            </div>
            <div>
              <h4 className="font-semibold text-white">Fast Processing</h4>
              <p className="text-sm text-gray-400">Results in minutes</p>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-900/50 p-4 rounded-xl border border-gray-700">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-green-900/30 rounded-lg">
              <AlertCircle className="w-6 h-6 text-green-400" />
            </div>
            <div>
              <h4 className="font-semibold text-white">Accurate Results</h4>
              <p className="text-sm text-gray-400">High precision segments</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoUpload;