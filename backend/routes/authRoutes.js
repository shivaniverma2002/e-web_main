import express from 'express';
import { signup, login, logout, getUserProfile } from '../controllers/authController.js';
import { protect } from '../middleware/authMiddleware.js'; // Import your protect middleware
// import bcrypt from 'bcrypt'
// import User from '../models/userModel.js'
const router = express.Router();

// Signup route
router.post('/signup', signup)
router.post('/login', login);

// Optional: Logout route
router.post('/logout', protect, logout); // Only allow logged-in users to log out

// Get user profile route
router.get('/me', protect, getUserProfile); // Add this line

export default router;
