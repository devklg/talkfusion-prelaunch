require('dotenv').config();

module.exports = {
    apiUrl: `http://localhost:${process.env.PORT || 5007}`,
    testUser: {
        email: 'test@example.com',
        password: 'Test123!',
        firstName: 'Test',
        lastName: 'User',
        enroller: 'Test Enroller',
        package: 'Entry Pack'
    }
}; 