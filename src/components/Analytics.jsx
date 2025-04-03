import React, { useState, useEffect } from 'react';
import Layout from './Layout';
import api from '../utils/api';
import { HiChartBar, HiTrendingUp, HiUserGroup, HiCurrencyDollar } from 'react-icons/hi';

const Analytics = () => {
    const [analytics, setAnalytics] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [timeRange, setTimeRange] = useState('week'); // week, month, year

    useEffect(() => {
        const fetchAnalytics = async () => {
            try {
                const response = await api.get(`/api/analytics?timeRange=${timeRange}`);
                setAnalytics(response.data);
            } catch (err) {
                console.error('Error fetching analytics:', err);
                setError('Failed to load analytics data');
            } finally {
                setLoading(false);
            }
        };

        fetchAnalytics();
    }, [timeRange]);

    if (loading) {
        return (
            <Layout>
                <div className="flex items-center justify-center h-full">
                    <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
                </div>
            </Layout>
        );
    }

    if (error) {
        return (
            <Layout>
                <div className="flex items-center justify-center h-full">
                    <div className="text-red-500 text-xl">{error}</div>
                </div>
            </Layout>
        );
    }

    return (
        <Layout>
            <div className="p-6">
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h1 className="text-3xl font-bold text-white mb-2">Analytics</h1>
                        <p className="text-gray-400">Track your performance metrics</p>
                    </div>
                    <div className="flex gap-2">
                        <button
                            onClick={() => setTimeRange('week')}
                            className={`px-4 py-2 rounded-lg ${timeRange === 'week'
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                                }`}
                        >
                            Week
                        </button>
                        <button
                            onClick={() => setTimeRange('month')}
                            className={`px-4 py-2 rounded-lg ${timeRange === 'month'
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                                }`}
                        >
                            Month
                        </button>
                        <button
                            onClick={() => setTimeRange('year')}
                            className={`px-4 py-2 rounded-lg ${timeRange === 'year'
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                                }`}
                        >
                            Year
                        </button>
                    </div>
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                    <div className="bg-gray-800 rounded-xl p-6">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-blue-500/10 rounded-lg">
                                <HiChartBar className="text-blue-500 text-xl" />
                            </div>
                            <div>
                                <p className="text-gray-400">Total Sales</p>
                                <p className="text-2xl font-bold text-white">${analytics?.totalSales || 0}</p>
                                <p className="text-sm text-green-500">+{analytics?.salesGrowth || 0}%</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-800 rounded-xl p-6">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-green-500/10 rounded-lg">
                                <HiTrendingUp className="text-green-500 text-xl" />
                            </div>
                            <div>
                                <p className="text-gray-400">Conversion Rate</p>
                                <p className="text-2xl font-bold text-white">{analytics?.conversionRate || 0}%</p>
                                <p className="text-sm text-green-500">+{analytics?.conversionGrowth || 0}%</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-800 rounded-xl p-6">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-yellow-500/10 rounded-lg">
                                <HiUserGroup className="text-yellow-500 text-xl" />
                            </div>
                            <div>
                                <p className="text-gray-400">New Members</p>
                                <p className="text-2xl font-bold text-white">{analytics?.newMembers || 0}</p>
                                <p className="text-sm text-green-500">+{analytics?.memberGrowth || 0}%</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-800 rounded-xl p-6">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-purple-500/10 rounded-lg">
                                <HiCurrencyDollar className="text-purple-500 text-xl" />
                            </div>
                            <div>
                                <p className="text-gray-400">Average Order</p>
                                <p className="text-2xl font-bold text-white">${analytics?.averageOrder || 0}</p>
                                <p className="text-sm text-green-500">+{analytics?.orderGrowth || 0}%</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Performance Chart */}
                <div className="bg-gray-800 rounded-xl p-6">
                    <h2 className="text-xl font-semibold text-white mb-4">Performance Overview</h2>
                    <div className="h-80 flex items-center justify-center">
                        <div className="text-gray-400">Chart will be implemented here</div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Analytics; 