# Talk Fusion Prelaunch Setup Guide

## Prerequisites

- Node.js (v18 or higher)
- MongoDB (v6 or higher)
- Git

## Project Structure

```
talkfusion-prelaunch/
├── frontend/                 # React frontend application
│   ├── src/
│   │   ├── components/      # React components
│   │   ├── context/        # React context providers
│   │   ├── utils/          # Utility functions
│   │   └── App.jsx         # Main application component
│   ├── public/             # Static assets
│   └── package.json        # Frontend dependencies
└── backend/                # Node.js backend application
    ├── controllers/        # Route controllers
    ├── models/            # Database models
    ├── routes/            # API routes
    ├── middleware/        # Custom middleware
    └── server.js          # Main server file
```

## Environment Setup

1. Clone the repository:
```bash
git clone https://github.com/yourusername/talkfusion-prelaunch.git
cd talkfusion-prelaunch
```

2. Install dependencies:
```bash
# Install frontend dependencies
npm install

# Install backend dependencies
cd backend
npm install
cd ..
```

3. Create environment files:

Frontend (.env):
```env
VITE_API_URL=http://localhost:5007
VITE_APP_VERSION=1.0.0
```

Backend (.env):
```env
NODE_ENV=development
PORT=5007
MONGODB_URI=mongodb://localhost:27017/talkfusion
JWT_SECRET=your_jwt_secret_here
```

## Database Setup

1. Start MongoDB:
```bash
# On Windows
net start MongoDB

# On macOS/Linux
sudo service mongod start
```

2. Create the database:
```bash
mongosh
use talkfusion
```

## Running the Application

1. Start the backend server:
```bash
cd backend
npm run dev
```

2. Start the frontend development server:
```bash
# In a new terminal
npm run dev
```

The application will be available at:
- Frontend: http://localhost:5173
- Backend API: http://localhost:5007

## Available Scripts

Frontend:
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

Backend:
- `npm run dev` - Start development server with nodemon
- `npm start` - Start production server
- `npm run test` - Run tests

## Features

- User Authentication
- Profile Management
- Team Building
- Compensation Plan
- Analytics Dashboard
- Product Management
- Earnings Tracking

## API Endpoints

### Authentication
- POST `/api/auth/register` - Register new user
- POST `/api/auth/login` - User login
- POST `/api/auth/change-password` - Change password

### User
- GET `/api/users/me` - Get current user
- PUT `/api/users/me` - Update user profile

### Products
- GET `/api/products` - Get all products
- GET `/api/products/:id` - Get product details

### Team
- GET `/api/team` - Get team members
- GET `/api/team/stats` - Get team statistics

### Analytics
- GET `/api/analytics` - Get analytics data
- GET `/api/analytics/performance` - Get performance metrics

### Earnings
- GET `/api/earnings` - Get earnings data
- GET `/api/earnings/summary` - Get earnings summary

## Troubleshooting

1. Port Conflicts:
   - If port 5007 is in use, the server will automatically find an available port between 5007 and 5017
   - Check running processes: `lsof -i :5007`

2. MongoDB Connection:
   - Ensure MongoDB is running
   - Check connection string in .env file
   - Verify database exists

3. Frontend Issues:
   - Clear browser cache
   - Check console for errors
   - Verify API URL in .env file

## Contributing

1. Create a new branch:
```bash
git checkout -b feature/your-feature-name
```

2. Make changes and commit:
```bash
git add .
git commit -m "Description of changes"
```

3. Push changes:
```bash
git push origin feature/your-feature-name
```

4. Create a Pull Request

## License

This project is proprietary and confidential. All rights reserved. 