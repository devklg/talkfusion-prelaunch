import React, { useState, useEffect } from 'react';
import axios from '../utils/axios';
import Layout from './Layout';

const Leaderboard = () => {
    const [leaders, setLeaders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchLeaders = async () => {
            try {
                const response = await axios.get('/users/leaderboard');
                setLeaders(response.data);
            } catch (err) {
                console.error('Error fetching leaderboard:', err);
                setError('Failed to load leaderboard data');
            } finally {
                setLoading(false);
            }
        };

        fetchLeaders();
    }, []);

    if (loading) {
        return (
            <Layout>
                <div className="flex justify-center items-center h-64">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
                </div>
            </Layout>
        );
    }

    if (error) {
        return (
            <Layout>
                <div className="text-center text-red-500 p-4">
                    {error}
                </div>
            </Layout>
        );
    }

    return (
        <Layout>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="bg-gray-800 rounded-lg shadow-lg p-6">
                    <h2 className="text-2xl font-bold text-white mb-6">Top Performers</h2>
                    <div className="space-y-4">
                        {leaders.map((leader, index) => (
                            <div key={leader._id} className="flex items-center justify-between bg-gray-700 rounded-lg p-4">
                                <div className="flex items-center space-x-4">
                                    <span className="text-xl font-bold text-blue-500">#{index + 1}</span>
                                    <div>
                                        <h3 className="text-white font-medium">{leader.firstName} {leader.lastName}</h3>
                                        <p className="text-gray-400 text-sm">{leader.country}</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-white font-medium">{leader.points}</p>
                                    <p className="text-gray-400 text-sm">points</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Leaderboard; 