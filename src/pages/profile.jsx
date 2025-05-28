import Navbar from "../components/navbar";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const fetchUserProfile = async () => {
      const token = localStorage.getItem("access_token");
      if (!token) {
        console.error("No token found");
        toast.error("Authentication token missing. Please log in.");
        return;
      }

      try {
        const response = await fetch(
          "https://electronic-gertrudis-chanel-debb-bad97784.koyeb.app/auth/user/",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );

        let data = {};
        try {
          data = await response.json();
        } catch {
          console.error("Invalid JSON response");
        }

        if (!response.ok) {
          let errorMessage = "Failed to fetch user profile.";

          switch (response.status) {
            case 401:
              errorMessage = "Unauthorized. Please log in again.";
              localStorage.removeItem("access_token");
              break;
            case 403:
              errorMessage = "Access denied. You do not have permission.";
              break;
            case 404:
              errorMessage = "User profile not found.";
              break;
            case 500:
              errorMessage = "Server error. Please try again later.";
              break;
            default:
              errorMessage = `Unexpected error (status ${response.status}).`;
          }

          throw new Error(errorMessage);
        }

        console.log("User profile:", data);
        setUser(data);
        setFirstName(data.first_name || "");
        setLastName(data.last_name || "");
        setEmail(data.email || "");
      } catch (error) {
        console.error("Error fetching user profile:", error.message);
        toast.error(error.message || "Unknown error fetching user profile.");
      }
    };

    fetchUserProfile();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="text-center justify-center border-border-gray-500 py-5 px-8 mt-15">
        <div className="border border-gray-200 py-8 px-9 max-w-3xl mx-auto rounded-2xl">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
            Profile
          </h1>
          <p className="text-sm sm:text-base text-gray-500 mb-6">
            Manage your account details and preferences
          </p>
          <div className="space-y-1 text-left">
            <label className="text-sm font-medium text-gray-700 px-3">
              FIRST NAME
            </label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full mx-auto px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 mb-3"
            />
            <label className="text-sm font-medium text-gray-700 px-3">
              LAST NAME
            </label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full mx-auto px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 mb-3"
            />
            <label className="text-sm font-medium text-gray-700 px-3">
              EMAIL
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mx-auto px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 mb-3"
            />
          </div>

          <div className="w-full mx-aut0 h-px bg-gray-300 my-4 mt-7"></div>

          <div>
            <h1 className="font-medium text-gray-700 mb-1">Account Info</h1>
            <p className="text-sm text-green-600">Verified</p>
          </div>

          <div className="mt-6">
            <button className="bg-blue-900 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200">
              Edit Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;