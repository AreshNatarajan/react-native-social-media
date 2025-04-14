const User = require('../models/user');

const getUser = async (req, res) => {
    try {
        const userID = req.params.id;

        const userDetail = await User.findById(userID).select("-password");

        if (!userDetail) {
            return res.status(404).json({
                status: "error",
                message: "User not found"
            });
        }

        res.status(200).json({
            status: "success",
            message: "User details retrieved successfully",
            user: userDetail
        });
    } catch (error) {
        console.error("Error getting user:", error);
        res.status(500).json({
            status: "error",
            message: "Please try later"
        });
    }
};

module.exports = { getUser };
