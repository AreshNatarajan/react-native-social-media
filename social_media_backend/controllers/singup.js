
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require("bcryptjs");

const signup = async (req, res) => {
    try {
        const { username, email, password } = req.body;

       
        if (!username || !email || !password) {
            return res.status(400).json({ status: "error", message: "All fields are required" });
        }

       
        const isUserNameExist = await User.findOne({ username });
        if (isUserNameExist) {
            return res.status(400).json({ status: "error", message: "Username already exists" });
        }

       
        const isUserEmailExist = await User.findOne({ email });
        if (isUserEmailExist) {
            return res.status(400).json({ status: "error", message: "Email already used" });
        }

       
        const hashedPassword = await bcrypt.hash(password, 10);

       
        const user = new User({ username, email, password: hashedPassword });
        await user.save();

       
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

        console.log(token);

        // Send response
        return res.status(201).json({ 
            status: "success", 
            message: "Registered successfully", 
            token : token
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ status: "error", message: "Server error", error: error.message });
    }
}

module.exports = { signup };
