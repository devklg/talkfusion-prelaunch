const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const fs = require("fs");
const path = require("path");
const net = require('net');
const authRoutes = require('./routes/auth');
const dashboardRoutes = require('./routes/dashboard');

// Load environment variables first
dotenv.config();

// Validate required environment variables
const requiredEnvVars = ['MONGODB_URI', 'JWT_SECRET'];
const missingEnvVars = requiredEnvVars.filter(envVar => !process.env[envVar]);

if (missingEnvVars.length > 0) {
    console.error('Missing required environment variables:', missingEnvVars.join(', '));
    process.exit(1);
}

// Debug logging
console.log('Environment variables:', {
    NODE_ENV: process.env.NODE_ENV,
    PORT: process.env.PORT,
    MONGODB_URI: process.env.MONGODB_URI,
    JWT_SECRET: process.env.JWT_SECRET ? 'defined' : 'undefined'
});

const app = express();

// Security headers middleware
app.use((req, res, next) => {
    res.setHeader(
        'Content-Security-Policy',
        "default-src 'self'; " +
        "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://accounts.google.com https://apis.google.com https://www.google.com https://www.gstatic.com; " +
        "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; " +
        "img-src 'self' data: https://accounts.google.com https://www.google.com https://www.gstatic.com; " +
        "font-src 'self' https://fonts.gstatic.com; " +
        "frame-src 'self' https://accounts.google.com; " +
        "connect-src 'self' http://localhost:* https://accounts.google.com https://apis.google.com https://www.google.com; " +
        "worker-src 'self' blob:; " +
        "media-src 'self' blob:; " +
        "object-src 'none'; " +
        "base-uri 'self'; " +
        "form-action 'self'; "
    );
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('X-Frame-Options', 'SAMEORIGIN');
    res.setHeader('X-XSS-Protection', '1; mode=block');
    next();
});

// CORS configuration
app.use(cors({
    origin: [
        'http://localhost:5173',
        'http://localhost:5174',
        'http://localhost:5175',
        'http://localhost:5176'
    ],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

// Middleware
app.use(express.json());

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.status(200).json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: "Something went wrong!" });
});

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/leaderboard", require("./routes/leaderboardRoutes"));
app.use("/api/earnings", require("./routes/earningsRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/dashboard", dashboardRoutes);

// Function to check if a port is in use
const isPortInUse = (port) => {
    return new Promise((resolve) => {
        const server = net.createServer();
        server.once('error', () => resolve(true));
        server.once('listening', () => {
            server.close();
            resolve(false);
        });
        server.listen(port);
    });
};

// Function to find an available port
const findAvailablePort = async (startPort, maxPort) => {
    for (let port = startPort; port <= maxPort; port++) {
        try {
            const inUse = await isPortInUse(port);
            if (!inUse) {
                console.log(`Port ${port} is available`);
                return port;
            }
            console.log(`Port ${port} is in use, trying next port...`);
        } catch (error) {
            console.log(`Error checking port ${port}:`, error.message);
            continue;
        }
    }
    throw new Error(`No available ports found between ${startPort} and ${maxPort}`);
};

// Function to connect to MongoDB with retries
const connectToMongoDB = async (retries = 5, delay = 5000) => {
    for (let i = 0; i < retries; i++) {
        try {
            await mongoose.connect(process.env.MONGODB_URI, {
                useNewUrlParser: true,
                useUnifiedTopology: true
            });
            console.log('Connected to MongoDB');
            return true;
        } catch (error) {
            console.error(`MongoDB connection attempt ${i + 1} failed:`, error.message);
            if (i < retries - 1) {
                console.log(`Retrying in ${delay/1000} seconds...`);
                await new Promise(resolve => setTimeout(resolve, delay));
            }
        }
    }
    throw new Error('Failed to connect to MongoDB after multiple attempts');
};

// Start server with dynamic port
const startServer = async () => {
    try {
        // Connect to MongoDB first
        await connectToMongoDB();

        // Find an available port
        const startPort = parseInt(process.env.PORT) || 5007;
        const maxPort = startPort + 10;
        console.log(`Looking for available port between ${startPort} and ${maxPort}...`);
        
        const port = await findAvailablePort(startPort, maxPort);
        
        // Start the server
        const server = app.listen(port, () => {
            console.log(`Server running on port ${port}`);
            console.log('Environment variables:', {
                NODE_ENV: process.env.NODE_ENV,
                PORT: port,
                MONGODB_URI: process.env.MONGODB_URI,
                JWT_SECRET: process.env.JWT_SECRET ? 'defined' : 'undefined'
            });
        });

        // Handle server errors
        server.on('error', (error) => {
            if (error.code === 'EADDRINUSE') {
                console.error(`Port ${port} is already in use. Please free up the port and try again.`);
                process.exit(1);
            } else {
                console.error('Server error:', error);
            }
        });

        // Handle graceful shutdown
        const shutdown = async () => {
            console.log('Shutting down gracefully...');
            server.close(async () => {
                if (mongoose.connection.readyState === 1) {
                    await mongoose.connection.close(false);
                    console.log('MongoDB connection closed');
                }
                process.exit(0);
            });
        };

        // Handle various termination signals
        process.on('SIGTERM', shutdown);
        process.on('SIGINT', shutdown);
        process.on('uncaughtException', (err) => {
            console.error('Uncaught Exception:', err);
            shutdown();
        });
        process.on('unhandledRejection', (reason, promise) => {
            console.error('Unhandled Rejection at:', promise, 'reason:', reason);
            shutdown();
        });

    } catch (error) {
        console.error('Server startup error:', error);
        process.exit(1);
    }
};

// Start the server
startServer(); 