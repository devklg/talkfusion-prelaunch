const mongoose = require('mongoose');
const User = require('./models/User');
require('dotenv').config();

const testUsers = [
    { name: "John Smith", referrals: 25, email: "john@example.com", password: "hashedPassword123" },
    { name: "Sarah Johnson", referrals: 20, email: "sarah@example.com", password: "hashedPassword123" },
    { name: "Michael Brown", referrals: 18, email: "michael@example.com", password: "hashedPassword123" },
    { name: "Emily Davis", referrals: 15, email: "emily@example.com", password: "hashedPassword123" },
    { name: "David Wilson", referrals: 12, email: "david@example.com", password: "hashedPassword123" },
    { name: "Lisa Anderson", referrals: 10, email: "lisa@example.com", password: "hashedPassword123" },
    { name: "Robert Taylor", referrals: 8, email: "robert@example.com", password: "hashedPassword123" },
    { name: "Jennifer White", referrals: 6, email: "jennifer@example.com", password: "hashedPassword123" },
    { name: "William Clark", referrals: 5, email: "william@example.com", password: "hashedPassword123" },
    { name: "Jessica Lee", referrals: 3, email: "jessica@example.com", password: "hashedPassword123" }
];

const seedDatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to MongoDB');

        // Clear existing data
        await User.deleteMany({});
        console.log('Cleared existing data');

        // Insert test data
        await User.insertMany(testUsers);
        console.log('Added test data successfully');

        console.log('Database seeding completed');
        process.exit(0);
    } catch (error) {
        console.error('Error seeding database:', error);
        process.exit(1);
    }
};

seedDatabase(); 