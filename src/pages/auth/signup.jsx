import { useEffect, useState } from "react";
import Navbar from "../../components/navbar";
import Image7 from "../../../public/image/Page name/7.png";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaSpinner } from "react-icons/fa";

const SignUp = () => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    // Basic client-side validation
    if (!email || !password || !firstName || !lastName) {
      toast.error("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    setLoading(true);

    const protocol = "https://";
    const baseUrl = "electronic-gertrudis-chanel-debb-bad97784.koyeb.app";
    const url = `${protocol}${baseUrl}/auth/register`;

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          firstName,
          lastName,
        }),
      });

      let data;
      try {
        data = await response.json();
      } catch (jsonError) {
        throw new Error("Invalid server response. Please try again later.");
      }

      console.log("Server response:", data);

      if (response.status !== 201) {
        // Server responded with an error
        throw new Error(data);
      }

      // Success
      toast.success("Registration successful! Please log in.");
      localStorage.setItem("access_token", data.access_token); // Assuming the token is returned
    
      navigate("/"); // Redirect to login page
    } catch (error) {
      console.error("Signup error:", error);
      toast.error(error.message || "Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow px-4 sm:px-6 lg:px-8 py-8 sm:py-12 ">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-12 items-center pt-8">
            {/* Signup Form */}
            <div className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-8 md:p-10 shadow-sm w-full  ">
              <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-6 sm:mb-8">
                Create an account
              </h2>

              <form onSubmit={handleSignup} className="space-y-4 sm:space-y-5 ">
                {/* Full Name */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm sm:text-base font-medium text-gray-700 mb-1">
                      FIRST NAME
                    </label>
                    <input
                      type="text"
                      value={firstName}
                      placeholder="Enter your name"
                      onChange={(e) => setFirstName(e.target.value)}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm sm:text-base font-medium text-gray-700 mb-1">
                      LAST NAME
                    </label>
                    <input
                      type="text"
                      placeholder="Last Name"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base"
                    />
                  </div>
                </div>

                {/* Email */}
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

                {/* Password */}
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

                {/* Confirm Password */}
                <div>
                  <label className="block text-sm sm:text-base font-medium text-gray-700 mb-1">
                    CONFIRM PASSWORD
                  </label>

                  <input
                    type="password"
                    placeholder="Confirm your password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base"
                    required
                  />
                </div>

                {/* Terms Checkbox */}
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="terms"
                      name="terms"
                      type="checkbox"
                      className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                      required
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="terms"
                      className="font-medium text-gray-700"
                    >
                      By signing up, I have read and agreed to the{" "}
                      <a href="#" className="text-blue-600 hover:text-blue-500">
                        Terms
                      </a>{" "}
                      and{" "}
                      <a href="#" className="text-blue-600 hover:text-blue-500">
                        Privacy Policy
                      </a>
                    </label>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white text-center font-medium py-2.5 px-4 rounded-lg transition duration-150 ease-in-out text-sm sm:text-base"
                >
                  {loading ? (
                    <FaSpinner className="animate-spin" />
                  ) : (
                    "Create Account"
                  )}
                </button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm sm:text-base text-gray-600">
                  Already have an account?{" "}
                  <a
                    href="#"
                    className="font-medium text-blue-600 hover:text-blue-500"
                  >
                    Login
                  </a>
                </p>
              </div>
            </div>

            {/* Image Section - Hidden on mobile */}
            <div className="hidden lg:flex items-center justify-center">
              <img
                src={Image7}
                alt="Signup visual"
                className="w-full max-w-md xl:max-w-lg object-contain rounded-xl"
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
export default SignUp;
