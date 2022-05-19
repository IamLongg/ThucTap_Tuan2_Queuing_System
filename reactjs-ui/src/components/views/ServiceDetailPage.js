import Menubar from "../MenuBar";
import HeaderServiceDetail from "../service/HeaderServiceDetail";
import ServiceDetail from "../service/ServiceDetail";
const ServiceDetailPage = () => {
  return (
    <>
      <div className="flex-row">
        <Menubar />
        <main className="main-wrap">
          <HeaderServiceDetail />
          <ServiceDetail />
        </main>
      </div>
    </>
  );
};

export default ServiceDetailPage;
