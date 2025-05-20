import Navbar from "./components/navbar.jsx";
import Image2 from "../public/image/Page name/1.png";
import Image3 from "../public/image/Page name/2.png";
import Image4 from "../public/image/Page name/3.png";
import Image5 from "../public/image/Page name/4.png";
import Image6 from "../public/image/Page name/5.png";
import Image7 from "../public/image/Page name/7.png";
// import Image14 from "../public/image/Sw7.jpg";
import Footer from "./components/footer.jsx";
import Logo from "../public/image/logo/logo9.png";

const App = () => {
  return (
    <>
      <Navbar />
      <section className="relative w-full h-[70vh] bg-gradient-to-r from-blue-600 to-blue-400 overflow-hidden">
        <div className="absolute inset-0 bg-[url('./assets/Sw7.jpg')] bg-cover bg-center opacity-50"></div>
        <div className="relative flex items-center justify-center w-full h-full px-4">
          <div className="w-full max-w-md bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-4">
              Track Your Delivery
            </h1>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                placeholder="Enter your tracking number"
                className="flex-grow py-3 px-4 border border-gray-300 bg-white text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300 ease-in-out">
                Track
              </button>
            </div>
          </div>
        </div>
      </section>

<section className="py-12 md:py-16 bg-white">
  <div className="container mx-auto px-4">
    <div className="flex justify-center mb-8">
      <img src={Logo} alt="Swift Logo" className="w-40 md:w-48" />
    </div>
    
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-10">
      <div className="overflow-hidden rounded-lg shadow-md aspect-square">
        <img src={Image2} alt="Delivery service" className="w-full h-full object-cover hover:scale-105 transition duration-500" />
      </div>
      <div className="overflow-hidden rounded-lg shadow-md aspect-square">
        <img src={Image3} alt="Delivery service" className="w-full h-full object-cover hover:scale-105 transition duration-500" />
      </div>
      <div className="overflow-hidden rounded-lg shadow-md aspect-square">
        <img src={Image4} alt="Delivery service" className="w-full h-full object-cover hover:scale-105 transition duration-500" />
      </div>
      <div className="overflow-hidden rounded-lg shadow-md aspect-square">
        <img src={Image5} alt="Delivery service" className="w-full h-full object-cover hover:scale-105 transition duration-500" />
      </div>
      <div className="overflow-hidden rounded-lg shadow-md aspect-square">
        <img src={Image6} alt="Delivery service" className="w-full h-full object-cover hover:scale-105 transition duration-500" />
      </div>
    </div>
    
    <div className="flex justify-center">
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-10 rounded-lg transition duration-300 shadow-md">
        Swift
      </button>
    </div>
  </div>
</section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="order-2 lg:order-1">
              <div className="overflow-hidden rounded-xl">
                <img
                  src={Image7}
                  alt="Delivery animation"
                  className="w-full hover:scale-105 transition duration-500"
                />
              </div>
            </div>

            <div className="order-1 lg:order-2 flex flex-col items-center text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-gray-800">
                "Handled with Care, Delivered with Speed."
              </h2>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition duration-300 shadow-md">
                Track Package
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-blue-500 to-blue-600 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition duration-300">
              <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Express Delivery</h3>
              <p className="text-white/80">
                Get your packages delivered in record time with our premium
                express service.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition duration-300">
              <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure Handling</h3>
              <p className="text-white/80">
                Your items are protected with our state-of-the-art security and
                careful handling.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition duration-300">
              <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Global Shipping</h3>
              <p className="text-white/80">
                Ship to over 200 countries with our reliable worldwide delivery
                network.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
export default App;
