import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../utils/api';
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
    const navigate = useNavigate();
    const [stats, setStats] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const response = await api.get('/api/dashboard/stats');
                setStats(response.data);
            } catch (err) {
                console.error('Error fetching dashboard stats:', err);
                setError('Failed to load dashboard data');
            } finally {
                setLoading(false);
            }
        };

        if (user) {
            fetchStats();
        }
    }, [user]);

    const handleLogout = async () => {
        try {
            await logout();
            navigate('/login');
        } catch (err) {
            console.error('Logout error:', err);
        }
    };

    const handleQuickAction = (action) => {
        switch (action) {
            case 'leaderboard':
                navigate('/leaderboard');
                break;
            case 'earnings':
                navigate('/earnings');
                break;
            case 'team':
                navigate('/team');
                break;
            case 'profile':
                navigate('/profile');
                break;
        }
    };

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
                            <h1 className="text-3xl font-bold mb-2">Welcome back, {user?.firstName}!</h1>
                            <p className="text-blue-100">Here's what's happening with your business today.</p>
                        </div>
                        <div className="flex items-center space-x-4">
                            <button
                                onClick={() => handleQuickAction('profile')}
                                className="bg-white/10 p-4 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-colors"
                            >
                                <HiUser className="text-xl" />
                            </button>
                            <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                                <p className="text-sm text-blue-100">Member Since</p>
                                <p className="text-xl font-semibold">2024</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* User Info Card */}
                <div className="bg-gray-800 rounded-lg shadow-xl p-6 mb-8">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-2xl font-bold text-yellow-400">Your Profile</h2>
                        <button
                            onClick={() => handleQuickAction('profile')}
                            className="text-blue-400 hover:text-blue-300 flex items-center space-x-2"
                        >
                            <span>Edit Profile</span>
                            <HiCog className="text-xl" />
                        </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <p className="text-gray-400">Name</p>
                            <p className="text-lg">{stats?.user?.firstName} {stats?.user?.lastName}</p>
                        </div>
                        <div>
                            <p className="text-gray-400">Email</p>
                            <p className="text-lg">{stats?.user?.email}</p>
                        </div>
                        <div>
                            <p className="text-gray-400">Package</p>
                            <p className="text-lg">{stats?.user?.package}</p>
                        </div>
                        <div>
                            <p className="text-gray-400">Enroller</p>
                            <p className="text-lg">{stats?.user?.enroller}</p>
                        </div>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Referrals Card */}
                    <div className="bg-gray-800 rounded-lg shadow-xl p-6">
                        <h3 className="text-xl font-bold text-yellow-400 mb-2">Referrals</h3>
                        <p className="text-3xl font-bold">{stats?.referrals || 0}</p>
                    </div>

                    {/* Points Card */}
                    <div className="bg-gray-800 rounded-lg shadow-xl p-6">
                        <h3 className="text-xl font-bold text-yellow-400 mb-2">Points</h3>
                        <p className="text-3xl font-bold">{stats?.points || 0}</p>
                    </div>

                    {/* Rank Card */}
                    <div className="bg-gray-800 rounded-lg shadow-xl p-6">
                        <h3 className="text-xl font-bold text-yellow-400 mb-2">Rank</h3>
                        <p className="text-3xl font-bold">{stats?.rank}</p>
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <button
                        onClick={() => handleQuickAction('leaderboard')}
                        className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-left group"
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <div className="p-3 bg-blue-500/10 rounded-lg group-hover:bg-blue-500 transition-colors duration-300">
                                <HiChartBar className="text-blue-500 group-hover:text-white" size={24} />
                            </div>
                            <h3 className="font-semibold text-white">View Leaderboard</h3>
                        </div>
                        <p className="text-sm text-gray-400">See where you rank among other members</p>
                    </button>
                    <button
                        onClick={() => handleQuickAction('earnings')}
                        className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-left group"
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <div className="p-3 bg-green-500/10 rounded-lg group-hover:bg-green-500 transition-colors duration-300">
                                <HiCurrencyDollar className="text-green-500 group-hover:text-white" size={24} />
                            </div>
                            <h3 className="font-semibold text-white">Track Earnings</h3>
                        </div>
                        <p className="text-sm text-gray-400">Monitor your earnings and bonuses</p>
                    </button>
                    <button
                        onClick={() => handleQuickAction('team')}
                        className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-left group"
                    >
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