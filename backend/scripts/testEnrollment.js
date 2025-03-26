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

const testUsers = [
    {
        firstName: 'Alice',
        lastName: 'Johnson',
        email: 'alice.johnson@test.com',
        phone: '+1234567891',
        country: 'USA',
        language: 'English'
    },
    {
        firstName: 'Bob',
        lastName: 'Smith',
        email: 'bob.smith@test.com',
        phone: '+1234567892',
        country: 'Canada',
        language: 'English'
    },
    {
        firstName: 'Carlos',
        lastName: 'Rodriguez',
        email: 'carlos.rodriguez@test.com',
        phone: '+1234567893',
        country: 'Spain',
        language: 'Spanish'
    },
    {
        firstName: 'Sophie',
        lastName: 'Martin',
        email: 'sophie.martin@test.com',
        phone: '+1234567894',
        country: 'France',
        language: 'French'
    },
    {
        firstName: 'Hans',
        lastName: 'Mueller',
        email: 'hans.mueller@test.com',
        phone: '+1234567895',
        country: 'Germany',
        language: 'German'
    }
];

const testEnrollment = async () => {
    try {
        const port = await getServerPort();
        const API_URL = `http://localhost:${port}/api`;
        const results = [];

        console.log('Starting enrollment tests...\n');

        for (const user of testUsers) {
            console.log(`Testing enrollment for ${user.firstName} ${user.lastName}...`);
            
            try {
                // Step 1: Signup
                const signupResponse = await axios.post(`${API_URL}/auth/signup`, user);
                const tempPassword = signupResponse.data.tempPassword;
                console.log(`✓ Signup successful for ${user.email}`);
                results.push({ user: user.email, signup: 'success', tempPassword });

                // Step 2: Login with temporary password
                const loginResponse = await axios.post(`${API_URL}/auth/login`, {
                    email: user.email,
                    password: tempPassword
                });
                console.log(`✓ Login with temp password successful`);
                results.push({ user: user.email, login: 'success' });

                // Step 3: Change password
                const newPassword = `NewPass${Math.random().toString(36).slice(-8)}`;
                const changePasswordResponse = await axios.post(`${API_URL}/auth/change-password`, {
                    email: user.email,
                    currentPassword: tempPassword,
                    newPassword: newPassword
                });
                console.log(`✓ Password change successful`);
                results.push({ user: user.email, passwordChange: 'success', newPassword });

                // Step 4: Login with new password
                const newLoginResponse = await axios.post(`${API_URL}/auth/login`, {
                    email: user.email,
                    password: newPassword
                });
                console.log(`✓ Login with new password successful`);
                results.push({ user: user.email, finalLogin: 'success' });

                console.log(`\n✓ All tests passed for ${user.firstName} ${user.lastName}\n`);
            } catch (error) {
                console.error(`✗ Test failed for ${user.email}:`, error.response?.data || error.message);
                results.push({ user: user.email, error: error.response?.data || error.message });
            }
        }

        // Print summary
        console.log('\n=== Test Summary ===');
        const successfulTests = results.filter(r => !r.error).length;
        console.log(`Total successful enrollments: ${successfulTests}/${testUsers.length}`);
        
        if (successfulTests < testUsers.length) {
            console.log('\nFailed enrollments:');
            results.filter(r => r.error).forEach(r => {
                console.log(`- ${r.user}: ${r.error}`);
            });
        }

    } catch (error) {
        console.error('Test suite failed:', error.message);
    }
};

testEnrollment(); 