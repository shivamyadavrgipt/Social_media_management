// import express from 'express';
// import { registerUser, loginUser } from '../controllers/user.controller.js';

// const router = express.Router();

// router.post('/register', registerUser);
// router.post('/login', loginUser);

// export default router;
import express from 'express';
import { registerUser, loginUser } from '../controllers/user.controller.js';

const router = express.Router();

// Register User
router.post('/signup', registerUser);

// Login User
router.post('/login', loginUser);



export default router;
