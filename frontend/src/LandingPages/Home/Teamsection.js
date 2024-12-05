import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/swiper-bundle.min.css";
import { motion } from "framer-motion";import {
 
  SiAdobe,
 
} from "react-icons/si";


import {
  FaGoogle,
  FaAmazon,
  FaMicrosoft,
  FaLinkedin,
  FaStar,
  FaFacebook,

} from "react-icons/fa";
import team1 from "../assets/image/team1.jpg";
import team2 from "../assets/image/team2.jpg";
import team3 from "../assets/image/team3.jpg";
import team4 from "../assets/image/team4.jpg";
import team5 from "../assets/image/team5.jpg";

SwiperCore.use([Navigation, Pagination]);

const instructors = [
  {
    id: 1,
    name: "Shivani Verma",
    designation: "Software Developer",
    paragraph:
      "A software developer working at Google or Tutor creates, tests, and maintains software solution.",
    img: team1,
    socialLinks: [
      { icon: <FaFacebook className="text-blue-500 text-2xl" />, link: "#" },
    ],
   
  },
  {
    id: 2,
    name: "Priyanka Verma",
    designation: "Data Engineer",
    paragraph:
      "A Data Engineer working at Amazon or Tutor creates, tests, and maintains software solution.",
    img: team2,
    socialLinks: [
      { icon: <FaAmazon className="text-orange-600 text-2xl" />, link: "#" },
    ],
    
   
  },
  {
    id: 3,
    name: "Anjali Gupta",
    designation: "Devops Engineer",
    paragraph:
      "A Devops engineer working at Google or Tutor creates, tests, and maintains software solution.",
    img: team3,
    socialLinks: [
      { icon: <FaGoogle className="text-blue-500 text-2xl" />, link: "#" },
    ],
  
   
  },
  {
    id: 4,
    name: "Divya Rana",
    designation: "App Maker",
    paragraph:
      "An App Maker working at Microsoft or Tutor creates, tests, and maintains app related solution.",
    img: team4,
    socialLinks: [
      { icon: <FaMicrosoft className="text-green-500 text-2xl" />, link: "#" },
    ],
    
  },
  {
    id: 5,
    name: "Sakshi Pandey",
    designation: "Functional Consultant",
    paragraph:
      "A Functional Consultant working at Adobe or Tutor creates, tests, and maintains Functional solution.",
    img: team5,
    socialLinks: [
      { icon: <SiAdobe className="text-red-400 text-2xl" />, link: "#" },
    ],
   
  },
];

const TeamSection = () => {
  return (
    <div className="relative z-10 container mx-auto py-10 px-4 lg:px-8 text-center">
      <h1 className="text-4xl md:text-5xl text-purple-500 font-extrabold mt-5 mb-10 relative group inline-block">
        Meet Our Expert Instructors
        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-purple-500 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
      </h1>

      <div className="container mx-auto py-10 px-4 lg:px-8">
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{ clickable: true }}
          loop={true} // Enable loop to make it continuously scroll
          autoplay={{
            delay: 3000, // Adjust the delay between slides (in milliseconds)
            disableOnInteraction: false, // Prevent autoplay from stopping after user interaction
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="team-slider"
        >
          {instructors.map((instructor, index) => (
            <SwiperSlide key={instructor.id}>
              <motion.div
                className={`bg-purple-100 rounded-3xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-500 group relative z-20 hover:rotate-3 hover:bg-purple-200 hover:border-2 hover:border-purple-400`}
                initial={{ opacity: 0, y: -100 }} // Initial position from top
                animate={{ opacity: 1, y: 0 }} // Move to original position
                transition={{
                  delay: 0.1 * index,
                  duration: 0.5,
                  ease: "easeOut",
                }} // Faster with easeOut for smoothness
                whileInView={{ opacity: 1, y: 0 }} // When in view, animate
                viewport={{ once: true, amount: 0.3 }} // Trigger animation when 30% of the element is in view
              >
                <div className="overflow-hidden rounded-t-2xl">
                  <img
                    src={instructor.img}
                    alt={instructor.name}
                    className="w-48 h-48 object-cover rounded-full mx-auto mt-8 mb-4 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>

                <div
                  className={`absolute bg-black inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                ></div>

                <div className="relative flex justify-center -mt-10">
                  <div className="bg-white rounded-full p-2 flex space-x-3 shadow-lg">
                    {instructor.socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.link}
                        className="mx-1 transform transition-transform duration-300 hover:scale-125"
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>

                <div className="text-center bg-gradient-to-r from-purple-200 via-purple-300 to-purple-500  rounded-t-[75px] p-6">
                  <h5 className="text-2xl text-purple-700 font-semibold tracking-tight mb-2">
                    {instructor.name}
                  </h5>
                  <p className="text-white mb-2 text-lg">
                    {instructor.designation}
                  </p>
                  <p className="text-white text-md mb-2">
                    {instructor.paragraph}
                  </p>

                  <div className="flex items-center justify-center space-x-3">
                    <a
                      href={instructor.linkedin}
                      className="text-blue-700 text-2xl hover:text-blue-500 transition-all"
                    >
                      <FaLinkedin />
                    </a>

                    <div className="flex space-x-1 text-yellow-500">
                      {[...Array(5)].map((_, index) => (
                        <FaStar
                          key={index}
                          className={`text-lg ${
                            index < instructor.rating ? "filled" : ""
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TeamSection;
