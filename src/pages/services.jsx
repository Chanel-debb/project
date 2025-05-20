import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
import Image15 from "../../public/image/Sw7.jpg";
import Image11 from "../../public/image/Sw4.jpg";
import Image10 from "../../public/image/Sw3.jpeg";
import Image8 from "../../public/image/Sw1.png";
import Image14 from "../../public/image/Sw6.png";
import Image7 from "../../public/image/Page name/7.png";
import Image16 from "../../public/image/swift.png";
import Footer from "../components/footer";
const Services = () => {
  return (
    <div className="relative">
      <Navbar />

      <section className="max-w-7xl mx-auto pt-22">
        <h1 className="text-2xl font-semibold mb-10 text-gray-700">
          Our Services
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-3">
          <div>
            <img
              src={Image15}
              alt="image"
              className="w-full h-80 object-cover"
            />
            <h1 className="text-3xl font-extralight mt-3 mb-1">
              Transportation Services
            </h1>
            <p className="text-md mt-3">
              We offer reliable and flexible transportation solutions for
              domestic and international shipping, including: <br />
              Road Freight: Full truckload (FTL), less-than-truckload (LTL), and
              last-mile delivery. <br />
              Air Freight: Fast, priority delivery for urgent and high-value
              shipments. <br />
              Rail Freight: Efficient land-based transport for bulk goods and
              long-distance hauls.
            </p>
          </div>
          <div>
            <img
              src={Image11}
              alt="image"
              className="w-full h-80 object-cover"
            />
            <h1 className="text-3xl font-extralight mt-3 mb-1">
              Warehouse & Storage
            </h1>
            <p className="text-md mt-3">
              Our warehousing services ensure your products are stored securely
              and strategically for quick distribution: <br />
              Short-term and long-term storage <br />
              Inventory management systems <br />
              Temperature-controlled and specialized storage <br />
              Order fulfillment and packaging <br />
            </p>
          </div>

          <div>
            <img
              src={Image8}
              alt="image"
              className="w-full h-80 object-cover"
            />
            <h1 className="text-3xl font-extralight mt-3 mb-1">
              Supply Chain Managment
            </h1>
            <p className="text-md mt-3 ml-3">
              We help businesses design, manage, and optimize their entire
              supply chain: <br />
              End-to-end logistics planning <br />
              Vendor and supplier coordination <br />
              Performance monitoring and reporting <br />
              Demand forecasting
            </p>
          </div>
          <div>
            <img
              src={Image7}
              alt="image"
              className="w-full h-80 object-cover"
            />
            <h1 className="text-3xl font-extralight mt-3 mb-1">
              Tracking & Visibility
            </h1>
            <p className="text-md mt-3">
              With advanced technology, clients gain full transparency over
              their shipments: <br />
              GPS-enabled tracking <br />
              Delivery status notifications <br />
              Route optimization tools <br />
              Data analytics and reporting
            </p>
          </div>
          <div>
            <img
              src={Image14}
              alt="image"
              className="w-full h-80 object-cover"
            />
            <h1 className="text-3xl font-extralight mt-3 mb-1">
              Value-Added Services
            </h1>
            <p className="text-md mt-3">
              We go beyond standard logistics to provide: <br />
              Reverse logistics (returns & recalls) <br />
              Labeling and kitting <br />
              Custom packaging
            </p>
          </div>
        </div>
      </section>

      <section className=" bg-blue-900 mt-6 py-16">
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="text-center md:text-right">
              <div className="inline">
                <img src={Image16} alt="image" className="w-50 py-6 inline-block" />
              </div>
            </div>
            <div className="px-4 mt-5">
              <h1 className="text-3xl mt-3 text-white font-extralight">
                Why Choose Swift?
              </h1>
              <p className="text-md text-white mt-5 mb-3">
                With a strong network, experienced team, and technology-driven
                approach, we provide scalable logistics solutions tailored to
                your needs—whether you're a small business or a global
                enterprise.
              </p>
              <Link
                to="/about"
                className="bg-white font-semibold hover:bg-blue-900 duration-150 text-black hover:text-white py-2 px-6 rounded-xl text-sm sm:text-base border border-gray-200 mb-2 mt-2  "
              >
                Explore
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};
export default Services;
