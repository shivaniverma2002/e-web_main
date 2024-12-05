// import Course from '../models/courseModel.js';

// export const checkCourseExists = async (req, res, next) => {
//   const { courseId } = req.body;

//   if (!courseId) {
//     return res.status(400).json({ message: "Course ID is required." });
//   }

//   const course = await Course.findById(courseId);
//   if (!course) {
//     return res.status(404).json({ message: "Course not found." });
//   }

//   next();
// };

// export const authenticate = (req, res, next) => {
//   const token = req.headers.authorization?.split(' ')[1];
//   if (!token) return res.status(401).json({ message: 'Unauthorized' });

//   jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
//     if (err) return res.status(403).json({ message: 'Token is invalid' });
//     req.user = user;
//     next();
//   });
// };
import jwt from 'jsonwebtoken';

export const protect = (req, res, next) => {
  // Extract token from the Authorization header (Bearer <token>)
  const token = req.headers.authorization?.split(' ')[1]; 

  if (!token) {
    return res.status(401).json({ message: 'No token provided. Unauthorized access.' });
  }

  // Verify the token
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid token. Access denied.' });
    }

    // Attach decoded user data (from token) to request object
    req.user = decoded; // Adding decoded user info to the request object
    next(); // Proceed to the next middleware or route handler
  });
};
