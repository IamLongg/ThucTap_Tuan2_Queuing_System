import Menubar from "../MenuBar";
import HeaderNumber from "../number/HeaderNumber";
import NumberMain from "../number/NumberMain";

const NumberPage = () => {
  return (
    <>
      <div className="flex-row">
        <Menubar />
        <main className="main-wrap">
          <HeaderNumber />
          <NumberMain />
        </main>
      </div>
    </>
  );
};

export default NumberPage;
