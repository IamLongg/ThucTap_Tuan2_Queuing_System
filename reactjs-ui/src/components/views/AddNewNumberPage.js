import Menubar from "../MenuBar";
import HeaderAddNumber from "../number/HeaderAddNumber";
import AddNewNumber from "../number/AddNewNumber";
const AddNewNumberPage = () => {
  return (
    <>
      <div className="flex-row">
        <Menubar />
        <main className="main-wrap">
          <HeaderAddNumber />
          <AddNewNumber />
        </main>
      </div>
    </>
  );
};

export default AddNewNumberPage;
