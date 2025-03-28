const axios = require('axios');
const fs = require('fs').promises;
const path = require('path');

// Function to get the current server port
const getServerPort = async () => {
    try {
        const portFile = path.join(__dirname, '..', 'server.port');
        const port = await fs.readFile(portFile, 'utf8');
        return port.trim();
    } catch (error) {
        console.warn('Could not read server port, using default port 5000');
        return '5000';
    }
};

const testAuth = async () => {
    try {
        const port = await getServerPort();
        const API_URL = `http://localhost:${port}/api`;

        // Test signup
        console.log('Testing signup...');
        const signupResponse = await axios.post(`${API_URL}/auth/signup`, {
            firstName: 'Test',
            lastName: 'User',
            email: 'test.user@example.com',
            phone: '+1234567890',
            country: 'USA',
            language: 'English'
        });
        console.log('Signup successful:', signupResponse.data);
        const tempPassword = signupResponse.data.tempPassword;

        // Test login with temporary password
        console.log('\nTesting login with temporary password...');
        const loginResponse = await axios.post(`${API_URL}/auth/login`, {
            email: 'test.user@example.com',
            password: tempPassword
        });
        console.log('Login with temp password successful:', loginResponse.data);

        // Test change password
        console.log('\nTesting password change...');
        const changePasswordResponse = await axios.post(`${API_URL}/auth/change-password`, {
            email: 'test.user@example.com',
            currentPassword: tempPassword,
            newPassword: 'newPassword123'
        });
        console.log('Password change successful:', changePasswordResponse.data);

        // Test login with new password
        console.log('\nTesting login with new password...');
        const newLoginResponse = await axios.post(`${API_URL}/auth/login`, {
            email: 'test.user@example.com',
            password: 'newPassword123'
        });
        console.log('Login with new password successful:', newLoginResponse.data);

        console.log('\nAll tests completed successfully!');
    } catch (error) {
        console.error('Test failed:', error.response?.data || error.message);
    }
};

testAuth(); 