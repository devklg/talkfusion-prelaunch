const axios = require('axios');
const config = require('./config');

describe('Authentication Endpoints', () => {
    let authToken = null;

    test('should sign up a new user', async () => {
        const response = await axios.post(`${config.apiUrl}/api/auth/signup`, config.testUser);
        expect(response.status).toBe(201);
        expect(response.data).toHaveProperty('token');
        expect(response.data).toHaveProperty('user');
        expect(response.data).toHaveProperty('tempPassword');
        authToken = response.data.token;
    });

    test('should login with temporary password', async () => {
        const response = await axios.post(`${config.apiUrl}/api/auth/login`, {
            email: config.testUser.email,
            password: config.testUser.password
        });
        expect(response.status).toBe(200);
        expect(response.data).toHaveProperty('requiresPasswordChange', true);
        expect(response.data).toHaveProperty('token');
    });

    test('should change password', async () => {
        const response = await axios.post(
            `${config.apiUrl}/api/auth/change-password`,
            {
                currentPassword: config.testUser.password,
                newPassword: 'NewTest123!'
            },
            {
                headers: {
                    Authorization: `Bearer ${authToken}`
                }
            }
        );
        expect(response.status).toBe(200);
        expect(response.data).toHaveProperty('message', 'Password updated successfully');
    });

    test('should login with new password', async () => {
        const response = await axios.post(`${config.apiUrl}/api/auth/login`, {
            email: config.testUser.email,
            password: 'NewTest123!'
        });
        expect(response.status).toBe(200);
        expect(response.data).toHaveProperty('token');
        expect(response.data).toHaveProperty('user');
    });
}); 