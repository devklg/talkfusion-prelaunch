import axios from 'axios';
import fs from 'fs';
import path from 'path';

let axiosInstance = null;

const isNode = typeof window === 'undefined';

const getServerPort = async () => {
    try {
        // First try to get port from server.port file
        if (isNode) {
            try {
                const port = fs.readFileSync(path.join(process.cwd(), 'backend', 'server.port'), 'utf8').trim();
                console.log('Server port from file:', port);
                return port;
            } catch (error) {
                console.log('Could not read server.port file');
            }
        } else {
            try {
                const response = await fetch('/server.port');
                const port = await response.text();
                console.log('Server port from file:', port);
                return port;
            } catch (error) {
                console.log('Could not fetch server port from file');
            }
        }

        // If that fails, try to get port from window.location (browser only)
        if (!isNode && window.location.port) {
            console.log('Server port from window.location:', window.location.port);
            return window.location.port;
        }

        // If all else fails, try common ports
        const commonPorts = ['5002', '5001', '5000', '3000'];
        for (const port of commonPorts) {
            try {
                console.log(`Trying port ${port}...`);
                const response = await axios.get(`http://localhost:${port}/health`, {
                    timeout: 2000 // 2 second timeout
                });
                if (response.status === 200) {
                    console.log('Found server on port:', port);
                    return port;
                }
            } catch (e) {
                console.log(`Port ${port} not available:`, e.message);
                continue;
            }
        }

        // If we're in a test environment, default to 5002
        if (isNode && process.env.NODE_ENV === 'test') {
            console.log('Test environment detected, using default port 5002');
            return '5002';
        }

        throw new Error('Could not determine server port. Please ensure the backend server is running.');
    } catch (error) {
        console.error('Error getting server port:', error);
        throw error;
    }
};

const getAxiosInstance = async () => {
    if (axiosInstance) {
        return axiosInstance;
    }

    try {
        const port = await getServerPort();
        const baseURL = `http://localhost:${port}/api`;
        console.log('Creating axios instance with baseURL:', baseURL);

        axiosInstance = axios.create({
            baseURL,
            timeout: 15000,
            headers: {
                'Content-Type': 'application/json'
            }
        });

        // Request interceptor
        axiosInstance.interceptors.request.use(
            (config) => {
                const token = isNode ? 
                    global.localStorage?.getItem('token') : 
                    localStorage.getItem('token');
                if (token) {
                    config.headers.Authorization = `Bearer ${token}`;
                }
                return config;
            },
            (error) => {
                console.error('Request error:', error);
                return Promise.reject(error);
            }
        );

        // Response interceptor
        axiosInstance.interceptors.response.use(
            (response) => response,
            async (error) => {
                console.error('Response error:', {
                    url: error.config?.url,
                    method: error.config?.method,
                    status: error.response?.status,
                    message: error.message,
                    timestamp: new Date().toISOString()
                });

                // Handle token expiration
                if (error.response?.status === 401) {
                    if (isNode) {
                        global.localStorage?.removeItem('token');
                        global.localStorage?.removeItem('user');
                    } else {
                        localStorage.removeItem('token');
                        localStorage.removeItem('user');
                        window.location.href = '/login';
                    }
                }

                return Promise.reject(error);
            }
        );

        return axiosInstance;
    } catch (error) {
        console.error('Failed to create axios instance:', error);
        throw error;
    }
};

// Health check function
const checkHealth = async () => {
    try {
        const instance = await getAxiosInstance();
        const response = await instance.get('/health');
        return response.status === 200;
    } catch (error) {
        console.error('Health check failed:', error);
        return false;
    }
};

export { getAxiosInstance, checkHealth }; 