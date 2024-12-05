import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Footer() {
  return (
    <motion.div
      className="bg-gray-800 text-white py-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <hr className="border-gray-700 mb-8" />
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h1 className="text-white text-4xl font-bold">LearnSphere</h1>
            <Link
              to="/"
              className="text-gray-400 hover:text-white  text-lg opacity-90"
            >
              <span className="py-4">

              Empowering Learners, Transforming Futures.
              </span>
            </Link>
          </div>

          <div className="space-y-4">
            <h2 className="text-lg font-semibold">HELPFUL LINKS</h2>
            <ul className="text-gray-400 space-y-2">
              <li>
                <Link to="/courses" className="hover:text-white">
                  <i className="fa-solid fa-chevron-right"></i>
                  &nbsp;&nbsp;Courses
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-white">
                  <i className="fa-solid fa-chevron-right"></i>
                  &nbsp;&nbsp;Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-white">
                  <i className="fa-solid fa-chevron-right"></i>
                  &nbsp;&nbsp;Refund & Cancellation Policy
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-white">
                  <i className="fa-solid fa-chevron-right"></i>&nbsp;&nbsp;Terms
                  & Conditions
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-lg font-semibold">GET IN TOUCH</h2>
            <ul className="text-gray-400 space-y-2">
              <li>
                <i className="fa-solid fa-envelope"></i>
                &nbsp;&nbsp;elearning@gmail.com
              </li>
              <li>
                <i className="fa-solid fa-tty"></i>&nbsp;&nbsp;0120-1234567
              </li>
              <li>
                <i className="fa-solid fa-users-gear"></i>&nbsp;&nbsp;Support
                Team : 8am-6pm
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-lg font-semibold">CONNECT WITH US</h2>
            <ul className="text-gray-400 space-y-2">
              <li>
                <Link to="" className="hover:text-white">
                  Facebook&nbsp;&nbsp;
                  <i className="fa-brands fa-facebook-f"></i>
                </Link>
              </li>
              <li>
                <Link to="" className="hover:text-white">
                  Instagram&nbsp;&nbsp;
                  <i className="fa-brands fa-instagram"></i>
                </Link>
              </li>
              <li>
                <Link to="" className="hover:text-white">
                  Linkedin&nbsp;&nbsp;
                  <i className="fa-brands fa-linkedin-in"></i>
                </Link>
              </li>
              <li>
                <Link to="" className="hover:text-white">
                  Twitter&nbsp;&nbsp;<i className="fa-brands fa-x-twitter"></i>
                </Link>
              </li>
              <li>
                <Link to="" className="hover:text-white">
                  Youtube&nbsp;&nbsp;<i className="fa-brands fa-youtube"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <h6 className="text-center text-sm text-gray-400 mt-10">
          All Rights Reserved, Copyright{" "}
          <i className="fa-regular fa-copyright"></i> 2024
        </h6>
      </div>
    </motion.div>
  );
}

export default Footer;
