import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
    const [leaderboard, setLeaderboard] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("/api/leaderboard").then(res => setLeaderboard(res.data));
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-800 via-purple-800 to-pink-700 text-white flex flex-col items-center px-6 pb-10">
            <header className="max-w-6xl w-full text-center py-10">
                <h1 className="text-5xl md:text-6xl font-extrabold mb-4">🚀 Talk Fusion Is Coming</h1>
                <p className="text-lg md:text-xl mb-6 font-medium">Launching April 2025 — Instant Pay, Global Team Growth, Unlimited Potential.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-10">
                    <div>
                        <p className="text-lg font-semibold mb-2">📺 Talk Fusion - Product Video</p>
                        <video className="rounded-lg shadow-xl w-full" autoPlay muted loop controls>
                            <source src="/videos/talkfusion-product.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div>
                        <p className="text-lg font-semibold mb-2">🌍 Talk Fusion - Market Opportunity</p>
                        <video className="rounded-lg shadow-xl w-full" autoPlay muted loop controls>
                            <source src="/videos/talkfusion-market.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
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
                <ul className="divide-y divide-gray-300">
                    {leaderboard.map((user, index) => (
                        <li key={index} className="py-2 text-lg">
                            <span className="font-semibold">{user.name}</span> — {user.referrals} referrals
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
};

export default LandingPage; 