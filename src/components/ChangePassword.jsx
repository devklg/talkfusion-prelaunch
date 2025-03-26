import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAxiosInstance } from '../api/axios';

const ChangePassword = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        currentPassword: localStorage.getItem('tempPassword') || '',
        newPassword: '',
        confirmPassword: ''
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const tempEmail = localStorage.getItem('tempEmail');
        if (!tempEmail) {
            navigate('/login');
            return;
        }
        setUser({ email: tempEmail });
    }, [navigate]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (formData.newPassword !== formData.confirmPassword) {
            setError('New passwords do not match');
            return;
        }

        if (formData.newPassword.length < 6) {
            setError('New password must be at least 6 characters long');
            return;
        }

        setLoading(true);

        try {
            const axiosInstance = await getAxiosInstance();
            const response = await axiosInstance.post('/auth/change-password', {
                email: user.email,
                currentPassword: formData.currentPassword,
                newPassword: formData.newPassword
            });

            // Store new token and user data
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('user', JSON.stringify(response.data.user));
            localStorage.removeItem('tempEmail');
            localStorage.removeItem('tempPassword');

            // Redirect to profile
            navigate('/profile');
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to change password. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    if (!user) {
        return null;
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
                        Change Your Password
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-400">
                        Please change your temporary password to continue
                    </p>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="currentPassword" className="sr-only">Current Password</label>
                            <input
                                id="currentPassword"
                                name="currentPassword"
                                type="password"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-700 placeholder-gray-500 text-white bg-gray-800 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                                placeholder="Current Password"
                                value={formData.currentPassword}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="newPassword" className="sr-only">New Password</label>
                            <input
                                id="newPassword"
                                name="newPassword"
                                type="password"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-700 placeholder-gray-500 text-white bg-gray-800 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                                placeholder="New Password"
                                value={formData.newPassword}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="confirmPassword" className="sr-only">Confirm New Password</label>
                            <input
                                id="confirmPassword"
                                name="confirmPassword"
                                type="password"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-700 placeholder-gray-500 text-white bg-gray-800 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                                placeholder="Confirm New Password"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    {error && (
                        <div className="text-red-500 text-sm text-center">
                            {error}
                        </div>
                    )}

                    <div>
                        <button
                            type="submit"
                            disabled={loading}
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
                        >
                            {loading ? 'Changing Password...' : 'Change Password'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ChangePassword; 