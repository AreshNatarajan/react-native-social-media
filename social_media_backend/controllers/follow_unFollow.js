const { response } = require('express')
const Post = require('../models/post')
const User = require('../models/user')

const follow_unFollow = async (req, res) => {
    try {
        const { followerId, personId } = req.params;

        if (followerId === personId) {
            return res.status(400).json({ status: "error", message: "You cannot follow yourself." });
        }

        const person = await User.findById(personId).select('-password').lean(); 
        const follower = await User.findById(followerId).select('-password').lean(); 

        if (!person || !follower) {
            return res.status(404).json({ status: "error", message: "User not found." });
        }

        const isAlreadyFollowing = person.followers.some(f => f._id.toString() === followerId);

        if (isAlreadyFollowing) {
           
            person.followers = person.followers.filter(f => f._id.toString() !== followerId);
            follower.following = follower.following.filter(f => f._id.toString() !== personId);

            await User.findByIdAndUpdate(personId, person);
            await User.findByIdAndUpdate(followerId, follower);

            res.json({
                status: "success",
                message: "Unfollowed successfully",
                newData: person
            });

        } else {
            
            const followerData = {
                _id: follower._id,
                userName: follower.userName,
                profile: follower.profile
            };

            const personData = {
                _id: person._id,
                userName: person.userName,
                profile: person.profile
            };

            person.followers.push(followerData);
            follower.following.push(personData);

            await User.findByIdAndUpdate(personId, person);
            await User.findByIdAndUpdate(followerId, follower);

            res.json({
                status: "success",
                message: "Followed successfully",
                newData: person
            });
        }

    } catch (error) {
        console.error(error);
        res.status(500).json({ status: "error", message: "Something went wrong" });
    }

}

module.exports = { follow_unFollow }