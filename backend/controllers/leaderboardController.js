const User = require("../models/User");

exports.getLeaderboard = async (req, res) => {
    try {
        const users = await User.find()
            .sort({ referrals: -1 })
            .limit(10)
            .select("firstName lastName referrals");
        
        const formattedUsers = users.map(user => ({
            name: `${user.firstName} ${user.lastName}`,
            referrals: user.referrals || 0
        }));

        res.json(formattedUsers);
    } catch (error) {
        console.error('Leaderboard error:', error);
        res.status(500).json({ message: 'Error fetching leaderboard data' });
    }
}; 