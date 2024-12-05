import React from "react";
import img1 from "../assets/image/img1.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function About() {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-10 md:px-8 lg:px-16 xl:px-24 bg-purple-100">
      {/* Two main sections */}
      <motion.div
        className="flex flex-col md:flex-row items-center w-full max-w-6xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }} // Trigger on scroll into view
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }} // Trigger once when the component enters the viewport
      >
        {/* Left-side content */}
        <motion.div
          className="text-left md:w-1/2 p-4"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }} // Trigger animation when in view
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }} // Trigger only once
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-purple-800">
            Our Online Education Smart & Effective
          </h1>
          <p className="text-base md:text-lg text-gray-500 mb-6 mt-3">
            Online education can be a convenient and flexible option for
            students who are unable to attend traditional in-person classes due
            to their location or schedule.
          </p>
          <Link
            to="/course"
            className="inline-block text-white bg-purple-500 hover:bg-purple-600 font-semibold py-3 px-5 rounded-lg"
          >
            Let’s Start
          </Link>
        </motion.div>

        {/* Right-side image */}
        <motion.div
          className="md:w-1/2 p-4 flex justify-center hidden md:block"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }} // Trigger animation when in view
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }} // Trigger only once
        >
          <img
            src={img1}
            alt="Description"
            className="w-full h-auto rounded-lg"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default About;
