import React, { useState, useEffect } from 'react';
import Layout from './Layout';
import api from '../utils/api';
import { HiCurrencyDollar, HiTrendingUp, HiGift, HiChartBar } from 'react-icons/hi';

const Earnings = () => {
    const [earnings, setEarnings] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [timeRange, setTimeRange] = useState('month'); // week, month, year

    useEffect(() => {
        const fetchEarnings = async () => {
            try {
                const response = await api.get(`/api/earnings?timeRange=${timeRange}`);
                setEarnings(response.data);
            } catch (err) {
                console.error('Error fetching earnings:', err);
                setError('Failed to load earnings data');
            } finally {
                setLoading(false);
            }
        };

        fetchEarnings();
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
                        <h1 className="text-3xl font-bold text-white mb-2">Earnings</h1>
                        <p className="text-gray-400">Track your earnings and bonuses</p>
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

                {/* Earnings Overview */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                    <div className="bg-gray-800 rounded-xl p-6">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-blue-500/10 rounded-lg">
                                <HiCurrencyDollar className="text-blue-500 text-xl" />
                            </div>
                            <div>
                                <p className="text-gray-400">Total Earnings</p>
                                <p className="text-2xl font-bold text-white">${earnings?.totalEarnings || 0}</p>
                                <p className="text-sm text-green-500">+{earnings?.earningsGrowth || 0}%</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-800 rounded-xl p-6">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-green-500/10 rounded-lg">
                                <HiTrendingUp className="text-green-500 text-xl" />
                            </div>
                            <div>
                                <p className="text-gray-400">Direct Sales</p>
                                <p className="text-2xl font-bold text-white">${earnings?.directSales || 0}</p>
                                <p className="text-sm text-green-500">+{earnings?.salesGrowth || 0}%</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-800 rounded-xl p-6">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-yellow-500/10 rounded-lg">
                                <HiGift className="text-yellow-500 text-xl" />
                            </div>
                            <div>
                                <p className="text-gray-400">Bonuses</p>
                                <p className="text-2xl font-bold text-white">${earnings?.bonuses || 0}</p>
                                <p className="text-sm text-green-500">+{earnings?.bonusGrowth || 0}%</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-800 rounded-xl p-6">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-purple-500/10 rounded-lg">
                                <HiChartBar className="text-purple-500 text-xl" />
                            </div>
                            <div>
                                <p className="text-gray-400">Commission Rate</p>
                                <p className="text-2xl font-bold text-white">{earnings?.commissionRate || 0}%</p>
                                <p className="text-sm text-green-500">+{earnings?.rateGrowth || 0}%</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Earnings History */}
                <div className="bg-gray-800 rounded-xl p-6">
                    <h2 className="text-xl font-semibold text-white mb-4">Earnings History</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="text-left text-gray-400 border-b border-gray-700">
                                    <th className="pb-4">Date</th>
                                    <th className="pb-4">Type</th>
                                    <th className="pb-4">Amount</th>
                                    <th className="pb-4">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {earnings?.history?.map((entry) => (
                                    <tr key={entry._id} className="border-b border-gray-700">
                                        <td className="py-4 text-gray-400">
                                            {new Date(entry.date).toLocaleDateString()}
                                        </td>
                                        <td className="py-4">
                                            <span className="px-2 py-1 rounded-full text-xs bg-blue-500/10 text-blue-500">
                                                {entry.type}
                                            </span>
                                        </td>
                                        <td className="py-4 text-white">
                                            ${entry.amount}
                                        </td>
                                        <td className="py-4">
                                            <span className={`px-2 py-1 rounded-full text-xs ${entry.status === 'paid'
                                                    ? 'bg-green-500/10 text-green-500'
                                                    : 'bg-yellow-500/10 text-yellow-500'
                                                }`}>
                                                {entry.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Earnings; 