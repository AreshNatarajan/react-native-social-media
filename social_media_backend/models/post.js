const { default: mongoose, mongo } = require("mongoose");


const PostSchema = new mongoose.Schema({
    postUrl: { type: String, default: "" },
    caption: { type: String, default: "" },
    postedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'user' }],
    comments: [{ text: String, commentedBy: { type: mongoose.Schema.Types.ObjectId, ref: "user" }, commentedUserProfile: String, commentedUserName: String }]

}, { timestamps: true })

const Post = mongoose.model('post', PostSchema);

module.exports = Post;