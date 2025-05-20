import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
const Track = () => {
  return (
    <div className="relative">
      <Navbar />

      {/* Secondary Navigation */}
      <div className="bg-white py-3 sticky top-11 w-full z-10 shadow-sm">
        <div className="max-w-7xl 2xl:max-w-[96rem] px-4 sm:px-6 lg:px-8 mx-auto overflow-x-auto">
          <div className="flex space-x-4 md:space-x-6 lg:space-x-8 min-w-max">
            <Link
              to="/track"
              className="text-blue-900 hover:text-blue-600 text-sm font-semibold whitespace-nowrap"
            >
              Track
            </Link>
            <Link
              to="/dispatch"
              className="text-blue-900 hover:text-blue-600 text-sm font-semibold whitespace-nowrap"
            >
              Dispatch
            </Link>
            <Link
              to="/brandPartnership"
              className="text-blue-900 hover:text-blue-600 text-sm font-semibold whitespace-nowrap"
            >
              Brand Partnership
            </Link>
            <Link
              to="/customerService"
              className="text-blue-900 hover:text-blue-600 text-sm font-semibold whitespace-nowrap"
            >
              Customer Service
            </Link>
            <Link
              to="/DL"
              className="text-blue-900 hover:text-blue-600 text-sm font-semibold whitespace-nowrap"
            >
              Delivery Locations
            </Link>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-blue-100 py-10 md:py-15 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-semibold text-blue-900">
            Track & Trace
          </h1>
        </div>
      </section>

      {/* Tracking Form Section */}
      <section className="py-8 mb-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-end">
            <div className="flex-1 w-full">
              <label
                htmlFor="tracking-number"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Enter your tracking number(s)
              </label>
              <input
                type="text"
                id="tracking-number"
                className="w-full py-3 px-4 border border-blue-300 rounded-md text-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="e.g. SW123456789"
              />
            </div>
            <button className="w-full sm:w-auto py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition duration-150">
              Track Package
            </button>
          </div>

          {/* Tracking Results */}
          <div className="mt-8 border border-blue-200 rounded-lg shadow-sm p-4 md:p-6 bg-white">
            <h2 className="text-lg font-medium text-gray-900 mb-4">
              Tracking Information
            </h2>
            <div className="text-center py-10 text-gray-500">
              Enter a tracking number to view shipment details
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-blue-900 text-white py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-light mb-6">
            Frequently Asked Questions
          </h2>
          <div className="w-16 h-1 bg-white mb-8"></div>

          <div className="space-y-4">
            {[
              "What is Tracking number & where can I find it?",
              "Why is my tracking number not showing my information?",
              "When will my tracking information appear?",
              "If I don't have my tracking number, is it possible to track my delivery?",
              "Do you offer inter states Delivery?",
            ].map((question, index) => (
              <div key={index} className="border-b border-blue-700 pb-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg">{question}</h3>
                  <button className="text-white hover:text-blue-200">
                    <svg
                      className="w-5 h-5"
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
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
export default Track;
