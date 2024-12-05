
import {Course} from "../models/courseModel.js"

// Middleware to check if a course exists
export const checkCourseExists = async (req, res, next) => {
  const { courseId } = req.body;

  if (!courseId) {
    return res.status(400).json({ message: "Course ID is required." });
  }

  try {
    const course = await Course.findById(courseId);
    if (!course) {
      return res.status(404).json({ message: "Course not found." });
    }

    next();
  } catch (error) {
    console.error("Error checking course existence:", error);
    res.status(500).json({ message: error.message });
  }
};
