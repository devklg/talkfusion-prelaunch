import React, { useState, useEffect } from 'react';
import { getAxiosInstance } from '../api/axios';

const Leaderboard = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchLeaderboard = async () => {
            try {
                const axiosInstance = await getAxiosInstance();
                const response = await axiosInstance.get('/users/leaderboard');
                setUsers(response.data);
            } catch (err) {
                setError('Failed to load leaderboard');
                console.error('Leaderboard error:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchLeaderboard();
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-900 flex items-center justify-center">
                <div className="text-white">Loading...</div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen bg-gray-900 flex items-center justify-center">
                <div className="text-red-500">{error}</div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-900">
            <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <div className="px-4 py-6 sm:px-0">
                    <h1 className="text-2xl font-bold text-white mb-4">Leaderboard</h1>
                    <div className="bg-gray-800 rounded-lg shadow overflow-hidden">
                        <table className="min-w-full divide-y divide-gray-700">
                            <thead className="bg-gray-700">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Rank</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Name</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Country</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Points</th>
                                </tr>
                            </thead>
                            <tbody className="bg-gray-800 divide-y divide-gray-700">
                                {users.map((user, index) => (
                                    <tr key={user._id}>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{index + 1}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{user.firstName} {user.lastName}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{user.country}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{user.points}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Leaderboard; 