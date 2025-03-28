import axios from 'axios';

const instance = axios.create({
    baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5001/api',
    headers: {
        'Content-Type': 'application/json'
    },
    timeout: 10000 // 10 second timeout
});

// Add request interceptor for debugging and token handling
instance.interceptors.request.use(
    config => {
        // Get token from localStorage
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        
        console.log('Request:', config.method.toUpperCase(), config.url);
        return config;
    },
    error => {
        console.error('Request Error:', error);
        return Promise.reject(error);
    }
);

// Add response interceptor for error handling and token management
instance.interceptors.response.use(
    response => {
        console.log('Response:', response.status, response.config.url);
        return response;
    },
    error => {
        if (error.response) {
            // Handle 401 Unauthorized
            if (error.response.status === 401) {
                localStorage.removeItem('token');
                delete instance.defaults.headers.common['Authorization'];
                window.location.href = '/login';
            }

            // Log detailed error information
            console.error('API Error Response:', {
                status: error.response.status,
                data: error.response.data,
                headers: error.response.headers
            });
        } else if (error.request) {
            console.error('API Error Request:', error.request);
        } else {
            console.error('API Error:', error.message);
        }
        return Promise.reject(error);
    }
);

export default instance; 