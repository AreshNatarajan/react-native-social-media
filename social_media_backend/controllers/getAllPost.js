const Post = require('../models/post');

const getAllPost = async (req, res) => {
    try {
        const allPost = await Post.find()
            .populate("postedBy", "userName profile")
            .sort({ createdAt: -1 });

        res.status(200).json({
            status: "success",
            message: "Posts fetched successfully",
            data: allPost
        });
    } catch (error) {
        console.error("Error fetching posts:", error);
        res.status(500).json({
            status: "error",
            message: "Failed to fetch posts"
        });
    }
};

module.exports = { getAllPost };
