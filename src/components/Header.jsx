import React, { useState } from 'react';
import { HiBell } from 'react-icons/hi';
import Countdown from './Countdown';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const [showDropdown, setShowDropdown] = useState(false);

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <header className="bg-gray-800 border-b border-gray-700">
            <div className="px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Left side - Countdown */}
                    <div className="flex-1">
                        <Countdown />
                    </div>

                    {/* Right side - User menu */}
                    <div className="flex items-center space-x-4">
                        <button className="relative p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-full transition-colors">
                            <HiBell className="w-5 h-5" />
                            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
                        </button>
                        <div className="relative">
                            <div className="flex items-center space-x-3">
                                <div className="text-right">
                                    <p className="text-sm font-medium text-white">{user?.firstName} {user?.lastName}</p>
                                    <p className="text-xs text-gray-400">{user?.package}</p>
                                </div>
                                <button
                                    onClick={() => setShowDropdown(!showDropdown)}
                                    className="p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-full transition-colors"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                    </svg>
                                </button>
                            </div>

                            {/* Dropdown menu */}
                            {showDropdown && (
                                <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg py-1 z-50">
                                    <button
                                        onClick={() => {
                                            setShowDropdown(false);
                                            navigate('/profile');
                                        }}
                                        className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
                                    >
                                        Profile
                                    </button>
                                    <button
                                        onClick={() => {
                                            setShowDropdown(false);
                                            navigate('/change-password');
                                        }}
                                        className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
                                    >
                                        Change Password
                                    </button>
                                    <button
                                        onClick={handleLogout}
                                        className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
                                    >
                                        Logout
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header; 