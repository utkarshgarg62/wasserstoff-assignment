const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    userName: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    topics: [{
        title: { type: String },
        details: { type: String },
    }]
}, { timestamps: true })
module.exports = mongoose.model("userModel", userSchema)