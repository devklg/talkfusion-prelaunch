import axios from 'axios';

const instance = axios.create({
    baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000',
    headers: {
        'Content-Type': 'application/json'
    }
});

// Add request interceptor for debugging
instance.interceptors.request.use(
    config => {
        console.log('Request:', config.method.toUpperCase(), config.url);
        return config;
    },
    error => {
        console.error('Request Error:', error);
        return Promise.reject(error);
    }
);

// Add response interceptor for error handling
instance.interceptors.response.use(
    response => {
        console.log('Response:', response.status, response.config.url);
        return response;
    },
    error => {
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.error('API Error Response:', {
                status: error.response.status,
                data: error.response.data,
                headers: error.response.headers
            });
        } else if (error.request) {
            // The request was made but no response was received
            console.error('API Error Request:', error.request);
        } else {
            // Something happened in setting up the request that triggered an Error
            console.error('API Error:', error.message);
        }
        return Promise.reject(error);
    }
);

export default instance; 