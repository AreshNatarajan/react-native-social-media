const Post = require('../models/post');
const User = require('../models/user');

const like_dislike = async (req, res) => {
    try {
        const { postId, userId } = req.params;

        const post = await Post.findById(postId);
        if (!post) {
            return res.status(404).json({ status: "error", message: "Post not found" });
        }

        const isLiked = post.likes.includes(userId);

        if (isLiked) {

            post.likes = post.likes.filter(id => id.toString() !== userId);
            await post.save();
            return res.status(200).json({ status: "success", message: "Post unliked" });
        } else {

            post.likes.push(userId);
            await post.save();
            return res.status(200).json({ status: "success", message: "Post liked" });
        }

    } catch (error) {
        console.error("Error toggling like:", error);
        res.status(500).json({ status: "error", message: "Internal server error" });
    }
};

module.exports = { like_dislike };
