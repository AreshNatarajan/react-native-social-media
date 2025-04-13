const Post = require("../models/post");

const newpost = async (req, res) => {
   try {
      const { postUrl, caption } = req.body
      const userId = req.params.id;

      const newPost = await Post({
         postUrl,
         caption,
         postedBy: userId
      })

      await newPost.save();
      res.status(200).json({ status: "success", message: "Posted successfuly" })
   } catch (error) {
      res.status(200).json({ status: "error", message: "Posting failed" })
   }
}


module.exports = { newpost }