import Menubar from "../MenuBar";
import HeaderManageUser from "../settings/manageUser/HeaderManageUser";
import ManageUser from "../settings/manageUser/ManageUser";

const ManageUserPage = () => {
  return (
    <>
      <div className="flex-row">
        <Menubar />
        <main className="main-wrap">
          <HeaderManageUser />
          <ManageUser />
        </main>
      </div>
    </>
  );
};

export default ManageUserPage;
