import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Login from './components/Login';
import Signup from './components/Signup';
import ChangePassword from './components/ChangePassword';
import Dashboard from './components/Dashboard';
import Leaderboard from './components/Leaderboard';
import Profile from './components/Profile';
import { AuthProvider, useAuth } from './context/AuthContext';
import ErrorBoundary from './components/ErrorBoundary';
import monitoringService from './services/monitoring';

const PrivateRoute = ({ children }) => {
    const { isAuthenticated } = useAuth();
    return isAuthenticated ? children : <Navigate to="/login" />;
};

const App = () => {
    // Log application startup
    React.useEffect(() => {
        // --- CORRECTED LINES ---
        console.log('Application started:', {
            timestamp: new Date().toISOString(),
            environment: import.meta.env.MODE, // Use Vite's MODE
            version: import.meta.env.VITE_APP_VERSION // Use import.meta.env
        });
        // --- END CORRECTION ---
    }, []);
    return (
        <ErrorBoundary>
            <AuthProvider>
                <Router>
                    <div className="min-h-screen bg-gray-900">
                        <Navbar />
                        <Routes>
                            <Route path="/" element={<LandingPage />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/signup" element={<Signup />} />
                            <Route path="/change-password" element={<ChangePassword />} />
                            <Route
                                path="/dashboard"
                                element={
                                    <PrivateRoute>
                                        <Dashboard />
                                    </PrivateRoute>
                                }
                            />
                            <Route
                                path="/profile"
                                element={
                                    <PrivateRoute>
                                        <Profile />
                                    </PrivateRoute>
                                }
                            />
                            <Route path="/leaderboard" element={<Leaderboard />} />
                        </Routes>
                    </div>
                </Router>
            </AuthProvider>
        </ErrorBoundary>
    );
};

export default App; 