const User = require("../models/user");

const updateUserProfile = async (req, res) => {
  try {
    const { profile, userName, username, bio } = req.body;
    const userID = req.params.id;

    const updatedUser = await User.findByIdAndUpdate(
      userID,
      { profile, userName, username, bio },
      { new: true, runValidators: true } 
    ).select("-password"); 

    if (!updatedUser) {
      return res.status(404).json({ status: "error", message: "User not found" });
    }

    res.status(200).json({
      status: "success",
      message: "Updated successfully",
      newUserDetails: updatedUser
    });
  } catch (error) {
    console.error("Error updating user profile:", error);
    res.status(500).json({ status: "error", message: "Update failed" });
  }
};

module.exports = updateUserProfile;
