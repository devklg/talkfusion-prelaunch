import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Layout = () => {
    const { user, loading: authLoading } = useAuth();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Add a small delay to prevent flash of loading state
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 500);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        // Only redirect if we're not loading and there's definitely no user
        if (!isLoading && !authLoading && !user) {
            navigate('/login');
        }
    }, [user, navigate, isLoading, authLoading]);

    // Show loading spinner while either loading state is true
    if (isLoading || authLoading) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gray-900">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
        );
    }

    // Don't render anything if there's no user and we're not loading
    if (!user) {
        return null;
    }

    return (
        <div className="flex h-screen bg-gray-900">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Top Navbar */}
                <Header />

                {/* Main Content */}
                <main className="flex-1 overflow-y-auto bg-gray-900">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default Layout; 