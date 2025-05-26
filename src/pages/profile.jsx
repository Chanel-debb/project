import Navbar from "../components/navbar";
const Profile = () => {
  return (
    <div>
      <Navbar />
      <div className="text-center justify-center border-border-gray-500 py-5 px-8 mt-15">
        <div className="border border-gray-200 py-8 px-9 max-w-4xl mx-auto">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
            Profile
          </h1>
          <p className="text-sm sm:text-base text-gray-500 mb-6">
            Manage your account details and preferences
          </p>
          <div className="space-y-1 text-left ">
            <label className="text-sm font-medium text-gray-700 px-3 ">
              FIRST NAME
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full mx-auto px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 "
            />
            <label className="text-sm font-medium text-gray-700 px-3">
              FIRST NAME
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full mx-auto px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Profile;