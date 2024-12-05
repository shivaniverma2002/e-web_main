import React from "react";
import {
  FaGoogle,
  FaMicrosoft,
  FaAmazon,
  FaFacebook,
  FaUber,
  FaApple,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";
import {
  SiIbm,
  SiAccenture,
  SiTcs,
  SiSamsung,
  SiOracle,
  SiAdobe,
  SiIntel,
  SiSalesforce,
} from "react-icons/si";

const Company = () => {
  return (
    <div className="bg-white py-20 overflow-hidden">
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-800">
          Over 500+ Companies collaborating with us
        </h1>
      </div>

      {/* Scrolling container */}
      <div className="w-full overflow-hidden relative">
        {/* Animated scrolling content */}
        <div className="flex gap-8 mt-8 animate-scroll px-4">
          {/* Duplicate the icons array to create an infinite loop */}
          {[
            { Icon: FaGoogle, color: "text-blue-500" },
            { Icon: FaMicrosoft, color: "text-blue-800" },
            { Icon: FaAmazon, color: "text-yellow-600" },
            { Icon: SiIbm, color: "text-blue-400" },
            { Icon: SiAccenture, color: "text-purple-500" },
            { Icon: FaFacebook, color: "text-blue-600" },
            { Icon: FaUber, color: "text-black" },
            { Icon: SiTcs, color: "text-blue-700" },
            { Icon: FaApple, color: "text-gray-800" },
            { Icon: FaTwitter, color: "text-blue-400" },
            { Icon: FaLinkedin, color: "text-blue-700" },
            { Icon: FaGithub, color: "text-gray-800" },
            { Icon: FaInstagram, color: "text-pink-500" },
            { Icon: SiSamsung, color: "text-blue-500" },
            { Icon: SiOracle, color: "text-red-500" },
            { Icon: SiAdobe, color: "text-red-400" },
            { Icon: SiIntel, color: "text-blue-600" },
            { Icon: SiSalesforce, color: "text-blue-400" },
          ].map(({ Icon, color }, index) => (
            <div key={index} className="flex-shrink-0 flex justify-center">
              <Icon className={`text-6xl md:text-7xl lg:text-8xl ${color}`} />
            </div>
          ))}

          {/* Duplicate the icons array to maintain continuity */}
          {[
            { Icon: FaGoogle, color: "text-blue-500" },
            { Icon: FaMicrosoft, color: "text-blue-800" },
            { Icon: FaAmazon, color: "text-yellow-600" },
            { Icon: SiIbm, color: "text-blue-400" },
            { Icon: SiAccenture, color: "text-purple-500" },
            { Icon: FaFacebook, color: "text-blue-600" },
            { Icon: FaUber, color: "text-black" },
            { Icon: SiTcs, color: "text-blue-700" },
            { Icon: FaApple, color: "text-gray-800" },
            { Icon: FaTwitter, color: "text-blue-400" },
            { Icon: FaLinkedin, color: "text-blue-700" },
            { Icon: FaGithub, color: "text-gray-800" },
            { Icon: FaInstagram, color: "text-pink-500" },
            { Icon: SiSamsung, color: "text-blue-500" },
            { Icon: SiOracle, color: "text-red-500" },
            { Icon: SiAdobe, color: "text-red-400" },
            { Icon: SiIntel, color: "text-blue-600" },
            { Icon: SiSalesforce, color: "text-blue-400" },
          ].map(({ Icon, color }, index) => (
            <div
              key={index + 1000}
              className="flex-shrink-0 flex justify-center"
            >
              <Icon className={`text-6xl md:text-7xl lg:text-8xl ${color}`} />
            </div>
          ))}
        </div>
      </div>

      {/* Additional styles for animation */}
      <style jsx>{`
        @keyframes scroll {
          from {
            transform: translateX(10%);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          display: flex;
          gap: 3rem;
          width: calc(100% * 2); /* Doubling width for a continuous loop */
          animation: scroll 10s linear infinite;
        }

        /* Ensure that the container never clips icons */
        @media (max-width: 1024px) {
          .animate-scroll {
            gap: 2rem;
          }
        }

        @media (max-width: 768px) {
          .animate-scroll {
            gap: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Company;
