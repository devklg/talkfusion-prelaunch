import React, { useState, useEffect } from 'react';
import axios from '../utils/axios';
import { useAuth } from '../context/AuthContext';
import Layout from "./Layout";
import {
    HiCurrencyDollar,
    HiUserGroup,
    HiTrendingUp,
    HiStar,
    HiChartBar,
    HiCog,
    HiBell,
    HiSearch,
    HiUser,
    HiGlobeAlt,
    HiLogout,
    HiArrowUp,
    HiArrowDown
} from "react-icons/hi";

const Dashboard = () => {
    const { user, logout } = useAuth();
    const [stats, setStats] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const response = await axios.get('/dashboard/stats');
                setStats(response.data);
            } catch (err) {
                console.error('Error fetching dashboard stats:', err);
                setError('Failed to load dashboard data');
            } finally {
                setLoading(false);
            }
        };

        fetchStats();
    }, []);

    if (loading) {
        return (
            <Layout user={user}>
                <div className="flex items-center justify-center h-full">
                    <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
                </div>
            </Layout>
        );
    }

    if (error) {
        return (
            <Layout user={user}>
                <div className="flex items-center justify-center h-full">
                    <div className="bg-red-500 text-white p-4 rounded-lg">
                        {error}
                    </div>
                </div>
            </Layout>
        );
    }

    return (
        <Layout user={user}>
            <div className="space-y-6 p-6">
                {/* Welcome Section */}
                <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-8 text-white">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-3xl font-bold mb-2">Welcome back, {user?.name}!</h1>
                            <p className="text-blue-100">Here's what's happening with your business today.</p>
                        </div>
                        <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                            <p className="text-sm text-blue-100">Member Since</p>
                            <p className="text-xl font-semibold">2024</p>
                        </div>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Earnings Card */}
                    <div className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <div className="flex items-center justify-between mb-4">
                            <div className="p-3 bg-green-500/10 rounded-lg">
                                <HiCurrencyDollar className="text-green-500" size={24} />
                            </div>
                            <div className="flex items-center text-green-500">
                                <HiArrowUp size={16} />
                                <span className="text-sm ml-1">+12%</span>
                            </div>
                        </div>
                        <div>
                            <p className="text-sm text-gray-400">Total Earnings</p>
                            <p className="text-2xl font-bold text-white">${stats?.totalEarnings}</p>
                        </div>
                    </div>

                    {/* Referrals Card */}
                    <div className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <div className="flex items-center justify-between mb-4">
                            <div className="p-3 bg-blue-500/10 rounded-lg">
                                <HiUserGroup className="text-blue-500" size={24} />
                            </div>
                            <div className="flex items-center text-blue-500">
                                <HiArrowUp size={16} />
                                <span className="text-sm ml-1">+5</span>
                            </div>
                        </div>
                        <div>
                            <p className="text-sm text-gray-400">Total Referrals</p>
                            <p className="text-2xl font-bold text-white">{stats?.activeTeamMembers}</p>
                        </div>
                    </div>

                    {/* Growth Card */}
                    <div className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <div className="flex items-center justify-between mb-4">
                            <div className="p-3 bg-purple-500/10 rounded-lg">
                                <HiTrendingUp className="text-purple-500" size={24} />
                            </div>
                            <div className="flex items-center text-purple-500">
                                <HiArrowUp size={16} />
                                <span className="text-sm ml-1">+8%</span>
                            </div>
                        </div>
                        <div>
                            <p className="text-sm text-gray-400">Growth Rate</p>
                            <p className="text-2xl font-bold text-white">+12%</p>
                        </div>
                    </div>

                    {/* Rank Card */}
                    <div className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <div className="flex items-center justify-between mb-4">
                            <div className="p-3 bg-yellow-500/10 rounded-lg">
                                <HiStar className="text-yellow-500" size={24} />
                            </div>
                            <div className="flex items-center text-yellow-500">
                                <HiArrowUp size={16} />
                                <span className="text-sm ml-1">+2</span>
                            </div>
                        </div>
                        <div>
                            <p className="text-sm text-gray-400">Current Rank</p>
                            <p className="text-2xl font-bold text-white">#15</p>
                        </div>
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <button className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-left group">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="p-3 bg-blue-500/10 rounded-lg group-hover:bg-blue-500 transition-colors duration-300">
                                <HiChartBar className="text-blue-500 group-hover:text-white" size={24} />
                            </div>
                            <h3 className="font-semibold text-white">View Leaderboard</h3>
                        </div>
                        <p className="text-sm text-gray-400">See where you rank among other members</p>
                    </button>
                    <button className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-left group">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="p-3 bg-green-500/10 rounded-lg group-hover:bg-green-500 transition-colors duration-300">
                                <HiCurrencyDollar className="text-green-500 group-hover:text-white" size={24} />
                            </div>
                            <h3 className="font-semibold text-white">Track Earnings</h3>
                        </div>
                        <p className="text-sm text-gray-400">Monitor your earnings and bonuses</p>
                    </button>
                    <button className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-left group">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="p-3 bg-purple-500/10 rounded-lg group-hover:bg-purple-500 transition-colors duration-300">
                                <HiUserGroup className="text-purple-500 group-hover:text-white" size={24} />
                            </div>
                            <h3 className="font-semibold text-white">Manage Team</h3>
                        </div>
                        <p className="text-sm text-gray-400">View and manage your enrollers</p>
                    </button>
                </div>
            </div>
        </Layout>
    );
};

export default Dashboard; 