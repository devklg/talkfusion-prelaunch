# Talk Fusion Prelaunch

A full-stack application for Talk Fusion's prelaunch campaign.

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (running locally or a MongoDB Atlas connection string)
- npm or yarn

## Setup

1. Clone the repository
2. Install frontend dependencies:
```bash
npm install
```

3. Install backend dependencies:
```bash
cd backend
npm install
cd ..
```

4. Create a `.env` file in the backend directory with the following variables:
```
MONGO_URI=mongodb://localhost:27017/talkfusion
JWT_SECRET=your-super-secret-jwt-key-change-in-production
PORT=5000
```

## Running the Application

1. Start both frontend and backend servers:
```bash
npm run dev:all
```

This will start:
- Frontend on http://localhost:5173
- Backend on http://localhost:5000

## Features

- User registration and authentication
- Leaderboard system
- Earnings tracking
- Real-time signup feed
- Powerline visualization
- Responsive design with Tailwind CSS

## API Endpoints

- POST /api/auth/signup - Register a new user
- POST /api/auth/login - Login user
- GET /api/leaderboard - Get top referrers
- GET /api/signups - Get recent signups
- GET /api/earnings/:id - Get user earnings

## Production Deployment

1. Build the frontend:
```bash
npm run build
```

2. Start the backend in production mode:
```bash
cd backend
npm start
```

Make sure to:
- Set up proper environment variables
- Use a production MongoDB instance
- Configure CORS settings
- Set up proper security measures
- Use HTTPS in production 