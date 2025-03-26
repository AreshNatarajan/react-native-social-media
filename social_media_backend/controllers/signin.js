const User = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require("bcryptjs");

const signin = async (req, res) => {
   try {
      const { email, password } = req.body;


      const isUserExist = await User.findOne({ email });

      if (!isUserExist) {
         return res.status(400).json({ status: "error", message: "User does not exist" });
      }


      const isPasswordValid = await bcrypt.compare(password, isUserExist.password);
      if (!isPasswordValid) {
         return res.status(400).json({ status: "error", message: "Invalid password" });
      }


      const token = jwt.sign(
         { id: isUserExist._id },
         process.env.JWT_SECRET
      );

      return res.status(200).json({
         status: "success",
         message: "Login successful",
         token
      });

   } catch (error) {
      console.error(error);
      res.status(500).json({ status: "error", message: "Server error", error: error.message });
   }
}

module.exports = signin;
