import React, { useState, useEffect } from 'react';
import Layout from './Layout';
import api from '../utils/api';
import { HiUserGroup, HiStar, HiTrendingUp, HiUser } from 'react-icons/hi';

const Team = () => {
    const [team, setTeam] = useState([]);
    const [stats, setStats] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTeamData = async () => {
            try {
                const [teamResponse, statsResponse] = await Promise.all([
                    api.get('/api/team'),
                    api.get('/api/team/stats')
                ]);
                setTeam(teamResponse.data);
                setStats(statsResponse.data);
            } catch (err) {
                console.error('Error fetching team data:', err);
                setError('Failed to load team data');
            } finally {
                setLoading(false);
            }
        };

        fetchTeamData();
    }, []);

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
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-white mb-2">My Team</h1>
                    <p className="text-gray-400">Manage and track your team's performance</p>
                </div>

                {/* Team Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-gray-800 rounded-xl p-6">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-blue-500/10 rounded-lg">
                                <HiUserGroup className="text-blue-500 text-xl" />
                            </div>
                            <div>
                                <p className="text-gray-400">Total Members</p>
                                <p className="text-2xl font-bold text-white">{stats?.totalMembers || 0}</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-800 rounded-xl p-6">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-green-500/10 rounded-lg">
                                <HiTrendingUp className="text-green-500 text-xl" />
                            </div>
                            <div>
                                <p className="text-gray-400">Active Members</p>
                                <p className="text-2xl font-bold text-white">{stats?.activeMembers || 0}</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-800 rounded-xl p-6">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-yellow-500/10 rounded-lg">
                                <HiStar className="text-yellow-500 text-xl" />
                            </div>
                            <div>
                                <p className="text-gray-400">Team Rank</p>
                                <p className="text-2xl font-bold text-white">{stats?.teamRank || 'N/A'}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Team Members List */}
                <div className="bg-gray-800 rounded-xl p-6">
                    <h2 className="text-xl font-semibold text-white mb-4">Team Members</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="text-left text-gray-400 border-b border-gray-700">
                                    <th className="pb-4">Member</th>
                                    <th className="pb-4">Status</th>
                                    <th className="pb-4">Join Date</th>
                                    <th className="pb-4">Performance</th>
                                </tr>
                            </thead>
                            <tbody>
                                {team.map((member) => (
                                    <tr key={member._id} className="border-b border-gray-700">
                                        <td className="py-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center">
                                                    <HiUser className="text-gray-400" />
                                                </div>
                                                <div>
                                                    <p className="text-white">{member.firstName} {member.lastName}</p>
                                                    <p className="text-sm text-gray-400">{member.email}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="py-4">
                                            <span className={`px-2 py-1 rounded-full text-xs ${member.status === 'active'
                                                    ? 'bg-green-500/10 text-green-500'
                                                    : 'bg-red-500/10 text-red-500'
                                                }`}>
                                                {member.status}
                                            </span>
                                        </td>
                                        <td className="py-4 text-gray-400">
                                            {new Date(member.joinDate).toLocaleDateString()}
                                        </td>
                                        <td className="py-4">
                                            <div className="flex items-center gap-2">
                                                <div className="w-24 h-2 bg-gray-700 rounded-full">
                                                    <div
                                                        className="h-full bg-blue-500 rounded-full"
                                                        style={{ width: `${member.performance}%` }}
                                                    ></div>
                                                </div>
                                                <span className="text-gray-400">{member.performance}%</span>
                                            </div>
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

export default Team; 