// import DispatchBar from "../components/dispatchbar";
import Navbar from "../components/navbar";
import { useState } from "react";
import Image14 from "../../public/image/Sw6.png";
import { toast } from "react-toastify";

const Dispatch = () => {
  const [receiverName, setReceiverName] = useState("");
  const [deliveryDate, setDeliveryDate] = useState("");
  const [receiverAddress, setReceiverAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneNumber2, setPhoneNumber2] = useState("");
  const [content, setContent] = useState("");
  const [message, setMessage] = useState("");
  const [weight, setWeight] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const protocol = "https://";
    const domain = "electronic-gertrudis-chanel-debb-bad97784.koyeb.app";
    const endpoint = "/dispatches/";
    const url = `${protocol}${domain}${endpoint}`;

    const token = localStorage.getItem("access_token");
    if (!token) {
      toast.error("Not authenticated. Please log in.");
      setLoading(false);
      return;
    }

    const formData = {
      content: content,
      weight: Number(weight),
      note: message,
      delivery_date: deliveryDate,
      new_recipient: {
        full_name: receiverName,
        address: receiverAddress,
        phone_number_1: phoneNumber,
        phone_number_2: phoneNumber2,
      },
    };

    console.log("Submitting to:", url);
    console.log("Form Data:", formData);

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error("Error response:", errorText);
        toast.error("Failed to create dispatch.");
      } else {
        const responseData = await response.json();
        console.log("Dispatch created successfully:", responseData);
        toast.success("Dispatch created successfully!");

        // Clear form
        setReceiverName("");
        setDeliveryDate("");
        setReceiverAddress("");
        setPhoneNumber("");
        setContent("");
        setMessage("");
        setWeight(0);
      }
    } catch (error) {
      console.error("Error creating dispatch:", error.message);
      toast.error(
        error.message || "An error occurred while creating the dispatch."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="bg-gray-50 min-h-screen pb-8 pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-md">
              <div className="text-center mb-6">
                <h1 className="text-2xl font-semibold text-blue-600 mb-2">
                  Dispatch Form
                </h1>
                <p className="text-gray-600 text-sm">
                  Kindly provide all the information required in the form below
                </p>
              </div>

              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="space-y-1">
                  <label className="block text-sm font-medium text-gray-700">
                    RECEIVER'S NAME
                  </label>
                  <input
                    type="text"
                    value={receiverName}
                    placeholder="Enter receiver's name"
                    onChange={(e) => setReceiverName(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>

                <div className="space-y-1">
                  <label className="block text-sm font-medium text-gray-700">
                    DELIVERY DATE
                  </label>
                  <input
                    type="date"
                    value={deliveryDate}
                    onChange={(e) => setDeliveryDate(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>

                <div className="space-y-1">
                  <label className="block text-sm font-medium text-gray-700">
                    RECEIVER'S ADDRESS
                  </label>
                  <input
                    type="text"
                    value={receiverAddress}
                    placeholder="Enter receiver's address"
                    onChange={(e) => setReceiverAddress(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>

                <div className="space-y-1">
                  <label className="block text-sm font-medium text-gray-700">
                    PHONE NUMBER
                  </label>
                  <input
                    type="tel"
                    value={phoneNumber}
                    placeholder="Enter receiver's phone number"
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>

                <div className="space-y-1">
                  <label className="block text-sm font-medium text-gray-700">
                    PHONE NUMBER 2
                  </label>
                  <input
                    type="tel"
                    value={phoneNumber2}
                    placeholder="Enter receiver's phone number"
                    onChange={(e) => setPhoneNumber2(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>

                <div className="space-y-1">
                  <label className="block text-sm font-medium text-gray-700">
                    CONTENT
                  </label>
                  <input
                    type="text"
                    value={content}
                    placeholder="Enter package content"
                    onChange={(e) => setContent(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>

                <div className="space-y-1">
                  <label className="block text-sm font-medium text-gray-700">
                    WEIGHT
                  </label>
                  <input
                    type="number"
                    value={weight}
                    placeholder="Enter package weight"
                    onChange={(e) => setWeight(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>

                <div className="space-y-1">
                  <label className="block text-sm font-medium text-gray-700">
                    MESSAGE
                  </label>
                  <textarea
                    value={message}
                    placeholder="Do you have a message for the rider or receiver?"
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 min-h-[100px]"
                  />
                </div>

                <div className="flex items-center">
                  <input
                    id="terms-checkbox"
                    type="checkbox"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    required
                  />
                  <label
                    htmlFor="terms-checkbox"
                    className="ml-2 block text-sm text-gray-700"
                  >
                    I agree to the{" "}
                    <a href="#" className="text-blue-600 hover:underline">
                      Delivery Terms
                    </a>{" "}
                    and{" "}
                    <a href="#" className="text-blue-600 hover:underline">
                      Privacy Policy
                    </a>
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition duration-150 ease-in-out"
                >
                  {loading ? "Submitting..." : "Submit"}
                </button>
              </form>
            </div>

            <div className="hidden lg:block">
              <div className="h-full flex items-center justify-center p-4">
                <img
                  src={Image14}
                  alt="Delivery illustration"
                  className="w-full h-auto max-h-[600px] object-cover rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>

          <div className="text-center text-gray-500 text-sm mt-12">
            &copy; {new Date().getFullYear()} Swift Logistics. All rights
            reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dispatch;
