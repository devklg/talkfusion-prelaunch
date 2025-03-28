import React, { useState, useEffect } from 'react';
import axios from '../utils/axios';
import { useAuth } from '../context/AuthContext';
import Layout from './Layout';

// US States data
const US_STATES = [
    { value: 'AL', label: 'Alabama' },
    { value: 'AK', label: 'Alaska' },
    { value: 'AZ', label: 'Arizona' },
    { value: 'AR', label: 'Arkansas' },
    { value: 'CA', label: 'California' },
    { value: 'CO', label: 'Colorado' },
    { value: 'CT', label: 'Connecticut' },
    { value: 'DE', label: 'Delaware' },
    { value: 'FL', label: 'Florida' },
    { value: 'GA', label: 'Georgia' },
    { value: 'HI', label: 'Hawaii' },
    { value: 'ID', label: 'Idaho' },
    { value: 'IL', label: 'Illinois' },
    { value: 'IN', label: 'Indiana' },
    { value: 'IA', label: 'Iowa' },
    { value: 'KS', label: 'Kansas' },
    { value: 'KY', label: 'Kentucky' },
    { value: 'LA', label: 'Louisiana' },
    { value: 'ME', label: 'Maine' },
    { value: 'MD', label: 'Maryland' },
    { value: 'MA', label: 'Massachusetts' },
    { value: 'MI', label: 'Michigan' },
    { value: 'MN', label: 'Minnesota' },
    { value: 'MS', label: 'Mississippi' },
    { value: 'MO', label: 'Missouri' },
    { value: 'MT', label: 'Montana' },
    { value: 'NE', label: 'Nebraska' },
    { value: 'NV', label: 'Nevada' },
    { value: 'NH', label: 'New Hampshire' },
    { value: 'NJ', label: 'New Jersey' },
    { value: 'NM', label: 'New Mexico' },
    { value: 'NY', label: 'New York' },
    { value: 'NC', label: 'North Carolina' },
    { value: 'ND', label: 'North Dakota' },
    { value: 'OH', label: 'Ohio' },
    { value: 'OK', label: 'Oklahoma' },
    { value: 'OR', label: 'Oregon' },
    { value: 'PA', label: 'Pennsylvania' },
    { value: 'PR', label: 'Puerto Rico' },
    { value: 'RI', label: 'Rhode Island' },
    { value: 'SC', label: 'South Carolina' },
    { value: 'SD', label: 'South Dakota' },
    { value: 'TN', label: 'Tennessee' },
    { value: 'TX', label: 'Texas' },
    { value: 'UT', label: 'Utah' },
    { value: 'VT', label: 'Vermont' },
    { value: 'VA', label: 'Virginia' },
    { value: 'WA', label: 'Washington' },
    { value: 'WV', label: 'West Virginia' },
    { value: 'WI', label: 'Wisconsin' },
    { value: 'WY', label: 'Wyoming' },
    { value: 'DC', label: 'District of Columbia' }
];

// Countries data
const COUNTRIES = [
    { value: 'US', label: 'United States' },
    { value: 'CA', label: 'Canada' },
    { value: 'GB', label: 'United Kingdom' },
    { value: 'AU', label: 'Australia' },
    { value: 'DE', label: 'Germany' },
    { value: 'FR', label: 'France' },
    { value: 'IT', label: 'Italy' },
    { value: 'ES', label: 'Spain' },
    { value: 'JP', label: 'Japan' },
    { value: 'CN', label: 'China' },
    { value: 'IN', label: 'India' },
    { value: 'BR', label: 'Brazil' },
    { value: 'MX', label: 'Mexico' },
    { value: 'RU', label: 'Russia' },
    { value: 'KR', label: 'South Korea' },
    { value: 'SG', label: 'Singapore' },
    { value: 'NZ', label: 'New Zealand' },
    { value: 'IE', label: 'Ireland' },
    { value: 'CH', label: 'Switzerland' },
    { value: 'SE', label: 'Sweden' },
    { value: 'NO', label: 'Norway' },
    { value: 'DK', label: 'Denmark' },
    { value: 'FI', label: 'Finland' },
    { value: 'NL', label: 'Netherlands' },
    { value: 'BE', label: 'Belgium' },
    { value: 'AT', label: 'Austria' },
    { value: 'PT', label: 'Portugal' },
    { value: 'GR', label: 'Greece' },
    { value: 'PL', label: 'Poland' },
    { value: 'CZ', label: 'Czech Republic' },
    { value: 'HU', label: 'Hungary' },
    { value: 'SK', label: 'Slovakia' },
    { value: 'RO', label: 'Romania' },
    { value: 'BG', label: 'Bulgaria' },
    { value: 'HR', label: 'Croatia' },
    { value: 'SI', label: 'Slovenia' },
    { value: 'EE', label: 'Estonia' },
    { value: 'LV', label: 'Latvia' },
    { value: 'LT', label: 'Lithuania' },
    { value: 'CY', label: 'Cyprus' },
    { value: 'MT', label: 'Malta' },
    { value: 'LU', label: 'Luxembourg' },
    { value: 'IS', label: 'Iceland' },
    { value: 'LI', label: 'Liechtenstein' },
    { value: 'AD', label: 'Andorra' },
    { value: 'MC', label: 'Monaco' },
    { value: 'SM', label: 'San Marino' },
    { value: 'VA', label: 'Vatican City' }
];

const Profile = () => {
    const { user } = useAuth();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        country: '',
        enroller: '',
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [showPaymentModal, setShowPaymentModal] = useState(false);
    const [paymentData, setPaymentData] = useState({
        cardNumber: '',
        expiryDate: '',
        cvv: '',
        cardholderName: ''
    });

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get('/users/me');
                setFormData(response.data);
            } catch (err) {
                console.error('Error fetching user data:', err);
                setError('Failed to load user data');
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
    }, []);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handlePaymentChange = (e) => {
        setPaymentData({
            ...paymentData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setError('');
            setSuccess('');
            await axios.put('/users/me', formData);
            setSuccess('Profile updated successfully');
        } catch (err) {
            console.error('Error updating profile:', err);
            setError(err.response?.data?.message || 'Failed to update profile');
        }
    };

    const handlePasswordChange = async (e) => {
        e.preventDefault();
        if (formData.newPassword !== formData.confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        try {
            setError('');
            setSuccess('');
            await axios.post('/auth/change-password', {
                currentPassword: formData.currentPassword,
                newPassword: formData.newPassword
            });
            setSuccess('Password changed successfully');
            setFormData({
                ...formData,
                currentPassword: '',
                newPassword: '',
                confirmPassword: ''
            });
        } catch (err) {
            console.error('Error changing password:', err);
            setError(err.response?.data?.message || 'Failed to change password');
        }
    };

    const handlePaymentSubmit = async (e) => {
        e.preventDefault();
        try {
            setError('');
            setSuccess('');
            await axios.post('/users/payment', paymentData);
            setSuccess('Payment information updated successfully');
            setShowPaymentModal(false);
            setPaymentData({
                cardNumber: '',
                expiryDate: '',
                cvv: '',
                cardholderName: ''
            });
        } catch (err) {
            console.error('Error updating payment:', err);
            setError(err.response?.data?.message || 'Failed to update payment information');
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

    return (
        <Layout user={user}>
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="bg-gray-800 shadow rounded-lg p-6">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-bold text-white">Profile Settings</h2>
                        <button
                            onClick={() => setShowPaymentModal(true)}
                            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500"
                        >
                            Payment Info
                        </button>
                    </div>

                    {error && (
                        <div className="bg-red-500 text-white p-4 rounded mb-4">
                            {error}
                        </div>
                    )}

                    {success && (
                        <div className="bg-green-500 text-white p-4 rounded mb-4">
                            {success}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium mb-2">First Name</label>
                                <input
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    className="w-full p-2 rounded bg-gray-800 border border-gray-700"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">Last Name</label>
                                <input
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    className="w-full p-2 rounded bg-gray-800 border border-gray-700"
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-2">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full p-2 rounded bg-gray-800 border border-gray-700"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-2">Phone</label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full p-2 rounded bg-gray-800 border border-gray-700"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-2">Address</label>
                            <input
                                type="text"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                className="w-full p-2 rounded bg-gray-800 border border-gray-700"
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div>
                                <label className="block text-sm font-medium mb-2">City</label>
                                <input
                                    type="text"
                                    name="city"
                                    value={formData.city}
                                    onChange={handleChange}
                                    className="w-full p-2 rounded bg-gray-800 border border-gray-700"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">State</label>
                                <input
                                    type="text"
                                    name="state"
                                    value={formData.state}
                                    onChange={handleChange}
                                    className="w-full p-2 rounded bg-gray-800 border border-gray-700"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">ZIP Code</label>
                                <input
                                    type="text"
                                    name="zip"
                                    value={formData.zip}
                                    onChange={handleChange}
                                    className="w-full p-2 rounded bg-gray-800 border border-gray-700"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-2">Country</label>
                            <input
                                type="text"
                                name="country"
                                value={formData.country}
                                onChange={handleChange}
                                className="w-full p-2 rounded bg-gray-800 border border-gray-700"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-2">Enroller</label>
                            <input
                                type="text"
                                name="enroller"
                                value={formData.enroller}
                                onChange={handleChange}
                                className="w-full p-2 rounded bg-gray-800 border border-gray-700"
                                required
                            />
                        </div>

                        <div className="border-t border-gray-700 pt-6">
                            <h3 className="text-lg font-medium text-white mb-4">Change Password</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">Current Password</label>
                                    <input
                                        type="password"
                                        name="currentPassword"
                                        value={formData.currentPassword}
                                        onChange={handleChange}
                                        className="w-full p-2 rounded bg-gray-700 border border-gray-600 text-white"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">New Password</label>
                                    <input
                                        type="password"
                                        name="newPassword"
                                        value={formData.newPassword}
                                        onChange={handleChange}
                                        className="w-full p-2 rounded bg-gray-700 border border-gray-600 text-white"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">Confirm New Password</label>
                                    <input
                                        type="password"
                                        name="confirmPassword"
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                        className="w-full p-2 rounded bg-gray-700 border border-gray-600 text-white"
                                    />
                                </div>
                                <div className="flex items-end">
                                    <button
                                        type="button"
                                        onClick={handlePasswordChange}
                                        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500"
                                    >
                                        Change Password
                                    </button>
                                </div>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded"
                        >
                            Update Profile
                        </button>
                    </form>
                </div>
            </div>

            {/* Payment Modal */}
            {showPaymentModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                    <div className="bg-gray-800 rounded-lg p-6 max-w-md w-full">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-lg font-medium text-white">Payment Information</h3>
                            <button
                                onClick={() => setShowPaymentModal(false)}
                                className="text-gray-400 hover:text-white"
                            >
                                <span className="sr-only">Close</span>
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <form onSubmit={handlePaymentSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">Card Number</label>
                                <input
                                    type="text"
                                    name="cardNumber"
                                    value={paymentData.cardNumber}
                                    onChange={handlePaymentChange}
                                    className="w-full p-2 rounded bg-gray-700 border border-gray-600 text-white"
                                    placeholder="1234 5678 9012 3456"
                                    required
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">Expiry Date</label>
                                    <input
                                        type="text"
                                        name="expiryDate"
                                        value={paymentData.expiryDate}
                                        onChange={handlePaymentChange}
                                        className="w-full p-2 rounded bg-gray-700 border border-gray-600 text-white"
                                        placeholder="MM/YY"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">CVV</label>
                                    <input
                                        type="text"
                                        name="cvv"
                                        value={paymentData.cvv}
                                        onChange={handlePaymentChange}
                                        className="w-full p-2 rounded bg-gray-700 border border-gray-600 text-white"
                                        placeholder="123"
                                        required
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">Cardholder Name</label>
                                <input
                                    type="text"
                                    name="cardholderName"
                                    value={paymentData.cardholderName}
                                    onChange={handlePaymentChange}
                                    className="w-full p-2 rounded bg-gray-700 border border-gray-600 text-white"
                                    placeholder="John Doe"
                                    required
                                />
                            </div>
                            <div className="flex justify-end space-x-3">
                                <button
                                    type="button"
                                    onClick={() => setShowPaymentModal(false)}
                                    className="px-4 py-2 border border-gray-600 rounded text-white hover:bg-gray-700"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500"
                                >
                                    Save Payment Info
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </Layout>
    );
};

export default Profile; 