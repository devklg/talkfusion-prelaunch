import React, { useEffect, useState } from "react";
import axios from "../utils/axios";
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
                const response = await axios.get("/api/leaderboard");
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
        <div className="min-h-screen bg-gradient-to-br from-indigo-800 via-purple-800 to-pink-700 text-white flex flex-col items-center px-6 pb-10">
            <header className="max-w-6xl w-full text-center py-10">
                <h1 className="text-5xl md:text-6xl font-extrabold mb-4">🚀 Talk Fusion Is Coming</h1>
                <p className="text-lg md:text-xl mb-6 font-medium">Launching April 2025 — Instant Pay, Global Team Growth, Unlimited Potential.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    <div className="relative group">
                        <div className="aspect-w-4 aspect-h-3 rounded-xl overflow-hidden shadow-2xl transform transition duration-500 group-hover:scale-105">
                            <iframe
                                src="https://www.youtube.com/embed/mKW8LZqf4VE?rel=0&modestbranding=1"
                                title="Product Video"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="w-full h-full"
                                frameBorder="0"
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
                    className="bg-yellow-400 hover:bg-yellow-300 text-black text-lg font-bold py-3 px-8 rounded-full shadow-lg transition"
                >
                    💥 Join the Prelaunch Now
                </button>
            </header>

            <section className="bg-white text-black rounded-xl shadow-xl p-6 w-full max-w-2xl">
                <h2 className="text-2xl font-bold text-center mb-4">🔥 Top Referrers</h2>
                {loading ? (
                    <div className="text-center py-4">Loading leaderboard...</div>
                ) : error ? (
                    <div className="text-center py-4 text-red-600">{error}</div>
                ) : leaderboard.length === 0 ? (
                    <div className="text-center py-4">No data available yet</div>
                ) : (
                    <ul className="divide-y divide-gray-300">
                        {leaderboard.map((user, index) => (
                            <li key={index} className="py-2 text-lg">
                                <span className="font-semibold">{user.name}</span> — {user.referrals} referrals
                            </li>
                        ))}
                    </ul>
                )}
            </section>
        </div>
    );
};

export default LandingPage; 