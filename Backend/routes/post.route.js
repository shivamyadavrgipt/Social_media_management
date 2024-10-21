import express from 'express';
import createPost from '../controllers/post.controller.js';
import upload from '../utils/upload.js';

const router = express.Router();

router.post('/create', upload.single('photo'), createPost);

export default router;
