const Post = require("../models/post");

const newpost = async (req, res) => {
   try {
      const { postUrl, caption } = req.body;
      const userId = req.params.id;

      const newPost = new Post({
         postUrl,
         caption,
         postedBy: userId
      });

      await newPost.save();

      res.status(201).json({
         status: "success",
         message: "Post created successfully",
         post: newPost
      });
   } catch (error) {
      console.error("Error creating post:", error);
      res.status(500).json({
         status: "error",
         message: "Posting failed"
      });
   }
};

module.exports = { newpost };
