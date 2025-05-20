import { adminDashboardData } from "../../data/data";
// xs, sm, md, lg, xl, 2xl
// 3xl... 9xl
const Dashboard = () => {
    return (
      <>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-col-2 md:grid-col-3 2xl:grid-cols-4 gap-4">
            <div className="rounded-md bg-gray-50 px-3 py-4">
              <h3 className="text-lg">Total Shipments</h3>
              <h1 className="text-3xl font-semibold mt-4">
                {adminDashboardData.adminDashboard.systemMetrics.totalShipments}
              </h1>
            </div>

            <div className="rounded-md bg-gray-50 px-3 py-4">
              <h3 className="text-lg">Active Shipments</h3>
              <h1 className="text-3xl font-semibold mt-4">
                {adminDashboardData.adminDashboard.systemMetrics.activeShipments}
              </h1>
            </div>

            <div className="rounded-md bg-gray-50 px-3 py-4">
              <h3 className="text-lg">Completed Shipments</h3>
              <h1 className="text-3xl font-semibold mt-4">
                {adminDashboardData.adminDashboard.systemMetrics.completedShipments}
              </h1>
            </div>

            <div className="rounded-md bg-gray-50 px-3 py-4">
              <h3 className="text-lg text-red-400">Cancelled Shipments</h3>
              <h1 className="text-3xl font-semibold mt-4">
                {adminDashboardData.adminDashboard.systemMetrics.canceledShipments}
              </h1>
            </div>
          </div>
        </div>
      </>
    );
}

export default Dashboard;