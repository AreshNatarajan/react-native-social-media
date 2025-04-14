const Post = require('../models/post')

const getAllComments = async (req, res) => {
    try {
        const { postId } = req.params;

       
        const post = await Post.findById(postId)
            .populate({
                path: 'comments.commentedBy',  
                select: 'userName profile'     
            })
            .exec();

        if (!post) {
            return res.status(404).json({ status: "error", message: "Post not found" });
        }

       
        res.json({
            status: "success",
            message: "Comments fetched successfully",
            comments: post.comments
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: "error", message: "Something went wrong" });
    }

}

module.exports = { getAllComments }