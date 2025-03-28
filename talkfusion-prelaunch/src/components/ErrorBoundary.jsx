import React from 'react';
import monitoringService from '../services/monitoring';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        // Log error to monitoring service
        monitoringService.logError(error, {
            componentStack: errorInfo.componentStack,
            location: window.location.href
        });
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen flex items-center justify-center bg-gray-900">
                    <div className="max-w-md w-full space-y-8 p-8 bg-gray-800 rounded-lg shadow-lg">
                        <div>
                            <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
                                Something went wrong
                            </h2>
                            <p className="mt-2 text-center text-sm text-gray-300">
                                We apologize for the inconvenience. Please try refreshing the page.
                            </p>
                        </div>
                        <div className="mt-8 space-y-6">
                            <button
                                onClick={() => window.location.reload()}
                                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            >
                                Refresh Page
                            </button>
                            <button
                                onClick={() => window.location.href = '/'}
                                className="group relative w-full flex justify-center py-2 px-4 border border-gray-700 text-sm font-medium rounded-md text-white bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                            >
                                Return to Home
                            </button>
                        </div>
                        {process.env.NODE_ENV === 'development' && (
                            <div className="mt-8 p-4 bg-gray-700 rounded-md">
                                <pre className="text-sm text-gray-300 overflow-auto">
                                    {this.state.error?.toString()}
                                </pre>
                            </div>
                        )}
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary; 