const mongoose = require('mongoose');
const User = require('../../src/models/User');

describe('User Model', () => {
    beforeAll(async () => {
        await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/talkfusion_test');
    });

    afterAll(async () => {
        await mongoose.connection.close();
    });

    beforeEach(async () => {
        await User.deleteMany({});
    });

    test('should create a new user with required fields', async () => {
        const userData = {
            email: 'test@example.com',
            password: 'Test123!',
            firstName: 'Test',
            lastName: 'User',
            enroller: 'Test Enroller',
            package: 'Entry Pack'
        };

        const user = new User(userData);
        await user.save();

        expect(user._id).toBeDefined();
        expect(user.email).toBe(userData.email);
        expect(user.firstName).toBe(userData.firstName);
        expect(user.lastName).toBe(userData.lastName);
        expect(user.enroller).toBe(userData.enroller);
        expect(user.package).toBe(userData.package);
        expect(user.password).not.toBe(userData.password); // Password should be hashed
        expect(user.isTemporaryPassword).toBe(true);
        expect(user.createdAt).toBeDefined();
        expect(user.updatedAt).toBeDefined();
    });

    test('should not create user without required fields', async () => {
        const userData = {
            email: 'test@example.com'
        };

        const user = new User(userData);
        await expect(user.save()).rejects.toThrow();
    });

    test('should not create user with invalid email format', async () => {
        const userData = {
            email: 'invalid-email',
            password: 'Test123!',
            firstName: 'Test',
            lastName: 'User',
            enroller: 'Test Enroller',
            package: 'Entry Pack'
        };

        const user = new User(userData);
        await expect(user.save()).rejects.toThrow();
    });

    test('should not create user with duplicate email', async () => {
        const userData = {
            email: 'test@example.com',
            password: 'Test123!',
            firstName: 'Test',
            lastName: 'User',
            enroller: 'Test Enroller',
            package: 'Entry Pack'
        };

        await User.create(userData);
        const duplicateUser = new User(userData);
        await expect(duplicateUser.save()).rejects.toThrow();
    });
}); 