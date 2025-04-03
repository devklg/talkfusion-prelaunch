import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { initializeSecurity } from './utils/security';
import { AuthProvider } from './context/AuthContext';
import LandingPage from './components/LandingPage';
import Signup from './components/Signup';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import ChangePassword from './components/ChangePassword';
import Products from './components/Products';
import Team from './components/Team';
import Analytics from './components/Analytics';
import Earnings from './components/Earnings';
import CompensationPlan from './components/CompensationPlan';
import Opportunity from './components/Opportunity';
import ErrorBoundary from './components/ErrorBoundary';
import Layout from './components/Layout';

const App = () => {
    useEffect(() => {
        // Initialize security settings
        initializeSecurity();

        // Log application start
        console.log('Application started:', {
            timestamp: new Date().toISOString(),
            environment: import.meta.env.MODE,
            version: import.meta.env.VITE_APP_VERSION
        });
    }, []);

    return (
        <ErrorBoundary>
            <AuthProvider>
                <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
                    <Routes>
                        <Route path="/" element={<LandingPage />} />
                        <Route path="/signup" element={<Signup />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/compensation-plan" element={<CompensationPlan />} />
                        <Route path="/opportunity" element={<Opportunity />} />

                        {/* Protected Routes */}
                        <Route element={<Layout />}>
                            <Route path="/dashboard" element={<Dashboard />} />
                            <Route path="/profile" element={<Profile />} />
                            <Route path="/change-password" element={<ChangePassword />} />
                            <Route path="/products" element={<Products />} />
                            <Route path="/team" element={<Team />} />
                            <Route path="/analytics" element={<Analytics />} />
                            <Route path="/earnings" element={<Earnings />} />
                        </Route>
                    </Routes>
                </Router>
            </AuthProvider>
        </ErrorBoundary>
    );
};

export default App; 