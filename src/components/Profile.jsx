import React, { useState, useEffect } from 'react';
import { getAxiosInstance } from '../api/axios';

const Profile = () => {
    const [user, setUser] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [showPaymentModal, setShowPaymentModal] = useState(false);
    const [formData, setFormData] = useState({
        address: '',
        city: '',
        state: '',
        zip: '',
        country: '',
        telephone: '',
        newPassword: '',
        confirmPassword: ''
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const userData = localStorage.getItem('user');
        if (userData) {
            setUser(JSON.parse(userData));
        }
    }, []);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setSuccess('');

        try {
            const axiosInstance = await getAxiosInstance();
            const response = await axiosInstance.put('/api/users/profile', formData);

            setUser(response.data.user);
            setSuccess('Profile updated successfully');
            setIsEditing(false);
        } catch (error) {
            setError(error.response?.data?.message || 'Failed to update profile');
        } finally {
            setLoading(false);
        }
    };

    const handlePasswordChange = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setSuccess('');

        if (formData.newPassword !== formData.confirmPassword) {
            setError('Passwords do not match');
            setLoading(false);
            return;
        }

        try {
            const axiosInstance = await getAxiosInstance();
            await axiosInstance.post('/api/auth/change-password', {
                currentPassword: formData.currentPassword,
                newPassword: formData.newPassword
            });

            setSuccess('Password changed successfully');
            setFormData({ ...formData, newPassword: '', confirmPassword: '', currentPassword: '' });
        } catch (error) {
            setError(error.response?.data?.message || 'Failed to change password');
        } finally {
            setLoading(false);
        }
    };

    const PaymentModal = () => (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg p-6 max-w-md w-full">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Payment Information</h3>
                <form className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Card Number</label>
                        <input
                            type="text"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                            placeholder="1234 5678 9012 3456"
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Expiry Date</label>
                            <input
                                type="text"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                placeholder="MM/YY"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">CVV</label>
                            <input
                                type="text"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                placeholder="123"
                            />
                        </div>
                    </div>
                    <div className="flex justify-end space-x-3">
                        <button
                            type="button"
                            onClick={() => setShowPaymentModal(false)}
                            className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
                        >
                            Save Payment Info
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );

    if (!user) {
        return <div className="text-white text-center">Loading...</div>;
    }

    return (
        <div className="min-h-screen bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                <div className="bg-gray-800 shadow rounded-lg p-6">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-bold text-white">Profile Information</h2>
                        <div className="space-x-4">
                            <button
                                onClick={() => setIsEditing(!isEditing)}
                                className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
                            >
                                {isEditing ? 'Cancel' : 'Edit Profile'}
                            </button>
                            <button
                                onClick={() => setShowPaymentModal(true)}
                                className="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-md hover:bg-green-700"
                            >
                                Add Payment Info
                            </button>
                        </div>
                    </div>

                    {error && (
                        <div className="mb-4 p-4 bg-red-50 text-red-700 rounded-md">
                            {error}
                        </div>
                    )}

                    {success && (
                        <div className="mb-4 p-4 bg-green-50 text-green-700 rounded-md">
                            {success}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-300">First Name</label>
                                <input
                                    type="text"
                                    value={user.firstName}
                                    disabled
                                    className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-300">Last Name</label>
                                <input
                                    type="text"
                                    value={user.lastName}
                                    disabled
                                    className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-300">Email</label>
                                <input
                                    type="email"
                                    value={user.email}
                                    disabled
                                    className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-300">Enroller Name</label>
                                <input
                                    type="text"
                                    value={user.enrollerName || 'Not assigned'}
                                    disabled
                                    className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-300">Enroller ID</label>
                                <input
                                    type="text"
                                    value={user.enrollerId || 'Not assigned'}
                                    disabled
                                    className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-300">Address</label>
                                <input
                                    type="text"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    disabled={!isEditing}
                                    className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-300">City</label>
                                <input
                                    type="text"
                                    name="city"
                                    value={formData.city}
                                    onChange={handleChange}
                                    disabled={!isEditing}
                                    className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-300">State</label>
                                <input
                                    type="text"
                                    name="state"
                                    value={formData.state}
                                    onChange={handleChange}
                                    disabled={!isEditing}
                                    className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-300">ZIP Code</label>
                                <input
                                    type="text"
                                    name="zip"
                                    value={formData.zip}
                                    onChange={handleChange}
                                    disabled={!isEditing}
                                    className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-300">Country</label>
                                <input
                                    type="text"
                                    name="country"
                                    value={formData.country}
                                    onChange={handleChange}
                                    disabled={!isEditing}
                                    className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-300">Telephone</label>
                                <input
                                    type="tel"
                                    name="telephone"
                                    value={formData.telephone}
                                    onChange={handleChange}
                                    disabled={!isEditing}
                                    className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white"
                                />
                            </div>
                        </div>

                        {isEditing && (
                            <div className="flex justify-end">
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
                                >
                                    {loading ? 'Saving...' : 'Save Changes'}
                                </button>
                            </div>
                        )}
                    </form>

                    <div className="mt-8 pt-8 border-t border-gray-700">
                        <h3 className="text-lg font-medium text-white mb-4">Change Password</h3>
                        <form onSubmit={handlePasswordChange} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-300">Current Password</label>
                                <input
                                    type="password"
                                    name="currentPassword"
                                    value={formData.currentPassword}
                                    onChange={handleChange}
                                    className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-300">New Password</label>
                                <input
                                    type="password"
                                    name="newPassword"
                                    value={formData.newPassword}
                                    onChange={handleChange}
                                    className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-300">Confirm New Password</label>
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white"
                                />
                            </div>
                            <div className="flex justify-end">
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
                                >
                                    {loading ? 'Changing Password...' : 'Change Password'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {showPaymentModal && <PaymentModal />}
        </div>
    );
};

export default Profile; 