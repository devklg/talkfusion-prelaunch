require('dotenv').config();

// Set test environment variables
process.env.NODE_ENV = 'test';
process.env.JWT_SECRET = 'test-secret-key';
process.env.MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/talkfusion_test';
process.env.PORT = '5007';

// Increase timeout for all tests
jest.setTimeout(10000);

// Global beforeAll hook
beforeAll(async () => {
    console.log('Starting tests...');
    // Add any global setup here
});

// Global afterAll hook
afterAll(async () => {
    console.log('Tests completed.');
    // Add any global cleanup here
});

// Global beforeEach hook
beforeEach(() => {
    // Reset any mocks or state between tests
    jest.clearAllMocks();
}); 