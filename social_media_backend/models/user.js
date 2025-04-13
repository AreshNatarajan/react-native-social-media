const { default: mongoose, mongo } = require("mongoose");

const UserSchema = new mongoose.Schema({
    profile: { type: String, default: "" },
    userName: { type: String, default: "" },
    bio: { type: String, default: "" },
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    followers: [{ type: mongoose.Schema.Types.ObjectId, ref: "user" }],
    following: [{ type: mongoose.Schema.Types.ObjectId, ref: "user" }]
    
}, { timestamps: true });

const User = mongoose.model('user', UserSchema)

module.exports = User