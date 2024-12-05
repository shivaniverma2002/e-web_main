import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/userModel.js'; 

// Utility function for sending responses
const sendResponse = (res, status, message, data = {}) => {
  res.status(status).json({ message, ...data });
};

// Constants for HTTP status codes
const STATUS_CODES = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
  SERVER_ERROR: 500,
};

// GET USER PROFILE CONTROLLER
export const getUserProfile = async (req, res) => {
  try {
    const userId = req.user._id; // Assuming req.user is populated by your protect middleware
    const user = await User.findById(userId).select('-password'); // Exclude password from response

    if (!user) {
      return sendResponse(res, STATUS_CODES.NOT_FOUND, 'User not found');
    }

    sendResponse(res, STATUS_CODES.OK, 'User profile fetched successfully!', { user });
    // console.log(user);
  } catch (error) {
    console.error('Error fetching user profile:', error);
    sendResponse(res, STATUS_CODES.SERVER_ERROR, 'Server error');
  }
};



// SIGNUP
export const signup = async (req, res) => {
  const { username, email, password } = req.body;
  console.log("Signup request received:", { username, email, password });

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.log("User already exists");
      return res.status(409).json({ message: 'User already exists' });
    }

    const newUser = new User({ username, email, password });
    const savedUser = await newUser.save();
    console.log("User saved successfully:", savedUser);
    res.status(201).json({ message: 'User created successfully', user: savedUser });
  } catch (error) {
    console.error('Error saving user:', error.message);
    res.status(500).json({ message: 'Internal server error', error: error.message });
  }
};

// LOGIN
export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return sendResponse(res, STATUS_CODES.UNAUTHORIZED, "Invalid email");

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return sendResponse(res, STATUS_CODES.UNAUTHORIZED, "Invalid password");

    const token = jwt.sign({ userId: user._id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });
    sendResponse(res, STATUS_CODES.OK, 'Login successful', {
      token,
      user: { id: user._id, username: user.username, email: user.email },
    });
  } catch (error) {
    console.error("Error during login:", error);
    sendResponse(res, STATUS_CODES.SERVER_ERROR, 'Server error');
  }
};

// LOGOUT
export const logout = (req, res) => {
  sendResponse(res, STATUS_CODES.OK, "User logged out successfully!");
};
