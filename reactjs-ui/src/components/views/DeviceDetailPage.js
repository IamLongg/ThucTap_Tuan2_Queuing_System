import Menubar from "../MenuBar";
import HeaderDeviceDetail from "../device/HeaderDeviceDetail";
import DeviceDetail from "../device/DeviceDetail";
const DeviceDetailPage = () => {
  return (
    <>
      <div className="flex-row">
        <Menubar />
        <main className="main-wrap">
          <HeaderDeviceDetail />
          <DeviceDetail />
        </main>
      </div>
    </>
  );
};

export default DeviceDetailPage;
