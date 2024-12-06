import express from 'express';
import { config } from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js'; // Import the database connection from db.js
import authRoutes from './routes/authRoutes.js';
import courseRoutes from './routes/courseRoutes.js';

// Load environment variables from .env file
config();

// Initialize Express app
const app = express();

// Middleware
app.use(express.json()); // Built-in middleware to parse JSON requests

const allowedOrigins = [
  'https://e-web-main-backend.onrender.com',
  'https://e-web-main.vercel.app',
  'http://localhost:3000'
];

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      // Allow requests from allowed origins or non-browser clients
      callback(null, true);
    } else {
      // Block requests from disallowed origins
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ["POST", "GET", "DELETE", "PUT", "PATCH"],
  credentials: true
}));

// Global error handling middleware
app.use((err, req, res, next) => {
  console.error('Error Stack:', err.stack);
  res.status(500).json({
    message: 'Something went wrong!',
    error: err.message || 'Internal Server Error',
  });
});

// Routes
app.use("/api/auth", authRoutes);
app.use("/api", courseRoutes);

// Database connection and server start
const init = async () => {
  try {
    // Check if necessary environment variables are set
    if (!process.env.MONGODB_URI) {
      console.error("MONGODB_URI is missing from .env file");
      process.exit(1);
    }
    if (!process.env.FRONTEND_URL) {
      console.warn("FRONTEND_URL is missing, using default http://localhost:3000");
    }

    // Connect to MongoDB
    await connectDB();
    console.log("MongoDB connected successfully.");

    // Start the server
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Initialization error:", error.message);
    process.exit(1);
  }
};

init();
