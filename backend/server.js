const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const authRoutes = require("./routes/authRoutes");
const signupRoutes = require("./routes/signupRoutes");
const leaderboardRoutes = require("./routes/leaderboardRoutes");
const earningsRoutes = require("./routes/earningsRoutes");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch((err) => console.error("MongoDB error:", err));

app.use("/api/auth", authRoutes);
app.use("/api/signups", signupRoutes);
app.use("/api/leaderboard", leaderboardRoutes);
app.use("/api/earnings", earningsRoutes);

const startServer = async (port) => {
  try {
    await new Promise((resolve, reject) => {
      const server = app.listen(port)
        .on('listening', () => {
          console.log(`Server running on port ${port}`);
          resolve();
        })
        .on('error', (err) => {
          if (err.code === 'EADDRINUSE') {
            console.log(`Port ${port} is busy, trying ${port + 1}`);
            server.close();
            startServer(port + 1);
          } else {
            reject(err);
          }
        });
    });
  } catch (err) {
    console.error('Failed to start server:', err);
    process.exit(1);
  }
};

const PORT = process.env.PORT || 5000;
startServer(PORT); 