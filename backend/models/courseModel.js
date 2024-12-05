import mongoose from "mongoose";

// Course Schema
const courseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },

    imageUrl: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,

      required: true,
      min: [1, "Rating must be at least 1"],
      max: [5, "Rating cannot be more than 5"],
    },
    discount: {
      type: Number,

      required: true,
      min: [10, "discount must be at least 1"],
      max: [100, "Discount cannot be more than 5"],
    },
  },
  { timestamps: true } // Automatically adds createdAt and updatedAt fields
);

// User Schema
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: /.+\@.+\..+/, // Simple regex to validate email format
    },
    password: {
      type: String,
      required: true,
    },
    enrolledCourses: [
      { type: mongoose.Schema.Types.ObjectId, ref: "Course" },
    ],
  },
  { timestamps: true } // Automatically adds createdAt and updatedAt fields
);

// Models
export const Course = mongoose.models.Course || mongoose.model("Course", courseSchema);
export const User = mongoose.models.User || mongoose.model("User", userSchema);

// Export as named exports for flexibility
// export default { Course, User };
