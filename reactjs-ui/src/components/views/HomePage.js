import Menubar from "../MenuBar";
import Header from "../home/Header";
import Main from "../home/Main";

const HomePage = () => {
  return (
    <>
      <div className="flex-row">
        <Menubar />
        <main className="main-wrap">
          <Header />
          <Main />
        </main>
      </div>
    </>
  );
};

export default HomePage;
