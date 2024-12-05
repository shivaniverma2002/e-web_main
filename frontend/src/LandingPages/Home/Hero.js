import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
function Hero() {
  
  
  return (
    <div
      className="min-h-screen w-full mb-4 bg-cover bg-center flex items-center overflow-hidden relative z-0"
      style={{
        backgroundImage: "url('/bg.jpg')",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "850px",
      }}
    >
      {/* Shadow overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>
      {/* Content */}/{" "}
      <div className="relative z-10 container text-center mx-auto py-2 px-4 md:px-15 lg:px-25 text-white">
        {/* Animated Heading */}
        <motion.h2
          className="text-white text-2xl sm:text-3xl lg:text-2xl font-bold tracking-tight leading-snug"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <TypeAnimation
            sequence={[
              "E-learning promotes self-paced learning, enhancing engagement and knowledge retention",
              1000,
              "E-learning offers flexibility, enabling learners to study at their own pace and convenience.",
              1000,
              "Online learning makes education more inclusive and available to diverse populations.",
              1000,
              "Through e-learning, learners can access a vast range of resources anytime, anywhere.",
              1000,
            ]}
            wrapper="span"  
            speed={60}
            repeat={Infinity}
            className="text-white inline-block mt-2 z-0"
          />
        </motion.h2>

        {/* Animated Subheading */}
        <motion.h2
          className="text-4xl sm:text-5xl md:text-[72px] inline-block max-w-3xl font-semibold pt-20 bg-purple-600 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Become a professional in your sector
        </motion.h2>

        {/* Animated Paragraph */}
        <motion.p
          className="text-base sm:text-sm md:text-lg lg:text-xl inline-block font-semibold pt-10"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          E-learning provides unparalleled flexibility, allowing students to
          learn at their own pace and from any location. This flexibility
          ensures that learners can balance education with other
          responsibilities, making it easier to pursue knowledge on their terms.
        </motion.p>

        {/* Animated Buttons */}
        <motion.div
          className="space-x-6 mt-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <Link
            to="/"
            className="border border-white px-8 py-3 rounded hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white transition-all duration-300"
          >
            Explore
          </Link>
          <Link
            to="#"
            className="bg-gradient-to-r from-purple-600 to-pink-500 px-8 py-3 rounded hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 transition-colors duration-300"
          >
            Contact Us
          </Link>
        </motion.div>
      </div>
    </div>
  );


 

}


export default Hero;
