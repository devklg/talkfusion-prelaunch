const express = require('express');
const router = express.Router();
const { signup, login, changePassword } = require('../controllers/authController');
const auth = require('../middleware/auth');

// Health check endpoint
router.get('/health', (req, res) => {
    res.status(200).json({ status: 'ok', timestamp: new Date().toISOString() });
});

router.post('/signup', signup);
router.post('/login', login);
router.post('/change-password', auth, changePassword);

module.exports = router; 