const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const User = require('../models/User');

// Get dashboard stats
router.get('/stats', auth, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Get basic stats
        const stats = {
            user: {
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                package: user.package,
                enroller: user.enroller
            },
            referrals: user.referrals || 0,
            points: user.points || 0,
            rank: user.rank || 'Not Ranked'
        };

        res.json(stats);
    } catch (err) {
        console.error('Dashboard stats error:', err);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router; 