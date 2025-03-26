const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
require('dotenv').config();

const testUsers = [
    {
        firstName: "John",
        lastName: "Doe",
        email: "john.doe@test.com",
        phone: "+1234567890",
        country: "USA",
        language: "English"
    },
    {
        firstName: "Jane",
        lastName: "Smith",
        email: "jane.smith@test.com",
        phone: "+1987654321",
        country: "Canada",
        language: "English"
    },
    {
        firstName: "Carlos",
        lastName: "Rodriguez",
        email: "carlos.rodriguez@test.com",
        phone: "+3456789012",
        country: "Spain",
        language: "Spanish"
    },
    {
        firstName: "Sophie",
        lastName: "Martin",
        email: "sophie.martin@test.com",
        phone: "+4567890123",
        country: "France",
        language: "French"
    },
    {
        firstName: "Hans",
        lastName: "Mueller",
        email: "hans.mueller@test.com",
        phone: "+5678901234",
        country: "Germany",
        language: "German"
    },
    {
        firstName: "Yuki",
        lastName: "Tanaka",
        email: "yuki.tanaka@test.com",
        phone: "+6789012345",
        country: "Japan",
        language: "Japanese"
    }
];

const createTestUsers = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected to MongoDB');

        for (const userData of testUsers) {
            // Check if user already exists
            const existingUser = await User.findOne({ email: userData.email });
            if (existingUser) {
                console.log(`User ${userData.email} already exists, skipping...`);
                continue;
            }

            const tempPassword = Math.random().toString(36).slice(-8);
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(tempPassword, salt);

            const user = new User({
                ...userData,
                password: hashedPassword,
                isTempPassword: true
            });

            await user.save();
            console.log(`Created user: ${userData.email} with temp password: ${tempPassword}`);
        }

        console.log('Test users creation completed');
        process.exit(0);
    } catch (error) {
        console.error('Error creating test users:', error);
        process.exit(1);
    }
};

createTestUsers(); 