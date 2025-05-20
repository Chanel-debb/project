import Navbar from "../components/navbar";
import ShipmentTable from "../components/shipmenttable";
import Footer from "../components/footer";

const ShipmentHistory = () => {
    return (
      <>
        <Navbar />
        <div className="max-w-7xl mx-auto pt-16 pb-16">
          <h1 className="text-lg 2xl:text-2xl font-medium mb-3 px-2">Shipment history</h1>

          <ShipmentTable />
        </div>

        <Footer />
      </>
    );
}

export default ShipmentHistory;