import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import axios from "axios";
import { motion } from "framer-motion";

const MyBatch = () => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const userString = localStorage.getItem("user");
  const user = userString ? JSON.parse(userString) : null;
  console.log(user?.id);
  const userId = user?.id;
  // Handle expanding/collapsing description
    const MAX_DESCRIPTION_LENGTH = 20;
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };
   const buttonVariants = {
     hidden: { opacity: 0, y: 20 },
     visible: {
       opacity: 1,
       y: 0,
       transition: { delay: 0.5, duration: 0.3 },
     },
   };
  // Fetch enrolled courses for the user
  useEffect(() => {
    console.log("useEffect triggered with userId:", userId);
    const fetchEnrolledCourses = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          console.log("No token found");
          setError("Please log in to view your batch.");
          setLoading(false);
          return;
        }

        const response = await axios.get(
          `https://e-web-main-backend.onrender.com/api/my-batch/${userId}`,
          { headers: { Authorization: `Bearer ${token}` } }
        );

        console.log("Response received:", response.data);
        setEnrolledCourses(response.data);
      } catch (err) {
        console.error("Error fetching enrolled courses:", err.message);
        setError("Failed to fetch enrolled courses. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    if (userId) {
      fetchEnrolledCourses();
    }
  }, [userId]);

  if (loading) {
    return <div>Loading your batch...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="container mt-[12rem]">
      <h1 className="text-3xl text-purple-600 font-bold text-center mt-8 mb-6">My Batch</h1>
      
      <div
        className="courses flex flex-wrap justify-evenly gap-6"
        style={{ marginTop: "3rem" }}
      >
        {enrolledCourses.length === 0 ? (
          <div className="text-center text-lg text-gray-600 mt-[12rem]">
            No courses found in your batch.
          </div>
        ) : (
          enrolledCourses.map((course) => (
            <Card
              key={course._id}
              className="shadow-lg rounded-lg overflow-hidden bg-white w-full sm:w-72 md:w-80 lg:w-96"
              style={{ marginTop: "1rem" }}
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
                  </div>
                  <motion.button
                    variants={buttonVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    
                    className="w-full py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 focus:outline-none"
                  >
                    Start Now
                  </motion.button>
                </div>
              </div>
            </Card>
          ))
        )}
      </div>
    </div>
  );
};

export default MyBatch;
