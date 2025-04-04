import React from 'react';
import VideoPlayer from './VideoPlayer';

const VideoSection = () => {
    const videos = [
        {
            id: 'HW6NqKkbs6M',
            title: 'Introduction to TalkFusion',
            description: 'Learn how TalkFusion is revolutionizing the way we communicate.',
        },
        {
            id: 'mKW8LZqf4VE',
            title: 'TalkFusion Features Overview',
            description: 'Discover the powerful features that make TalkFusion unique.',
        },
    ];

    return (
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in">
                        Featured Videos
                    </h2>
                    <p className="text-lg text-gray-600">
                        Watch our videos to learn more about how TalkFusion can transform your communication experience.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {videos.map((video, index) => (
                        <div
                            key={video.id}
                            className="flex flex-col transform hover:-translate-y-1 transition-all duration-300 ease-in-out"
                            style={{
                                animationDelay: `${index * 200}ms`,
                                animation: 'fade-in-up 0.6s ease-out forwards'
                            }}
                        >
                            <VideoPlayer
                                videoId={video.id}
                                className="mb-6"
                                title={video.title}
                            />
                            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                                {video.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {video.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            <style jsx>{`
                @keyframes fade-in-up {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .animate-fade-in {
                    animation: fade-in 0.6s ease-out forwards;
                }
                @keyframes fade-in {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
            `}</style>
        </section>
    );
};

export default VideoSection; 