// import {useState, useEffect} from "react"
import { useEffect, useState } from "react";
import Navbar from "../../components/navbar";
import Image2 from "../../../public/image/image2.png";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      email: email,
      password: password,
    };

    try {
      const response = await fetch(
        "https://electronic-gertrudis-chanel-debb-bad97784.koyeb.app/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      // Assuming the response contains a token or user data
      localStorage.setItem("access_token", data.access_token);
      toast.success("Login successful!");
      // Redirect to the dashboard or another page
      navigate("/");
    } catch (error) {
      console.error("Login error:", error);
      toast.error(error.message || error.detail || "Login failed. Please try again.");
    } finally {
      // Handle any final actions after login attempt
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-12 items-center">
            {/* Login Form */}
            <div className="bg-white p-6 sm:p-8 md:p-10 rounded-2xl shadow-sm w-full">
              <div className="text-center mb-8 sm:mb-10">
                <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800">
                  Hello, <br /> Welcome Back
                </h1>
                <p className="text-sm sm:text-base mt-2 text-gray-500">
                  Enter your email and password to access your account
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm sm:text-base font-medium text-gray-700 mb-1">
                    EMAIL
                  </label>
                  <input
                    type="email"
                    value={email}
                    placeholder="Enter your email"
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm sm:text-base font-medium text-gray-700 mb-1">
                    PASSWORD
                  </label>
                  <input
                    type="password"
                    value={password}
                    placeholder="Enter your password"
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base"
                    required
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      type="checkbox"
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label
                      htmlFor="remember-me"
                      className="ml-2 block text-sm text-gray-700"
                    >
                      Remember me
                    </label>
                  </div>
                  <div className="text-sm">
                    <a
                      href="#"
                      className="font-medium text-blue-600 hover:text-blue-500"
                    >
                      Forgot your password?
                    </a>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-900 hover:bg-blue-700 text-white font-medium py-2.5 px-4 rounded-lg transition duration-150 ease-in-out text-sm sm:text-base"
                >
                  Login
                </button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm sm:text-base text-gray-600">
                  Don't have an account?{" "}
                  <a
                    href="#"
                    className="font-medium text-blue-600 hover:text-blue-500"
                  >
                    Register Now
                  </a>
                </p>
              </div>
            </div>

            {/* Image Section - Hidden on small screens */}
            <div className="hidden lg:block">
              <img
                src={Image2}
                alt="Login visual"
                className="w-full h-auto max-h-[600px] object-contain rounded-xl"
              />
            </div>
          </div>
        </div>
      </main>

      <footer className="py-4 text-center text-gray-400 text-sm">
        Copyright &copy; {new Date().getFullYear()} Swift Logistics.
      </footer>
    </div>
  );
};
export default Login;
