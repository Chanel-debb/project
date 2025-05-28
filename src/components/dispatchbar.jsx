import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
const DispatchBar = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-white sticky top-6 w-full z-20 shadow-sm">
        <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl 2xl:max-w-[96rem] px-4 sm:px-6 lg:px-8 mx-auto py-4">
          {/* Title */}
          <h1 className="text-blue-600 text-2xl font-semibold mb-3 md:mb-0">
            Dispatch Form
          </h1>

          {/* Navigation Links */}
          <div className="flex space-x-4 md:space-x-6">
            <Link
              to="/track"
              className="text-blue-400 hover:text-blue-600 transition-colors text-sm font-semibold px-3 py-1 rounded-md hover:bg-blue-50"
            >
              Track
            </Link>
            <Link
              to="/brandPartnership"
              className="text-blue-400 hover:text-blue-600 transition-colors text-sm font-semibold px-3 py-1 rounded-md hover:bg-blue-50"
            >
              Brand Partnership
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DispatchBar;
