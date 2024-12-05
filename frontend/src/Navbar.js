
import React, { useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { FaGraduationCap } from "react-icons/fa6";
import { SlMenu } from "react-icons/sl";
import { RxCross2 } from "react-icons/rx";

function Navbar() {
  const navigate = useNavigate();

  // Retrieve user data from local storage
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const location = useLocation();

  // Check if the current route is the home page
  const isHomePage = location.pathname === "/";
  const isSignupPage=location.pathname==='/signup';
  const isLoginPage=location.pathname==='/login'

  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMobileMenu]);

  return (
    <nav
      className={`absolute top-0 left-0 w-full z-10 ${
        isHomePage || isSignupPage || isLoginPage
          ? "bg-transparent"
          : "bg-purple-600"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center py-4 px-4 md:px-20 lg:px-32">
        <FaGraduationCap size={50} className="text-white" />

        <ul className="hidden md:flex gap-7 text-white">
          <Link
            to="/"
            className="text-white text-lg font-bold hover:text-gray-200 hover:border-b-2 hover:border-white transition-all"
          >
            Home
          </Link>
          <Link
            to="/courses"
            className="text-white text-lg font-bold hover:text-gray-200 hover:border-b-2 hover:border-white transition-all"
          >
            Courses
          </Link>
          <Link
            to="/batch"
            className="text-white text-lg font-bold hover:text-gray-200 hover:border-b-2 hover:border-white transition-all"
          >
            My Batch
          </Link>
        </ul>

        {user ? (
          <div className="hidden md:flex items-center gap-4">
            <span className="text-white">Welcome, {user.username}!</span>
            <button
              onClick={handleLogout}
              className="bg-purple-500 text-white px-4 py-2 rounded-full hover:bg-purple-600 transition-all"
            >
              Logout
            </button>
          </div>
        ) : (
          <Link
            to="/login"
            className=" md:block bg-transparent border-2 border-white px-8 py-2 rounded-full text-lg text-white "
          >
            Login
          </Link>
        )}

        <SlMenu
          onClick={() => setShowMobileMenu(!showMobileMenu)}
          className="text-white text-3xl md:hidden cursor-pointer"
        />
      </div>

      {/* Mobile Dropdown Menu */}

      {showMobileMenu && (
        <div className="fixed inset-0 bg-white z-[9999] transition-all">
          {/* Overlay that hides the menu when clicked */}
          <div
            className="absolute inset-0 bg-white opacity-50"
            onClick={() => setShowMobileMenu(false)}
          ></div>

          {/* Menu content */}
          <div className="relative z-[10000]">
            <div className="flex justify-end p-6 cursor-pointer text-3xl">
              <RxCross2 onClick={() => setShowMobileMenu(false)} />
            </div>
            <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
              <Link
                to="/"
                onClick={() => setShowMobileMenu(false)}
                className="px-4 py-2 rounded-full inline-block text-purple-700 hover:bg-purple-200 transition-all"
              >
                Home
              </Link>
              <Link
                to="/courses"
                onClick={() => setShowMobileMenu(false)}
                className="px-4 py-2 rounded-full inline-block text-purple-700 hover:bg-purple-200 transition-all"
              >
                Courses
              </Link>
              <Link
                to="/batch"
                onClick={() => setShowMobileMenu(false)}
                className="px-4 py-2 rounded-full inline-block text-purple-700 hover:bg-purple-200 transition-all"
              >
                My Batch
              </Link>
              {user ? (
                <>
                  <span className="block py-2 text-purple-700">
                    Welcome, {user.username}!
                  </span>
                  <button
                    onClick={() => {
                      handleLogout();
                      setShowMobileMenu(false);
                    }}
                    className="block py-2 bg-purple-500 text-white px-4 rounded-full hover:bg-purple-600 transition-all"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <Link
                  to="/login"
                  onClick={() => setShowMobileMenu(false)}
                  className="px-4 py-2 rounded-full inline-block text-purple-700 hover:bg-purple-200 transition-all"
                >
                  Login
                </Link>
              )}
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;



