const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const fs = require("fs");
const path = require("path");
const net = require('net');

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173', // Vite's default port
    credentials: true
}));

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: "Something went wrong!" });
});

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.error("MongoDB connection error:", err));

// Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/leaderboard", require("./routes/leaderboardRoutes"));
app.use("/api/earnings", require("./routes/earningsRoutes"));
app.use("/api/users", require("./routes/userRoutes"));

// Function to check if a port is available
const isPortAvailable = (port) => {
    return new Promise((resolve) => {
        const server = net.createServer();
        server.listen(port, () => {
            server.once('close', () => resolve(true));
            server.close();
        });
        server.on('error', () => resolve(false));
    });
};

// Function to find an available port
const findAvailablePort = async (startPort) => {
    let port = startPort;
    while (port < startPort + 100) {
        if (await isPortAvailable(port)) {
            return port;
        }
        port++;
    }
    throw new Error('No available ports found');
};

// Start server with dynamic port
const startServer = async () => {
    try {
        const startPort = parseInt(process.env.PORT) || 5000;
        const port = await findAvailablePort(startPort);
        
        const server = app.listen(port, () => {
            console.log(`Server running on port ${port}`);
            // Write port to file for frontend to read
            fs.writeFileSync(path.join(__dirname, 'server.port'), port.toString());
        });

        // Handle server errors
        server.on('error', (err) => {
            if (err.code === 'EADDRINUSE') {
                console.log(`Port ${port} is busy, trying next port...`);
                server.close();
                startServer();
            } else {
                console.error('Server error:', err);
            }
        });

        // Handle graceful shutdown
        process.on('SIGTERM', () => {
            console.log('SIGTERM received. Shutting down gracefully...');
            server.close(() => {
                console.log('Server closed');
                process.exit(0);
            });
        });
    } catch (error) {
        console.error('Failed to start server:', error);
        process.exit(1);
    }
};

startServer(); 