import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
    const { isAuthenticated, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <nav className="bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Link to="/" className="text-white text-xl font-bold">
                            TalkFusion
                        </Link>
                    </div>
                    <div className="flex items-center space-x-4">
                        <Link
                            to="/"
                            className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                        >
                            Home
                        </Link>
                        <Link
                            to="/leaderboard"
                            className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                        >
                            Leaderboard
                        </Link>
                        {isAuthenticated ? (
                            <>
                                <Link
                                    to="/dashboard"
                                    className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    Dashboard
                                </Link>
                                <button
                                    onClick={handleLogout}
                                    className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-medium"
                                >
                                    Logout
                                </button>
                            </>
                        ) : (
                            <>
                                <Link
                                    to="/login"
                                    className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    Login
                                </Link>
                                <Link
                                    to="/signup"
                                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium"
                                >
                                    Sign Up
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar; 