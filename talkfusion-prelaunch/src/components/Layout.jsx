import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

const Layout = ({ children, user }) => {
    return (
        <div className="flex h-screen bg-gray-900">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Top Navbar */}
                <Header user={user} />

                {/* Main Content */}
                <main className="flex-1 overflow-y-auto bg-gray-900">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default Layout; 