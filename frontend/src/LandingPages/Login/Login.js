import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://e-web-main-backend.onrender.com/api/auth/login",
        {
          email,
          password,
        }
      );
      console.log("Login successful:", response.data);

      // Show success toast
      toast.success("Login successful!", {
        position: "top-right", // Use string instead of toast.POSITION.TOP_RIGHT
      });

      // Store token in local storage
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      localStorage.setItem("userId", response.data.id);

      // Redirect to dashboard or home page after successful login
      setTimeout(() => {
        navigate("/");
      }, 2000); // Delay to let the toast be displayed
    } catch (error) {
      console.error("Login error:", error);

      if (error.response) {
        // Show error toast
        toast.error(
          error.response.data.message || "Login failed. Please try again.",
          { position: "top-right" } // Use string here as well
        );
      } else {
        // Show network error toast
        toast.error("Network error. Please check your connection.", {
          position: "top-right", // Use string here too
        });
      }
    }
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
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-white p-8 max-w-md w-full rounded-lg shadow-lg mt-[8rem]">
          <h2 className="text-2xl font-semibold text-center text-purple-600">
            Login
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mt-4">
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mt-4">
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full mt-6 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600"
            >
              Login
            </button>
          </form>
          <div className="mt-6 text-center">
            <h5 className="text-gray-500">OR</h5>
            <p className="mt-4 text-sm text-gray-500 font-semibold">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="text-purple-600 hover:text-purple-700 ms-1 font-bold"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Login;
