const User = require("../models/User");

exports.getDashboardData = async (req, res) => {
    try {
        // In a real app, you'd get the user ID from the authenticated session
        // For now, we'll get the most recently created user
        const user = await User.findOne().sort({ createdAt: -1 });
        
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Return only necessary data
        res.json({
            name: user.name,
            email: user.email,
            package: user.package,
            enroller: user.enroller,
            referrals: user.referrals,
            earnings: user.earnings
        });
    } catch (error) {
        console.error("Error fetching dashboard data:", error);
        res.status(500).json({ message: "Error fetching dashboard data" });
    }
}; 