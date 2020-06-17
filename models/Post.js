const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema.Types


const postSchema = mongoose.Schema({
    title: {
        type: String,
        requried: true
    },
    body: {
        type: String,
        requried: true
    },
    photo: {
        type: String,
        requried: true
    },
    likes: [
        {
            type:ObjectId,
            ref: "User"
        }
    ],
    comments:[{
        text:String,
        postedBy:{type:ObjectId,ref:"User"}
    }],
    postedBy: {
        type: ObjectId,
        ref: "User"
    }
})

mongoose.model("Post", postSchema)