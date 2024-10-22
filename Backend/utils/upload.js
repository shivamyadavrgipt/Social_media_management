import multer from 'multer';
import { storage } from './cloud.js'; // ESM-style import

// Initialize Multer with Cloudinary storage
const upload = multer({ storage });

export default upload;
