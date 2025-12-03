// src/components/.jsx
import React, { useRef, useState } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2, Maximize } from 'lucide-react';

const VideoPlayer = ({ videoUrl, currentTime, onTimeUpdate, segments = [] }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
     VideoPlayer } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleSeek = (time) => {
    if (videoRef.current) {
      videoRef.current.currentTime = time;
    }
  };

  const handleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }
  };

  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 overflow-hidden">
      {/* Video Container */}
      <div className="relative bg-black">
        <video
          ref={videoRef}
          src={videoUrl}
          className="w-full h-auto max-h-[70vh]"
          onTimeUpdate={onTimeUpdate}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        />
        
        {/* Segment Timeline Overlay */}
        <div className="absolute bottom-20 left-0 right-0 px-4">
          <div className="flex space-x-1">
            {segments.map((segment, index) => (
              <div
                key={segment.id}
                className="h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full cursor-pointer hover:h-3 transition-all"
                style={{
                  width: `${((segment.end - segment.start) / videoRef.current?.duration || 100) * 100}%`,
                }}
                title={`Segment ${index + 1}: ${segment.title}`}
                onClick={() => handleSeek(segment.start)}
              />
            ))}
          </div>
        </div>
        
        {/* Controls Overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              {/* Play/Pause Button */}
              <button
                onClick={togglePlay}
                className="bg-white text-black p-3 rounded-full hover:bg-gray-200 transition-colors"
              >
                {isPlaying ? (
                  <Pause className="w-6 h-6" />
                ) : (
                  <Play className="w-6 h-6" />
                )}
              </button>
              
              {/* Skip Buttons */}
              <button
                onClick={() => handleSeek(Math.max(0, currentTime - 10))}
                className="text-gray-300 hover:text-white p-2"
              >
                <SkipBack className="w-5 h-5" />
              </button>
              
              <button
                onClick={() => handleSeek(currentTime + 10)}
                className="text-gray-300 hover:text-white p-2"
              >
                <SkipForward className="w-5 h-5" />
              </button>
              
              {/* Time Display */}
              <span className="text-sm font-medium text-white">
                {formatTime(currentTime)} / {formatTime(videoRef.current?.duration || 0)}
              </span>
            </div>
            
            <div className="flex items-center space-x-4">
              {/* Volume Control */}
              <div className="flex items-center space-x-2">
                <Volume2 className="w-5 h-5 text-gray-300" />
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={volume}
                  onChange={(e) => {
                    const newVolume = parseFloat(e.target.value);
                    setVolume(newVolume);
                    if (videoRef.current) {
                      videoRef.current.volume = newVolume;
                    }
                  }}
                  className="w-24 accent-blue-500"
                />
              </div>
              
              {/* Fullscreen Button */}
              <button
                onClick={handleFullscreen}
                className="text-gray-300 hover:text-white p-2"
              >
                <Maximize className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Current Segment Info */}
      {segments.length > 0 && (
        <div className="p-4 bg-gradient-to-r from-blue-900/20 to-purple-900/20 border-t border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-semibold text-white">Current Segment</h4>
              <p className="text-sm text-gray-300">
                {segments.find(s => currentTime >= s.start && currentTime <= s.end)?.title || 'No active segment'}
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-400">Time</p>
              <p className="font-semibold text-white">{formatTime(currentTime)}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;