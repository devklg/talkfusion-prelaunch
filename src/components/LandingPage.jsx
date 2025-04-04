import React, { useEffect, useState } from "react";
import api from "../utils/api";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
    const [leaderboard, setLeaderboard] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchLeaderboard = async () => {
            try {
                setLoading(true);
                const response = await api.get("/api/leaderboard");
                console.log('Leaderboard data:', response.data);
                setLeaderboard(response.data);
            } catch (err) {
                console.error("Error fetching leaderboard:", err);
                setError("Unable to load leaderboard data");
            } finally {
                setLoading(false);
            }
        };

        fetchLeaderboard();
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-800 via-purple-800 to-pink-700 text-white">
            {/* Team Name and Join Button */}
            <div className="bg-gray-800 border-b border-gray-800 h-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
                    <div className="flex items-center justify-between h-full">
                        <div className="text-yellow-400 font-bold">
                            <div className="text-lg">Magnificent Worldwide Marketing & Sales
                                Group-Team 25K</div>
                        </div>
                        <button
                            onClick={() => navigate("/signup")}
                            className="bg-yellow-400 hover:bg-yellow-300 text-black px-6 py-2 rounded-md text-sm font-bold shadow-lg transition"
                        >
                            Join Now
                        </button>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex flex-col items-center px-6 pb-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 mt-10">
                    <div className="relative group">
                        <div className="aspect-w-4 aspect-h-3 rounded-xl overflow-hidden shadow-2xl transform transition duration-500 group-hover:scale-105">
                            <iframe
                                src="https://www.youtube.com/embed/mKW8LZqf4VE?rel=0&modestbranding=1"
                                title="Product Video"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="w-full h-full"
                                frameBorder="0"
                                loading="lazy"
                            ></iframe>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex items-end pointer-events-none">
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-2">Product Overview</h3>
                                <p className="text-white/90">Watch our comprehensive product demonstration</p>
                            </div>
                        </div>
                    </div>

                    <div className="relative group">
                        <div className="aspect-w-4 aspect-h-3 rounded-xl overflow-hidden shadow-2xl transform transition duration-500 group-hover:scale-105">
                            <iframe
                                src="https://www.youtube.com/embed/HW6NqKkbs6M?rel=0&modestbranding=1"
                                title="Usage Video"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="w-full h-full"
                                frameBorder="0"
                                loading="lazy"
                            ></iframe>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex items-end pointer-events-none">
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-2">How to Use</h3>
                                <p className="text-white/90">Learn how to get started with our platform</p>
                            </div>
                        </div>
                    </div>
                </div>

                <button
                    onClick={() => navigate("/signup")}
                    className="bg-yellow-400 hover:bg-yellow-300 text-black text-lg font-bold py-3 px-8 rounded-full shadow-lg transition mb-8"
                >
                    💥 Join the Prelaunch Now
                </button>

                <section className="bg-white text-black rounded-xl shadow-xl p-6 w-full max-w-2xl">
                    <h2 className="text-2xl font-bold text-center mb-4">🔥 Top Referrers</h2>
                    {loading ? (
                        <div className="flex items-center justify-center py-8">
                            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                            <span className="ml-2">Loading leaderboard...</span>
                        </div>
                    ) : error ? (
                        <div className="text-center py-4 text-red-600">{error}</div>
                    ) : leaderboard.length === 0 ? (
                        <div className="text-center py-4 text-gray-600">No data available yet</div>
                    ) : (
                        <ul className="divide-y divide-gray-300">
                            {leaderboard.map((user, index) => (
                                <li key={index} className="py-3 flex items-center justify-between">
                                    <div className="flex items-center">
                                        <span className="text-lg font-semibold text-gray-900">{user.name}</span>
                                    </div>
                                    <div className="flex items-center">
                                        <span className="text-lg font-bold text-blue-600">{user.referrals}</span>
                                        <span className="ml-2 text-gray-500">referrals</span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}
                </section>
            </div>
        </div>
    );
};

export default LandingPage; 