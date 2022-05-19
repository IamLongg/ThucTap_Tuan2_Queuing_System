import Menubar from "../MenuBar";
import AddService from "../service/AddService";
import HeaderAddService from "../service/HeaderAddService";
const AddServicePage = () => {
  return (
    <>
      <div className="flex-row">
        <Menubar />
        <main className="main-wrap">
          <HeaderAddService />
          <AddService />
        </main>
      </div>
    </>
  );
};

export default AddServicePage;
