import Menubar from "../MenuBar";
import DashboardMain from "../dashboard/DashboardMain";
import HeaderDashboard from "../dashboard/HeaderDashboard";
import OverView from "../Overview";
const DashboardPage = () => {
  return (
    <>
      <div className="flex-row">
        <Menubar />
        <main className="main-wrap">
          <HeaderDashboard />
          <div className="main-wrap-small">
            <DashboardMain />
            <OverView />
          </div>
        </main>
      </div>
    </>
  );
};

export default DashboardPage;
