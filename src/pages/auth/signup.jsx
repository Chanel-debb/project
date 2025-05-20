import { useEffect, useState } from "react";
import Navbar from "../../components/navbar";
import Image7 from "../../../public/image/Page name/7.png";

const SignUp = () => {
  const [fullName, setFullName] = useState();
  const [gender, setGender] = useState();
  const [dateOfBirth, setDateOfBirth] = useState();
  const [address, setAddress] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      fullName: fullName,
      gender: gender,
      dateOfBirth: dateOfBirth,
      address: address,
      email: email,
      password: password,
    };
    if (password === password) {
      console.log(formData);
    } else {
      alert("information incorrect!");
    }
    try {
      const response = await fetch();
      const data = await response.json();
      setProduct(data);
    } catch (error) {
      setError(error);
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

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 ">
                {/* Full Name */}
                <div>
                  <label className="block text-sm sm:text-base font-medium text-gray-700 mb-1">
                    FULL NAME
                  </label>
                  <input
                    type="text"
                    value={fullName}
                    placeholder="Enter your name"
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base"
                    required
                  />
                </div>

                {/* Gender and DOB in one row on larger screens */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Gender */}
                  <div>
                    <label className="block text-sm sm:text-base font-medium text-gray-700 mb-1">
                      GENDER
                    </label>
                    <select
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base"
                      required
                    >
                      <option value="">Select gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Date of Birth */}
                  <div>
                    <label className="block text-sm sm:text-base font-medium text-gray-700 mb-1">
                      DATE OF BIRTH
                    </label>
                    <input
                      type="date"
                      value={dateOfBirth}
                      onChange={(e) => setDateOfBirth(e.target.value)}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base"
                      required
                    />
                  </div>
                </div>

                {/* Address */}
                <div>
                  <label className="block text-sm sm:text-base font-medium text-gray-700 mb-1">
                    ADDRESS
                  </label>
                  <input
                    type="text"
                    value={address}
                    placeholder="Enter your home address"
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base"
                    required
                  />
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
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-4 rounded-lg transition duration-150 ease-in-out text-sm sm:text-base"
                >
                  Create Account
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
