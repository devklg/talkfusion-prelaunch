const User = require("../models/User");

// Get all signups
exports.getSignups = async (req, res) => {
    try {
        const signups = await User.find().sort({ createdAt: -1 });
        res.json(signups);
    } catch (error) {
        res.status(500).json({ message: "Error fetching signups", error: error.message });
    }
};

// Create new signup
exports.createSignup = async (req, res) => {
    try {
        const { firstName, lastName, email, enroller, package } = req.body;

        // Validate required fields
        if (!firstName || !lastName || !email || !enroller || !package) {
            return res.status(400).json({ message: "All fields are required" });
        }

        // Check if email already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "Email already registered" });
        }

        // Create new user
        const user = new User({
            name: `${firstName} ${lastName}`,
            email,
            enroller,
            package,
            referrals: 0,
            // Add a temporary password (you might want to handle this differently)
            password: "tempPassword123"
        });

        await user.save();

        // Return success response
        res.status(201).json({
            message: "Signup successful",
            user: {
                name: user.name,
                email: user.email,
                package: user.package
            }
        });
    } catch (error) {
        console.error("Signup error:", error);
        res.status(500).json({ message: "Error creating signup", error: error.message });
    }
}; 