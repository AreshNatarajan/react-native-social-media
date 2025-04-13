const User = require('../models/user')
const getUser = async (req, res) => {
    try {
        const userID = req.params.id;
        const userDetail = await User.findById({ _id: userID }).select("-password");
        res.status(201).json({ status: "success", message: "user details is exist", user: userDetail })
    } catch (error) {
        res.status(500).json({ status: "error", message: "Please try later" })
    }
}


module.exports = { getUser }