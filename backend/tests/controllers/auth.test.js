const mongoose = require('mongoose');
const axios = require('axios');
const config = require('../config');
const User = require('../../src/models/User');

describe('Auth Controller', () => {
    beforeAll(async () => {
        await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/talkfusion_test');
    });

    afterAll(async () => {
        await mongoose.connection.close();
    });

    beforeEach(async () => {
        await User.deleteMany({});
    });

    describe('POST /api/auth/signup', () => {
        test('should create a new user and return token', async () => {
            const response = await axios.post(`${config.apiUrl}/api/auth/signup`, config.testUser);
            
            expect(response.status).toBe(201);
            expect(response.data).toHaveProperty('token');
            expect(response.data).toHaveProperty('user');
            expect(response.data).toHaveProperty('tempPassword');
            expect(response.data.user.email).toBe(config.testUser.email);
            expect(response.data.user.firstName).toBe(config.testUser.firstName);
            expect(response.data.user.lastName).toBe(config.testUser.lastName);
            expect(response.data.user.enroller).toBe(config.testUser.enroller);
            expect(response.data.user.package).toBe(config.testUser.package);
        });

        test('should not create user with existing email', async () => {
            await User.create(config.testUser);
            
            await expect(
                axios.post(`${config.apiUrl}/api/auth/signup`, config.testUser)
            ).rejects.toThrow();
        });

        test('should not create user with missing required fields', async () => {
            const invalidUser = {
                email: 'test@example.com'
            };
            
            await expect(
                axios.post(`${config.apiUrl}/api/auth/signup`, invalidUser)
            ).rejects.toThrow();
        });
    });

    describe('POST /api/auth/login', () => {
        beforeEach(async () => {
            await axios.post(`${config.apiUrl}/api/auth/signup`, config.testUser);
        });

        test('should login with temporary password', async () => {
            const response = await axios.post(`${config.apiUrl}/api/auth/login`, {
                email: config.testUser.email,
                password: config.testUser.password
            });

            expect(response.status).toBe(200);
            expect(response.data).toHaveProperty('token');
            expect(response.data).toHaveProperty('requiresPasswordChange', true);
        });

        test('should not login with incorrect password', async () => {
            await expect(
                axios.post(`${config.apiUrl}/api/auth/login`, {
                    email: config.testUser.email,
                    password: 'wrongpassword'
                })
            ).rejects.toThrow();
        });

        test('should not login with non-existent email', async () => {
            await expect(
                axios.post(`${config.apiUrl}/api/auth/login`, {
                    email: 'nonexistent@example.com',
                    password: 'Test123!'
                })
            ).rejects.toThrow();
        });
    });

    describe('POST /api/auth/change-password', () => {
        let authToken;

        beforeEach(async () => {
            const signupResponse = await axios.post(`${config.apiUrl}/api/auth/signup`, config.testUser);
            authToken = signupResponse.data.token;
        });

        test('should change password successfully', async () => {
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

            // Verify can login with new password
            const loginResponse = await axios.post(`${config.apiUrl}/api/auth/login`, {
                email: config.testUser.email,
                password: 'NewTest123!'
            });

            expect(loginResponse.status).toBe(200);
            expect(loginResponse.data).toHaveProperty('requiresPasswordChange', false);
        });

        test('should not change password with incorrect current password', async () => {
            await expect(
                axios.post(
                    `${config.apiUrl}/api/auth/change-password`,
                    {
                        currentPassword: 'wrongpassword',
                        newPassword: 'NewTest123!'
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${authToken}`
                        }
                    }
                )
            ).rejects.toThrow();
        });

        test('should not change password without authentication', async () => {
            await expect(
                axios.post(`${config.apiUrl}/api/auth/change-password`, {
                    currentPassword: config.testUser.password,
                    newPassword: 'NewTest123!'
                })
            ).rejects.toThrow();
        });
    });
}); 