import Logo1 from '../../public/image/logo/logo1.png'
import Logo2 from "../../public/image/logo/logo2.png";
import Logo3 from "../../public/image/logo/logo3.png";
import Swift from "../../public/image/swift.png"
import Logo4 from "../../public/image/logo/logo4.png";
import Logo5 from "../../public/image/logo/logo5.png";
import Logo6 from "../../public/image/logo/logo6.png";
import Logo7 from "../../public/image/logo/logo7.png";
import Logo8 from "../../public/image/logo/logo8.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer>
      <section className="bg-blue-100 py-12 md:py-18">
        <div className="py-5 text-center max-w-6xl mx-auto">
          <div className="text-2xl font-semibold text-gray-700 mb-5">
            <h1>Our Commitment to you</h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-3">
            <div className="">
              <img src={Logo1} alt="logo" className="w-[50px] mb-1 mx-auto" />
              <h1 className="text-xl font-semibold mb-3 text-center">
                Prompt Delivery
              </h1>
              <p>
                We provide prompt and reliable delivery every time <br /> Enjoy
                timely, scheduled delivery right to your doorstep.
              </p>
            </div>

            <div>
              <img src={Logo2} alt="logo" className="w-[50px] mb-1 mx-auto" />
              <h1 className="text-xl font-semibold mb-3 text-center">
                Expert couriers
              </h1>
              <p>
                Our skilled delivery professionals <br />
                ensure your package arrives safely and on time
              </p>
            </div>

            <div>
              <img src={Logo3} alt="logo" className="w-[50px] mb-1 mx-auto" />
              <h1 className="text-xl font-semibold mb-3 text-center">
                Secure transport protocols
              </h1>
              <p>
                Every package is protected every step of the way. <br /> We
                ensure safe and careful handling from pickup to drop-off.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Main Footer Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Swift Links */}
            <div>
              <h3 className="text-lg font-semibold text-blue-600 mb-4">
                Swift Links
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/customer-service"
                    className="text-gray-600 hover:text-blue-600 text-sm"
                  >
                    Customer Service
                  </Link>
                </li>
                <li>
                  <Link
                    to="/login"
                    className="text-gray-600 hover:text-blue-600 text-sm"
                  >
                    Customer Login
                  </Link>
                </li>
                <li>
                  <Link
                    to="/track"
                    className="text-gray-600 hover:text-blue-600 text-sm"
                  >
                    Track
                  </Link>
                </li>
                <li>
                  <Link
                    to="/delivery-puns"
                    className="text-gray-600 hover:text-blue-600 text-sm"
                  >
                    Delivery Puns
                  </Link>
                </li>
                <li>
                  <Link
                    to="/business-account"
                    className="text-gray-600 hover:text-blue-600 text-sm"
                  >
                    Request a Business Account
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="text-gray-600 hover:text-blue-600 text-sm"
                  >
                    Swift for Your Business
                  </Link>
                </li>
              </ul>
            </div>

            {/* Industry Sectors */}
            <div>
              <h3 className="text-lg font-semibold text-blue-600 mb-4">
                Industry Sectors
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/fashion"
                    className="text-gray-600 hover:text-blue-600 text-sm"
                  >
                    Fashion
                  </Link>
                </li>
                <li>
                  <Link
                    to="/food"
                    className="text-gray-600 hover:text-blue-600 text-sm"
                  >
                    Food
                  </Link>
                </li>
                <li>
                  <Link
                    to="/ecommerce"
                    className="text-gray-600 hover:text-blue-600 text-sm"
                  >
                    E-commerce & Retail
                  </Link>
                </li>
                <li>
                  <Link
                    to="/gifts"
                    className="text-gray-600 hover:text-blue-600 text-sm"
                  >
                    Gifts, Flowers & Subscription Boxes
                  </Link>
                </li>
                <li>
                  <Link
                    to="/furniture"
                    className="text-gray-600 hover:text-blue-600 text-sm"
                  >
                    Furniture & Home Improvement
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company Information */}
            <div>
              <h3 className="text-lg font-semibold text-blue-600 mb-4">
                Company Information
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/about"
                    className="text-gray-600 hover:text-blue-600 text-sm"
                  >
                    About Swift
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blog"
                    className="text-gray-600 hover:text-blue-600 text-sm"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    to="/careers"
                    className="text-gray-600 hover:text-blue-600 text-sm"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    to="/history"
                    className="text-gray-600 hover:text-blue-600 text-sm"
                  >
                    Swift History
                  </Link>
                </li>
                <li>
                  <Link
                    to="/partnerships"
                    className="text-gray-600 hover:text-blue-600 text-sm"
                  >
                    Brands and Partnerships
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact/Social */}
            <div>
              <h3 className="text-lg font-semibold text-blue-600 mb-4">
                Connect With Us
              </h3>
              <div className="flex space-x-4 mb-4">
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  <img src={Logo4} alt="Facebook" className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  <img src={Logo5} alt="Twitter" className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  <img src={Logo6} alt="Instagram" className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  <img src={Logo7} alt="LinkedIn" className="w-6 h-6" />
                </a>
              </div>
              <div className="mt-4">
                <img src={Logo8} alt="Certification" className="h-10" />
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-200 my-6"></div>

          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Logo */}
            <div className="mb-4 md:mb-0">
              <img src={Swift} alt="Swift Logo" className="h-10" />
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-4 md:mb-0">
              <Link
                to="/legal"
                className="text-gray-500 hover:text-blue-600 text-xs sm:text-sm"
              >
                Legal Notice
              </Link>
              <Link
                to="/terms"
                className="text-gray-500 hover:text-blue-600 text-xs sm:text-sm"
              >
                Terms of Use
              </Link>
              <Link
                to="/privacy"
                className="text-gray-500 hover:text-blue-600 text-xs sm:text-sm"
              >
                Privacy Notice
              </Link>
              <Link
                to="/dispute"
                className="text-gray-500 hover:text-blue-600 text-xs sm:text-sm"
              >
                Dispute Resolution
              </Link>
              <Link
                to="/info"
                className="text-gray-500 hover:text-blue-600 text-xs sm:text-sm"
              >
                Additional Information
              </Link>
            </div>

            {/* Copyright */}
            <div className="text-gray-400 text-xs sm:text-sm">
              &copy; {new Date().getFullYear()} Swift. All rights reserved.
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};
export default Footer;
