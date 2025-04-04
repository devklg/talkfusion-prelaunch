import React, { useState } from 'react';
import YouTube from 'react-youtube';

const VideoPlayer = ({ videoId, className, title }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            autoplay: 0,
            modestbranding: 1,
            rel: 0,
            showinfo: 1,
            controls: 1,
        },
    };

    const onReady = (event) => {
        setIsLoading(false);
        console.log('YouTube Player Ready');
    };

    const onError = (event) => {
        setError('Error loading video. Please try again later.');
        setIsLoading(false);
    };

    const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

    return (
        <div className={`video-container relative ${className || ''}`}>
            {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-lg">
                    <div className="flex flex-col items-center">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                        <p className="mt-2 text-gray-600">Loading video...</p>
                    </div>
                </div>
            )}
            {error && (
                <div className="absolute inset-0 flex items-center justify-center bg-red-50 rounded-lg">
                    <p className="text-red-500">{error}</p>
                </div>
            )}
            <div className="relative group">
                <YouTube
                    videoId={videoId}
                    opts={opts}
                    onReady={onReady}
                    onError={onError}
                    className="w-full aspect-video rounded-lg shadow-lg transition duration-300 group-hover:shadow-xl"
                    title={title}
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 rounded-lg"></div>
            </div>
        </div>
    );
};

export default VideoPlayer; 