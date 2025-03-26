const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Generate a random password
const generateTempPassword = () => {
    const length = 12;
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";
    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    return password;
};

exports.signup = async (req, res) => {
    try {
        const { firstName, lastName, email, phone, country, language } = req.body;

        // Validate required fields
        if (!firstName || !lastName || !email || !phone || !country || !language) {
            return res.status(400).json({ message: "All fields are required" });
        }

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "Email already registered" });
        }

        // Generate temporary password
        const tempPassword = generateTempPassword();
        
        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(tempPassword, salt);

        // Create new user
        const user = new User({
            firstName,
            lastName,
            email,
            phone,
            country,
            language,
            password: hashedPassword,
            isTempPassword: true
        });

        await user.save();

        // Generate JWT token
        const token = jwt.sign(
            { userId: user._id },
            process.env.JWT_SECRET,
            { expiresIn: "24h" }
        );

        res.status(201).json({
            message: "User created successfully",
            token,
            user: {
                id: user._id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                phone: user.phone,
                country: user.country,
                language: user.language
            },
            tempPassword // Send temporary password to user
        });
    } catch (error) {
        console.error("Signup error:", error);
        res.status(500).json({ message: error.message || "Error creating user" });
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find user
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        // Check password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        // Generate JWT token
        const token = jwt.sign(
            { userId: user._id },
            process.env.JWT_SECRET,
            { expiresIn: "24h" }
        );

        // Check if using temporary password
        if (user.isTempPassword) {
            return res.status(200).json({
                message: "Please change your temporary password",
                requiresPasswordChange: true,
                user: {
                    id: user._id,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email,
                    phone: user.phone,
                    country: user.country,
                    language: user.language
                }
            });
        }

        res.json({
            message: "Login successful",
            token,
            user: {
                id: user._id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                phone: user.phone,
                country: user.country,
                language: user.language
            }
        });
    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({ message: error.message || "Error during login" });
    }
};

exports.changePassword = async (req, res) => {
    try {
        const { email, currentPassword, newPassword } = req.body;

        // Find user
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Verify current password
        const isMatch = await bcrypt.compare(currentPassword, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Current password is incorrect' });
        }

        // Hash new password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(newPassword, salt);

        // Update password
        user.password = hashedPassword;
        user.isTempPassword = false;
        await user.save();

        // Generate new JWT token
        const token = jwt.sign(
            { userId: user._id },
            process.env.JWT_SECRET,
            { expiresIn: '24h' }
        );

        res.json({
            message: 'Password changed successfully',
            token,
            user: {
                id: user._id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                phone: user.phone,
                country: user.country,
                language: user.language
            }
        });
    } catch (error) {
        console.error('Change password error:', error);
        res.status(500).json({ message: 'Error changing password' });
    }
}; 