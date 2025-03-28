// Set environment to test
process.env.NODE_ENV = 'test';

import { getAxiosInstance } from '../api/axios.js';

// Helper function to delay execution
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

// Mock localStorage for Node.js environment
const localStorage = {
    getItem: (key) => {
        return global.localStorage?.[key];
    },
    setItem: (key, value) => {
        if (!global.localStorage) {
            global.localStorage = {};
        }
        global.localStorage[key] = value;
    },
    removeItem: (key) => {
        if (global.localStorage) {
            delete global.localStorage[key];
        }
    }
};

const testUsers = [
    { firstName: 'John', lastName: 'Smith', email: 'john.smith.001@test.com', country: 'USA' },
    { firstName: 'Maria', lastName: 'Garcia', email: 'maria.garcia.002@test.com', country: 'Spain' },
    { firstName: 'David', lastName: 'Kim', email: 'david.kim.003@test.com', country: 'South Korea' },
    { firstName: 'Sarah', lastName: 'Wilson', email: 'sarah.wilson.004@test.com', country: 'UK' },
    { firstName: 'Luca', lastName: 'Rossi', email: 'luca.rossi.005@test.com', country: 'Italy' },
    { firstName: 'Emma', lastName: 'Anderson', email: 'emma.anderson.006@test.com', country: 'Canada' },
    { firstName: 'Carlos', lastName: 'Rodriguez', email: 'carlos.rodriguez.007@test.com', country: 'Mexico' },
    { firstName: 'Sophie', lastName: 'Martin', email: 'sophie.martin.008@test.com', country: 'France' },
    { firstName: 'Hiroshi', lastName: 'Tanaka', email: 'hiroshi.tanaka.009@test.com', country: 'Japan' },
    { firstName: 'Anna', lastName: 'Kowalski', email: 'anna.kowalski.010@test.com', country: 'Poland' },
    { firstName: 'Mohammed', lastName: 'Ali', email: 'mohammed.ali.011@test.com', country: 'Egypt' },
    { firstName: 'Isabella', lastName: 'Silva', email: 'isabella.silva.012@test.com', country: 'Brazil' },
    { firstName: 'Alexander', lastName: 'Ivanov', email: 'alexander.ivanov.013@test.com', country: 'Russia' },
    { firstName: 'Yuki', lastName: 'Sato', email: 'yuki.sato.014@test.com', country: 'Japan' },
    { firstName: 'Sophia', lastName: 'Papadopoulos', email: 'sophia.papadopoulos.015@test.com', country: 'Greece' },
    { firstName: 'Lars', lastName: 'Nielsen', email: 'lars.nielsen.016@test.com', country: 'Denmark' },
    { firstName: 'Aisha', lastName: 'Khan', email: 'aisha.khan.017@test.com', country: 'Pakistan' },
    { firstName: 'Miguel', lastName: 'Fernandez', email: 'miguel.fernandez.018@test.com', country: 'Argentina' },
    { firstName: 'Elena', lastName: 'Popov', email: 'elena.popov.019@test.com', country: 'Romania' },
    { firstName: 'Raj', lastName: 'Patel', email: 'raj.patel.020@test.com', country: 'India' },
    { firstName: 'Nina', lastName: 'Jensen', email: 'nina.jensen.021@test.com', country: 'Norway' },
    { firstName: 'Chen', lastName: 'Wei', email: 'chen.wei.022@test.com', country: 'China' },
    { firstName: 'Sofia', lastName: 'Lopez', email: 'sofia.lopez.023@test.com', country: 'Colombia' },
    { firstName: 'Marcus', lastName: 'Schmidt', email: 'marcus.schmidt.024@test.com', country: 'Germany' },
    { firstName: 'Zara', lastName: 'Ahmed', email: 'zara.ahmed.025@test.com', country: 'UAE' }
];

const testEnrollment = async () => {
    console.log('Starting user enrollment test...');
    const results = [];

    for (const user of testUsers) {
        try {
            console.log(`\nTesting enrollment for ${user.firstName} ${user.lastName}...`);
            
            // Step 1: Signup
            const axiosInstance = await getAxiosInstance();
            console.log(`Attempting signup for ${user.email}...`);
            
            const signupResponse = await axiosInstance.post('/auth/signup', user);
            console.log('✓ Signup successful');
            
            // Add delay between requests
            await delay(1000);
            
            // Store temporary credentials
            const tempPassword = signupResponse.data.temporaryPassword;
            localStorage.setItem('tempEmail', user.email);
            localStorage.setItem('tempPassword', tempPassword);
            
            // Step 2: Login with temporary password
            console.log(`Attempting login with temporary password for ${user.email}...`);
            const loginResponse = await axiosInstance.post('/auth/login', {
                email: user.email,
                password: tempPassword
            });
            console.log('✓ Login with temporary password successful');
            
            // Add delay between requests
            await delay(1000);
            
            // Step 3: Change password
            console.log(`Attempting password change for ${user.email}...`);
            const newPassword = `NewPass${user.firstName}123!`;
            await axiosInstance.post('/auth/change-password', {
                email: user.email,
                currentPassword: tempPassword,
                newPassword: newPassword
            });
            console.log('✓ Password change successful');
            
            // Add delay between requests
            await delay(1000);
            
            // Step 4: Verify login with new password
            console.log(`Verifying login with new password for ${user.email}...`);
            await axiosInstance.post('/auth/login', {
                email: user.email,
                password: newPassword
            });
            console.log('✓ Login with new password successful');
            
            // Step 5: Test profile access
            console.log(`Testing profile access for ${user.email}...`);
            const profileResponse = await axiosInstance.get('/users/me');
            console.log('✓ Profile access successful');
            console.log('Profile data:', profileResponse.data);
            
            results.push({
                user: `${user.firstName} ${user.lastName}`,
                status: 'success',
                email: user.email
            });
            
        } catch (error) {
            console.error(`✗ Error for ${user.firstName} ${user.lastName}:`, error.response?.data?.message || error.message);
            console.error('Full error:', error);
            
            results.push({
                user: `${user.firstName} ${user.lastName}`,
                status: 'failed',
                error: error.response?.data?.message || error.message,
                email: user.email,
                fullError: error.toString()
            });
            
            // Add longer delay after error
            await delay(2000);
        }
    }
    
    // Print summary
    console.log('\n=== Test Summary ===');
    const successful = results.filter(r => r.status === 'success').length;
    const failed = results.filter(r => r.status === 'failed').length;
    console.log(`Total Users: ${results.length}`);
    console.log(`Successful: ${successful}`);
    console.log(`Failed: ${failed}`);
    
    if (failed > 0) {
        console.log('\nFailed Enrollments:');
        results.filter(r => r.status === 'failed').forEach(r => {
            console.log(`- ${r.user} (${r.email}):`);
            console.log(`  Error: ${r.error}`);
            console.log(`  Details: ${r.fullError}`);
        });
    }
    
    // Print successful enrollments
    console.log('\nSuccessful Enrollments:');
    results.filter(r => r.status === 'success').forEach(r => {
        console.log(`- ${r.user} (${r.email})`);
    });
};

// Run the test
testEnrollment(); 