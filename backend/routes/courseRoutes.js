// import express from "express";
// import { getCourses, addCourse, enrollInCourse, getEnrolledCourses, deleteCourse } from "../controllers/courseController.js";

// const router = express.Router();

// // Get all courses
// router.get("/courses", getCourses);

// // Add a new course
// router.post("/courses", addCourse);

// // Enroll in a course
// router.post("/enroll", enrollInCourse);

// // Get enrolled courses for a user
// router.get("/my-batch/:userId", getEnrolledCourses);

// // Delete a course
// router.delete("/courses/:courseId", deleteCourse); // New route for deleting a course

// export default router;
import express from "express";
import {
  getCourses,
  addCourse,
  enrollInCourse,
  getEnrolledCourses,
  deleteCourse
} from "../controllers/courseController.js";

const router = express.Router();

// Route to get all courses
router.get("/courses", getCourses);

// Route to add a new course
router.post("/addcourses", addCourse);

// Route to enroll in a course
router.post("/enroll", enrollInCourse);

// Route to get enrolled courses for a user
router.get("/my-batch/:userId", getEnrolledCourses);

// Route to delete a course
router.delete("/courses/:courseId", deleteCourse);

export default router;
