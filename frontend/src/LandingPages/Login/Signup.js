import React, { useState } from "react"; 
import { Link, useNavigate } from "react-router-dom"; 
import { ToastContainer, toast } from "react-toastify";
import Axios from "axios";

function Signup() {
  const [username, setUsername] = useState(""); 
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState(""); 
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    Axios.post("https://e-web-main-backend.onrender.com/api/auth/signup", {
      username,
      email,
      password,
    }) // Corrected URL
      .then((result) => {
        console.log(result);
        toast.success("Signup successful! Redirecting to login...", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });

        // Redirect to login after a short delay
        setTimeout(() => {
          navigate("/login");
        }, 3000);
      })
      .catch((err) => {
        console.error("Signup error:", err);
        toast.error("Signup failed. Please try again.", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      });
  };

  return (
    
    
    <div
      className="bg-cover bg-center w-full min-h-screen"
      style={{
        backgroundImage:
          'url("/sign.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex items-center justify-center min-h-screen ">
        <div className="bg-white rounded-lg p-8 w-full max-w-md mt-[8rem]">
          <h2 className="text-2xl text-purple-700 font-semibold text-center mb-6">
            Sign Up
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700"
              >
                Username:
              </label>
              <input
                type="text"
                id="username"
                placeholder="Username"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email:
              </label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                autoComplete="off"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password:
              </label>
              <input
                type="password"
                id="password"
                placeholder="******"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-purple-500 text-white font-semibold py-2 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
            >
              Sign Up
            </button>
          </form>
          <div className="text-center mt-6">
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-bold text-md text-purple-600 hover:text-purple-700 ms-3 py-2   rounded-md  focus:outline-none"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
}

export default Signup;
