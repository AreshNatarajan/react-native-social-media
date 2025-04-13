const User = require("../models/user")

const updateUserProfile = async (req, res) => {
  try {
    const { profile, userName, username, bio } = req.body
    const userID = req.params.id
    const user = await User.findByIdAndUpdate(userID, { profile, userName, username, bio }, { new: true })
    const userObjectForJson = {
      profile: user.profile,
      userName: user.userName,
      username: user.username,
      bio: user.bio,
      followers: user.followers,
      following: user.following
    }
    res.status(201).json({ status: "success", message: "Updated succesfuly", newUserDetails: userObjectForJson })
  } catch (error) {
    res.status(500).json({ status: "error", message: "Update failed" })
  }
}

module.exports = updateUserProfile