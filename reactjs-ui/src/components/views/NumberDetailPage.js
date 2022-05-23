import Menubar from "../MenuBar";
import HeaderNumberDetail from "../number/HeaderNumberDetail";
import NumberDetail from "../number/NumberDetail";
const NumberDetailPage = () => {
  return (
    <>
      <div className="flex-row">
        <Menubar />
        <main className="main-wrap">
          <HeaderNumberDetail />
          <NumberDetail />
        </main>
      </div>
    </>
  );
};

export default NumberDetailPage;
