// Import the models directly (you don't need to destructure again)
import { Course, User } from '../models/courseModel.js';

// Handle adding a course
export const addCourse = async (req, res) => {
  const { title, price, imageUrl, description,rating,discount } = req.body;
   if (!rating || rating < 1 || rating > 5) {
     return res
       .status(400)
       .json({ message: "Rating must be between 1 and 5." });
   }

   if (!discount || discount < 10 || discount > 100) {
     return res
       .status(400)
       .json({ message: "Discount must be between 10 and 100." });
   }

  // Input validation
  if (!title || !price || !imageUrl || !description || !rating || !discount) {
    return res.status(400).json({ message: "All fields (title, price, imageUrl, description,rating,discount) are required." });
  }

  try {
    const newCourse = new Course({ title, price, imageUrl, description,rating,discount });
    await newCourse.save();
    res.status(201).json(newCourse); // Return the created course
  } catch (error) {
    console.error("Error adding course:", error);
    res.status(500).json({ message: error.message });
  }
};

// Handle getting all courses
export const getCourses = async (req, res) => {
  try {
    const courses = await Course.find(); // Fetch all courses from the database
    res.status(200).json(courses); // Respond with the list of courses
  } catch (error) {
    console.error("Error fetching courses:", error);
    res.status(500).json({ message: error.message });
  }
};

// Handle user enrollment in a course
export const enrollInCourse = async (req, res) => {
  const { userId, courseId } = req.body;
  console.log(userId);

  // Input validation
  if (!userId || !courseId) {
    return res.status(400).json({ message: "User ID and Course ID are required." });
  }
  // if (!mongoose.Types.ObjectId.isValid(userId)) {
  //   return res.status(400).json({ message: "Invalid User ID" });
  // }
  try {
    const user = await User.findById(userId);
    const course = await Course.findById(courseId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }

    if (user.enrolledCourses.includes(courseId)) {
      return res.status(409).json({ message: "User is already enrolled in this course" });
    }

    user.enrolledCourses.push(courseId);
    await user.save();
    return res.status(200).json({ message: "Enrolled successfully", enrolledCourses: user.enrolledCourses });
  } catch (error) {
    console.error("Enrollment error:", error);
    res.status(500).json({ message: error.message });
  }
};

// Fetch all enrolled courses for a user
export const getEnrolledCourses = async (req, res) => {
  const userId = req.params.userId;

  if (!userId) {
    return res.status(400).json({ message: 'User ID is required' });
  }

  try {
    const user = await User.findById(userId).populate('enrolledCourses'); // Populate enrolled courses
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user.enrolledCourses);
  } catch (error) {
    console.error("Fetching enrolled courses error:", error);
    res.status(500).json({ message: error.message });
  }
};

// Handle deleting a course
export const deleteCourse = async (req, res) => {
  const { courseId } = req.params;

  if (!courseId) {
    return res.status(400).json({ message: 'Course ID is required' });
  }

  try {
    const course = await Course.findByIdAndDelete(courseId);
    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }
    res.status(200).json({ message: "Course deleted successfully", deletedCourse: course });
  } catch (error) {
    console.error("Error deleting course:", error);
    res.status(500).json({ message: error.message });
  }
};
