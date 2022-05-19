import Menubar from "../MenuBar";
import DeviceMain from "../device/DeviceMain";
import HeaderDevice from "../device/HeaderDevice";

const DevicePage = () => {
  return (
    <>
      <div className="flex-row">
        <Menubar />
        <main className="main-wrap">
          <HeaderDevice />
          <DeviceMain />
        </main>
      </div>
    </>
  );
};

export default DevicePage;
