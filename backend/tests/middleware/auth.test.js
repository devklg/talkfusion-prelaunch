const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const { auth } = require('../../src/middleware/auth');
const User = require('../../src/models/User');

describe('Auth Middleware', () => {
    let mockReq;
    let mockRes;
    let nextFunction;

    beforeAll(async () => {
        await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/talkfusion_test');
    });

    afterAll(async () => {
        await mongoose.connection.close();
    });

    beforeEach(() => {
        mockReq = {
            header: jest.fn()
        };
        mockRes = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        };
        nextFunction = jest.fn();
    });

    test('should pass with valid token', async () => {
        const user = await User.create({
            email: 'test@example.com',
            password: 'Test123!',
            firstName: 'Test',
            lastName: 'User',
            enroller: 'Test Enroller',
            package: 'Entry Pack'
        });

        const token = jwt.sign(
            { userId: user._id },
            process.env.JWT_SECRET || 'your-secret-key',
            { expiresIn: '1h' }
        );

        mockReq.header.mockReturnValue(`Bearer ${token}`);

        await auth(mockReq, mockRes, nextFunction);

        expect(nextFunction).toHaveBeenCalled();
        expect(mockReq.user).toBeDefined();
        expect(mockReq.user._id.toString()).toBe(user._id.toString());
    });

    test('should fail without token', async () => {
        mockReq.header.mockReturnValue(null);

        await auth(mockReq, mockRes, nextFunction);

        expect(mockRes.status).toHaveBeenCalledWith(401);
        expect(mockRes.json).toHaveBeenCalledWith({
            message: 'No token, authorization denied'
        });
        expect(nextFunction).not.toHaveBeenCalled();
    });

    test('should fail with invalid token', async () => {
        mockReq.header.mockReturnValue('Bearer invalid-token');

        await auth(mockReq, mockRes, nextFunction);

        expect(mockRes.status).toHaveBeenCalledWith(401);
        expect(mockRes.json).toHaveBeenCalledWith({
            message: 'Token is not valid'
        });
        expect(nextFunction).not.toHaveBeenCalled();
    });

    test('should fail with non-existent user', async () => {
        const token = jwt.sign(
            { userId: new mongoose.Types.ObjectId() },
            process.env.JWT_SECRET || 'your-secret-key',
            { expiresIn: '1h' }
        );

        mockReq.header.mockReturnValue(`Bearer ${token}`);

        await auth(mockReq, mockRes, nextFunction);

        expect(mockRes.status).toHaveBeenCalledWith(401);
        expect(mockRes.json).toHaveBeenCalledWith({
            message: 'User not found'
        });
        expect(nextFunction).not.toHaveBeenCalled();
    });
}); 