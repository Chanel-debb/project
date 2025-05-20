import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = ({ fixed = true }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div
      className={`bg-blue-900 py-2 ${fixed ? "fixed top-0" : ""} w-full z-20`}
    >
      <div className="flex items-center justify-between max-w-7xl 2xl:max-w-[96rem] px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="flex items-center justify-between w-full md:w-auto">
          <Link to="/" className="text-white text-2xl md:text-4xl">
            Swift
          </Link>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center">
          <div className="flex">
            <Link
              to="/dispatch"
              className="text-blue-200 px-3 text-sm font-semibold"
            >
              DISPATCH
            </Link>
            <Link
              to="/track"
              className="text-blue-200 px-3 text-sm font-semibold"
            >
              TRACK
            </Link>
            <Link
              to="/about"
              className="text-blue-200 px-3 text-sm font-semibold"
            >
              ABOUT US
            </Link>
            <Link
              to="/services"
              className="text-blue-200 px-3 text-sm font-semibold"
            >
              SERVICES
            </Link>
          </div>

          {isAuthenticated ? (
            <Link
              to="/shipment-history"
              className="text-blue-200 pl-3 text-sm font-semibold"
            >
              SHIPMENT HISTORY
            </Link>
          ) : (
            <div className="flex ml-4">
              <Link
                to="/login"
                className="bg-white font-semibold hover:bg-blue-900 duration-150 text-black hover:text-white py-2 px-3 rounded-xl text-sm border border-gray-200"
              >
                SIGN IN
              </Link>
              <Link
                to="/signup"
                className="bg-white font-semibold hover:bg-blue-900 duration-150 text-black hover:text-white py-2 px-3 rounded-xl text-sm border border-gray-200 ml-2"
              >
                REGISTER
              </Link>
            </div>
          )}
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-blue-900 py-4 px-4 flex flex-col items-center space-y-4">
            <Link
              to="/dispatch"
              className="text-blue-200 w-full text-center py-2 font-semibold"
              onClick={() => setIsMenuOpen(false)}
            >
              DISPATCH
            </Link>
            <Link
              to="/track"
              className="text-blue-200 w-full text-center py-2 font-semibold"
              onClick={() => setIsMenuOpen(false)}
            >
              TRACK
            </Link>
            <Link
              to="/about"
              className="text-blue-200 w-full text-center py-2 font-semibold"
              onClick={() => setIsMenuOpen(false)}
            >
              ABOUT US
            </Link>
            <Link
              to="/services"
              className="text-blue-200 w-full text-center py-2 font-semibold"
              onClick={() => setIsMenuOpen(false)}
            >
              SERVICES
            </Link>

            {isAuthenticated ? (
              <Link
                to="/shipment-history"
                className="text-blue-200 w-full text-center py-2 font-semibold"
                onClick={() => setIsMenuOpen(false)}
              >
                SHIPMENT HISTORY
              </Link>
            ) : (
              <>
                <Link
                  to="/login"
                  className="bg-white font-semibold hover:bg-blue-900 duration-150 text-black hover:text-white py-2 px-4 rounded-xl w-full text-center border border-gray-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  SIGN IN
                </Link>
                <Link
                  to="/signup"
                  className="bg-white font-semibold hover:bg-blue-900 duration-150 text-black hover:text-white py-2 px-4 rounded-xl w-full text-center border border-gray-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  REGISTER
                </Link>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
