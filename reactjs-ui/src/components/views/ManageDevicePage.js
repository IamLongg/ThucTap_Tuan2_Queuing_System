import Menubar from "../MenuBar";
import ManageDevice from "../device/ManageDevice";
import HeaderManageDevice from "../device/HeaderManageDevice";
const ManageDevicePage = () => {
  return (
    <>
      <div className="flex-row">
        <Menubar />
        <main className="main-wrap">
          <HeaderManageDevice />
          <ManageDevice />
        </main>
      </div>
    </>
  );
};

export default ManageDevicePage;
