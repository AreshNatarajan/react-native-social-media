const Post = require('../models/post');
const User  = require('../models/user')

const addComment = async (req, res) => {
    try {
        const { postId } = req.params;
        const { userId, text } = req.body;

        const post = await Post.findById(postId);
        const user = await User.findById(userId)

        if (!user) return res.status(404).json({ message: "User not found" });
        if (!post) return res.status(404).json({ message: "Post not found" });

        const newComment = { text, commentedBy: userId, commentedUserProfile : user.profile, commentedUserName : user.userName };
        post.comments.push(newComment);
        await post.save();

        res.status(200).json({ status : 'success', message: "Comment added", post });
    } catch (error) {
        res.status(500).json({ status : "error", message: "Something went wrong" });
    }
}

module.exports = { addComment }