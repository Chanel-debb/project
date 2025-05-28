import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { useState } from "react";
const Track = () => {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [trackingInfo, setTrackingInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleTrack = async () => {
    if (!trackingNumber) {
      setError("Please enter a tracking number.");
      return;
    }
    setLoading(true);
    setError(null);

    try {
      const protocol = "https://";
      const baseUrl = "electronic-gertrudis-chanel-debb-bad97784.koyeb.app";
      const url = `${protocol}${baseUrl}/dispatches/${trackingNumber}`;

      const token = localStorage.getItem("access_token");
      if (!token) {
        setError("Not authenticated. Please log in.");
        setLoading(false);
        return;
      }

      console.log(url)

      const response = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        switch (response.status) {
          case 400:
            setError("Bad request. Please check the tracking number.");
            break;
          case 401:
            setError("Unauthorized. Please log in again.");
            break;
          case 403:
            setError(
              "Forbidden. You don’t have permission to view this tracking info."
            );
            break;
          case 404:
            setError("Tracking number not found.");
            break;
          case 500:
            setError("Server error. Please try again later.");
            break;
          default:
            setError(`Unexpected error: ${response.statusText}`);
            break;
        }
        setLoading(false);
        return;
      }

      const data = await response.json();
      console.log("Tracking data:", data);
      setTrackingInfo(data);
    } catch (err) {
      console.error(err);
      setError("Network error. Please check your internet connection.");
    } finally {
      setLoading(false);
    }
  };
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
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
              />
            </div>
            <button
              onClick={handleTrack}
              className="w-full sm:w-auto py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition duration-150"
            >
              Track Package
            </button>
          </div>

          {/* Tracking Results */}
          <div className="mt-8 border border-blue-200 rounded-lg shadow-sm p-4 md:p-6 bg-white">
            <h2 className="text-lg font-medium text-gray-900 mb-4">
              Tracking Information
            </h2>
            {trackingInfo ? (
              <div className="space-y-3">
                {/* 
                
                {
    "created_at": "2025-05-27T10:59:54.237867+00:00",
    "delievery_date": "2025-05-21",
    "updated_at": "2025-05-27T10:59:54.237886+00:00",
    "sender_id": "65ce9ae8-6239-4be8-a319-7d8dd5a1d867",
    "content": "string",
    "note": "string",
    "status": "PENDING",
    "weight": 0,
    "recipient_id": "8ee605e7-c82e-4cea-ab20-1b8637dc8e48",
    "id": "96f1c688-1ca6-4841-b283-f1cc43074ff7",
    "code": "ship_8592485378"
}
                
                */}
                <div>
                  <p className="text-sm text-gray-500">Tracking Code</p>
                  <p className="text-base font-semibold text-gray-700 uppercase">
                    {trackingInfo.code}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Status</p>
                  <p className="text-base font-semibold text-yellow-600">
                    {trackingInfo.status}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Contents</p>
                  <p className="text-base text-gray-700 capitalize">
                    {trackingInfo.content || "No content specified"}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Weight</p>
                  <p className="text-base text-gray-700">{trackingInfo.weight}lbs</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Delivery Date</p>
                  <p className="text-base text-gray-700">
                    {new Date(trackingInfo.delievery_date).toLocaleDateString(
                      "en-US",
                      {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      }
                    )}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Note</p>
                  <p className="text-base text-gray-700 capitalize">{trackingInfo.note}</p>
                </div>
              </div>
            ) : (
              <div className="text-center py-10 text-gray-500">
                Enter a tracking number to view shipment details
              </div>
            )}
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
