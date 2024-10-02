import express from 'express';
import Post from '../models/post.model.js';
import User from '../models/user.model.js';

const createPost = async (req, res) => {
  try {
    const { userEmail, caption, platform, scheduledTime } = req.body;
    const photoUrl = req.file.path;
    
    const user = await User.findOne({ email: userEmail }).select('_id');
    
    if (!user) {
      return res.status(400).json({ message: "User is not registered" });
    }
    
    const newPost = new Post({
      user: user._id,
      photoUrl,
      caption,
      platform,
      scheduledTime: new Date(scheduledTime)
    });

    await newPost.save();

    res.status(201).json({
      message: 'Post created successfully with file upload',
      post: newPost
    });
    
  } catch (error) {
    res.status(500).json({
      message: 'Error creating post',
      error: error.message
    });
  }
};

export default createPost;
