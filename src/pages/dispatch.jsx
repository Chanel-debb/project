import DispatchBar from "../components/dispatchbar"
import Image14 from "../../public/image/Sw6.png"
const Dispatch =()=>{
    return (
      <div>
        <DispatchBar />
        <div className="bg-gray-50 min-h-screen py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Form Section */}
              <div className="bg-white p-6 sm:p-8 rounded-xl shadow-md">
                <div className="text-center mb-6">
                  <h1 className="text-2xl font-semibold text-blue-600 mb-2">
                    Dispatch Form
                  </h1>
                  <p className="text-gray-600 text-sm">
                    Kindly provide all the information required in the form
                    below
                  </p>
                </div>

                <form className="space-y-4">
                  {/* Form Fields */}
                  <div className="space-y-1">
                    <label className="block text-sm font-medium text-gray-700">
                      SENDER'S NAME
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="block text-sm font-medium text-gray-700">
                      RECEIVER'S NAME
                    </label>
                    <input
                      type="text"
                      placeholder="Enter receiver's name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="block text-sm font-medium text-gray-700">
                      DELIVERY DATE
                    </label>
                    <input
                      type="date"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="block text-sm font-medium text-gray-700">
                      RECEIVER'S ADDRESS
                    </label>
                    <input
                      type="text"
                      placeholder="Enter receiver's address"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="block text-sm font-medium text-gray-700">
                      PHONE NUMBER
                    </label>
                    <input
                      type="tel"
                      placeholder="Enter receiver's phone number"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="block text-sm font-medium text-gray-700">
                      CONTENT
                    </label>
                    <input
                      type="text"
                      placeholder="Enter package content"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="block text-sm font-medium text-gray-700">
                      MESSAGE
                    </label>
                    <textarea
                      placeholder="Do you have a message for the rider or receiver?"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 min-h-[100px]"
                    />
                  </div>

                  <div className="flex items-center">
                    <input
                      id="terms-checkbox"
                      type="checkbox"
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label
                      htmlFor="terms-checkbox"
                      className="ml-2 block text-sm text-gray-700"
                    >
                      I have read and agreed to the{" "}
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
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition duration-150 ease-in-out"
                  >
                    Submit
                  </button>
                </form>
              </div>

              {/* Image Section */}
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

            {/* Footer */}
            <div className="text-center text-gray-500 text-sm mt-12">
              Copyright &copy; {new Date().getFullYear()} Swift Logistics. All
              rights reserved.
            </div>
          </div>
        </div>
      </div>
    );
}
export default Dispatch;