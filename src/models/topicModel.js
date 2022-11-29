const mongoose = require("mongoose")

const topicSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
    },
    topics: [{
        title: { type: String },
        details: { type: String },
    }]
}, { timestamps: true })
module.exports = mongoose.model("topicModel", topicSchema)