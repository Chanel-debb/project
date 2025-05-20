import { Link } from "react-router-dom";
import Footer from "../components/footer";
import Image8 from "../../public/image/Sw1.png";
import Image9 from "../../public/image/Sw2.png";
import Image10 from "../../public/image/Sw3.jpeg";
import Image11 from "../../public/image/Sw4.jpg";
import Image12 from "../../public/image/Sw5.png";
import Image13 from "../../public/image/logo/logo9.png";
import Navbar from "../components/navbar";
import { useState } from "react";

const About = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="relative">
      <Navbar />
      <div className="bg-white sticky top-0 w-full z-20 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between py-3">
            {/* Page Title */}
            <h1 className="text-blue-600 text-xl md:text-2xl font-semibold mb-3 md:mb-0">
              ABOUT US
            </h1>

            {/* Navigation Links - Desktop */}
            <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
              <Link
                to="/SD"
                className="text-blue-400 hover:text-blue-600 transition-colors text-sm font-semibold px-3 py-1 rounded-md hover:bg-blue-50"
              >
                Strategic Durability
              </Link>
              <Link
                to="/brandPartnership"
                className="text-blue-400 hover:text-blue-600 transition-colors text-sm font-semibold px-3 py-1 rounded-md hover:bg-blue-50"
              >
                Brand Partnership
              </Link>
              <div className="relative group">
                <Link
                  to="/stories"
                  className="text-blue-400 hover:text-blue-600 transition-colors text-sm font-semibold px-3 py-1 rounded-md hover:bg-blue-50 flex items-center"
                >
                  Stories
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </Link>
                {/* Dropdown would go here */}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-blue-400 focus:outline-none"
              onClick={toggleMobileMenu}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Mobile Navigation - Hidden by default */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-white py-2 px-4 space-y-2 border-t border-gray-100">
              <Link
                to="/SD"
                className="block text-blue-400 hover:text-blue-600 py-2 px-3 rounded-md hover:bg-blue-50"
              >
                Strategic Durability
              </Link>
              <Link
                to="/brandPartnership"
                className="block text-blue-400 hover:text-blue-600 py-2 px-3 rounded-md hover:bg-blue-50"
              >
                Brand Partnership
              </Link>
              <Link
                to="/stories"
                className="block text-blue-400 hover:text-blue-600 py-2 px-3 rounded-md hover:bg-blue-50"
              >
                Stories
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto">
        {/* About Us Section */}
        <div className="px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <h1 className="text-3xl sm:text-4xl font-semibold text-blue-600 mb-3">
            About Us
          </h1>
          <p className="text-xl sm:text-2xl mb-3">Swift Logistics</p>
          <div className="w-10 h-px bg-black py-0.5 my-4"></div>
          <div className="mt-5 text-sm sm:text-md lg:pr-10 xl:pr-40 space-y-4">
            <p>
              At Swift, we are more than just a logistics provider, we are your
              trusted partner in delivering reliability, efficiency, and
              innovation. Founded on a commitment to excellence, our company
              specializes in end-to-end logistics solutions that keep businesses
              moving forward. With a robust network, state-of-the-art
              technology, and a dedicated team of logistics experts.
            </p>
            <p>
              We offer comprehensive services including freight forwarding,
              last-mile delivery, warehousing, supply chain management, and
              custom transportation strategies. Whether you're a small business
              or a inter-state enterprise, we adapt to your needs with speed and
              precision. Our mission is simple: to deliver your goods safely, on
              time, and with full transparency.
            </p>
            <p>
              We believe that every shipment is more than just a package—it's a
              promise to your customers. Join the companies that trust Swift to
              deliver with confidence. Let's move your business forward,
              together.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="flex flex-col sm:flex-row px-4 sm:px-6 lg:px-8 py-5 gap-4">
          <div className="border border-blue-200 py-5 px-6 sm:px-10 shadow-md rounded w-full">
            <h1 className="text-xl sm:text-2xl mb-2">200,000</h1>
            <p className="text-xs sm:text-sm">people working at Swift</p>
          </div>

          <div className="border border-blue-200 py-5 px-6 sm:px-10 shadow-md rounded w-full">
            <h1 className="text-xl sm:text-2xl mb-2">Over 25</h1>
            <p className="text-xs sm:text-sm">states covered</p>
          </div>

          <div className="border border-blue-200 py-5 px-6 sm:px-10 shadow-md rounded w-full">
            <h1 className="text-xl sm:text-2xl mb-2">1,000</h1>
            <p className="text-xs sm:text-sm">
              partnering companies Nationwide
            </p>
          </div>
        </div>

        {/* Image Gallery Section */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {[Image8, Image9, Image10, Image11, Image12].map((image, index) => (
              <div
                key={index}
                className="aspect-w-16 aspect-h-9 overflow-hidden rounded shadow-sm"
              >
                <img
                  src={image}
                  alt={`Swift Logistics image ${index + 1}`}
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Strategy Section */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col sm:flex-row items-center sm:items-start">
              <div className="mb-4 sm:mb-0">
                <img src={Image13} alt="logo" className="w-32 sm:w-40 h-auto" />
              </div>
              <div className="text-center sm:text-left sm:ml-5 sm:mt-6">
                <h3 className="text-lg sm:text-xl font-semibold text-blue-900">
                  Strategy 2030
                </h3>
                <h3 className="text-2xl sm:text-3xl font-semibold">
                  Operational longevity
                </h3>
              </div>
            </div>
            <div className="mt-6 md:mt-0">
              <div className="bg-blue-200 py-6 px-5 h-full rounded-sm">
                <h3 className="text-2xl sm:text-3xl font-semibold">
                  Strategy 2030
                </h3>
                <div className="w-10 h-px bg-black py-0.5 my-4"></div>
                <p className="mt-5">
                  With "Strategy 2030-Operational longevity" the company aims to
                  unlock its full growth potential through divisional and Group
                  growth initiatives.
                </p>
                <div className="flex justify-center sm:justify-start mt-6">
                  <button className="py-2 sm:py-3 px-4 sm:px-6 bg-blue-400 text-white rounded-lg hover:bg-blue-900">
                    Explore
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Three Column Section */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="text-center sm:text-left">
              <div className="h-54 bg-gray-100 flex items-center justify-center mb-4 rounded">
                <img src={Image10} className="h-full w-full object-cover" />
              </div>
              <h4 className="text-xl font-semibold mb-2">
                Strategic durability
              </h4>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam,
                quia dicta. Sed.
              </p>
            </div>
            <div className="text-center sm:text-left">
              <div className="h-54 bg-gray-100 flex items-center justify-center mb-4 rounded">
                <img src={Image9} className="h-full w-full object-cover" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Brand Partnership</h4>
              <p>
                Swift specialises in logistics, and partners with over 5,000
                business Nationwide
              </p>
            </div>
            <div className="text-center sm:text-left">
              <div className="h-54 bg-gray-100 flex items-center justify-center mb-4 rounded">
                <img src={Image8} className="h-full w-full object-cover" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Careers</h4>
              <p>
                A team-driven organization. Our people come first. We believe
                that by supporting, empowering, and valuing our team, we create
                a workplace where everyone thrives — and where great work
                follows naturally.
              </p>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default About;
