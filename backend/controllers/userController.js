import { UserModel } from '../models/user.model.js'; // Import your user model
import jwt from 'jsonwebtoken'; // Import jsonwebtoken for JWT handling
import bcrypt from 'bcrypt'; // Import bcrypt for password hashing
import validator from 'validator';

// Generate JWT token
const getToken = (tokenId) => {
    return jwt.sign({ tokenId }, process.env.JWT_SECRET);
}

// Register a new user
// Register a new user
const register = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        if (!email || !username || !password) {
            return res.json({ success: false, message: "All fields are required" });
        }

        // Check if the user already exists
        const isUser = await UserModel.findOne({ email });
        if (isUser) {
            return res.json({ success: false, message: "Email already in use" });
        }

        // Validate the email
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Email is invalid" });
        }

        // Validate the password length
        if (password.length < 8) {
            return res.json({ success: false, message: "Password length must be at least 8 characters" });
        }

        // Hashing the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create a new user
        const newUser = new UserModel({
            username,
            email,
            password: hashedPassword
        });

        // Save the user to the database
        const user = await newUser.save();

        // Generate a token for the new user
        const token = getToken(user._id);
        return res.json({ success: true, token });
    } catch (error) {
        console.error("Error:", error);
        return res.json({ success: false, message: "Server Error" });
    }
}


// Placeholder for the login function
const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const exist = await UserModel.findOne({ email });
        const user = await UserModel.findOne({ email });
        if (!exist) {
            return res.json({ success: false, message: "No user Found" });
        }
        const isMatch = await bcrypt.compare(password, exist.password);
        if (!isMatch) {
            return res.json({ success: false, message: "Invalid Credential" });
        }
        const token = getToken(user._id);
        return res.json({ success: true, token });
    }
    catch (error) {
        console.log("Error", error);
        return res.json({ success: false, message: "server error" })
    }
}

// Export the functions
export { login, register };
