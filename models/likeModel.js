const mongoose = require('mongoose')
//description of data is Schema
const likeSchema = new mongoose.Schema({
    post:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post"
    },
    user:{
        type: String,
        required: true
    },
})

module.exports = mongoose.model("Like",likeSchema);