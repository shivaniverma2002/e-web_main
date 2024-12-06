import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const Course = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const userString = localStorage.getItem("user");
  const user = userString ? JSON.parse(userString) : null;
  const effectiveUserId = user?.id;

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get("https://e-web-main-backend.onrender.com/api/courses");
        setCourses(response.data);
      } catch (err) {
        setError("Error fetching courses. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  const cardVariants = {
    offscreen: { opacity: 0, y: 50 },
    onscreen: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", bounce: 0.2, duration: 0.8 },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.5, duration: 0.3 },
    },
  };

  // Maximum description length to truncate text
  const MAX_DESCRIPTION_LENGTH = 20;

  // Handle expanding/collapsing description
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  const handleEnroll = async (courseId) => {
    if (!effectiveUserId) {
      alert("User ID is missing. Please log in to enroll.");
      return;
    }

    try {
      const response = await axios.post(
        "https://e-web-main-backend.onrender.com/api/enroll",
        { userId: effectiveUserId, courseId },
        { headers: { "Content-Type": "application/json" } }
      );

      if (response.status === 200) {
        console.log("suceess");
        toast.success("Enrolled successfully!");
        navigate("/batch", { state: { userId: effectiveUserId } });
      }
    } catch (err) {
      if (err.response && err.response.status === 409) {
        toast.warning("You are already enrolled in this course");
      } else {
        alert("Enrollment failed. Please try again later.");
      }
    }
  };

  if (loading) {
    return <div>Loading courses...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      {/* <h1 className="title text-center text-4xl font-semibold text-purple-700 mt-[5rem] mb-4 mt-[12rem]">
        Courses
      </h1> */}

      <div className="courses flex flex-wrap justify-evenly gap-6 px-4 mt-[12rem]">
        {courses.map((course) => (
          <motion.div
            key={course._id}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.5 }}
            variants={cardVariants}
            className="max-w-sm w-full bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 sm:max-w-xs"
          >
            <div className="course">
              {/* Image Section */}
              <div className="flex justify-center items-center h-48 bg-white">
                <img
                  src={course.imageUrl || "default-image-url.jpg"}
                  alt="course thumbnail"
                  className="w-36 h-36 object-cover"
                />
              </div>

              {/* Content Section */}
              <div className="p-4 bg-white">
                {/* Course Title */}
                <h4 className="text-lg font-bold text-purple-700 mb-2">
                  {course.title}
                </h4>

                {/* Course Description */}
                <div className="flex items-center space-x-2">
                  <h5 className="text-sm text-gray-500 mb-3 flex-1">
                    {isExpanded
                      ? course.description
                      : `${course.description.slice(
                          0,
                          MAX_DESCRIPTION_LENGTH
                        )}...`}
                  </h5>
                  {course.description.length > MAX_DESCRIPTION_LENGTH && (
                    <button
                      onClick={toggleDescription}
                      className="text-xs font-semibold  text-purple-700  "
                    >
                      {isExpanded ? "Read Less" : "Read More"}
                    </button>
                  )}
                </div>

                {/* Course Price Section */}
                <div className="flex items-center mb-3">
                  <h6 className="text-md text-green-500 font-medium">
                    <i className="fa-solid fa-indian-rupee-sign text-sm"></i>
                    &nbsp;{course.price}/-
                  </h6>

                  <div className="ml-2 text-xs font-semibold px-2 py-1 bg-purple-100 text-purple-700 rounded-md border border-purple-500 shadow-sm">
                    {course.discount}% Off
                  </div>
                </div>

                {/* Review Section */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex text-yellow-400">
                    {/* Render 5 stars dynamically based on `course.rating` */}
                    {[...Array(5)].map((_, index) => (
                      <i
                        key={index}
                        className={`fa-solid fa-star ${
                          index < course.rating
                            ? "text-yellow-400"
                            : "text-gray-300"
                        }`}
                      ></i>
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">Reviews</span>
                </div>

                {/* Animated Button */}
                <motion.button
                  variants={buttonVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => handleEnroll(course._id)}
                  className="w-full py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 focus:outline-none"
                >
                  Enroll Now
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      {/* <ToastContainer /> */}
    </div>
  );
};

export default Course;
