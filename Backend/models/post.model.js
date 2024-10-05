import mongoose from 'mongoose'

const postSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', 
        required: true
    },
    photoUrl: {
        type: String, 
        required: true
    },
    caption: {
        type: String,
        required: true
    },
    platform: {
        type: String, 
        required: true,
        enum: ['Facebook', 'Instagram', 'Twitter','Linkedln','Threads','Google Business','Tiktok','Youtube'] 
    },
    scheduledTime: {
        type: Date, 
        required: true
    },
    published: { type: Boolean, default: false },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Post = mongoose.model('Post', postSchema);

export default Post;
