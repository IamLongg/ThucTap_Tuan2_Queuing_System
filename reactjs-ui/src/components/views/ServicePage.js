import Menubar from "../MenuBar";
import HeaderService from "../service/HeaderService";
import ServiceMain from "../service/ServiceMain";

const ServicePage = () => {
  return (
    <>
      <div className="flex-row">
        <Menubar />
        <main className="main-wrap">
          <HeaderService />
          <ServiceMain />
        </main>
      </div>
    </>
  );
};

export default ServicePage;
