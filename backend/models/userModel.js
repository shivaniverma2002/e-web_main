import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// Define user schema
const userSchema = new mongoose.Schema({
  username: { 
    type: String, 
    required: [true, "Name is required"],
    unique: true,
  },
  email: { 
    type: String, 
    required: [true, "Email is required"], 
    unique: true,
    match: [/\S+@\S+\.\S+/, 'Please enter a valid email address'], // Simple email regex for validation
  },
  password: { 
    type: String, 
    required: [true, "Password is required"], 
    minlength: [6, "Password must be at least 6 characters long"], // Minimum password length with custom message
  },
  enrolledCourses: [
    { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'Course' 
    }
  ],
}, { timestamps: true });

// Hash password before saving
userSchema.pre('save', async function(next) {
  // Only hash the password if it has been modified (or is new)
  if (!this.isModified('password')) return next();

  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    return next(error);
  }
});

// Method to compare password during login
userSchema.methods.comparePassword = async function(candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

// Method to generate JWT for authentication
userSchema.methods.generateAuthToken = function() {
  const token = jwt.sign(
    { userId: this._id }, 
    process.env.JWT_SECRET, 
    { expiresIn: '1h' } // Token expiration time
  );
  return token;
};

// Create User model only if it doesn't already exist
const User = mongoose.models.User || mongoose.model('User', userSchema);

// Export as default
export default User ;

