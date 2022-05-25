import Menubar from "../MenuBar";
import HeaderHistoryUser from "../settings/historyUser/HeaderHistoryUser";
import HistoryUser from "../settings/historyUser/HistoryUser";

const HistoryUserPage = () => {
  return (
    <>
      <div className="flex-row">
        <Menubar />
        <main className="main-wrap">
          <HeaderHistoryUser />
          <HistoryUser />
        </main>
      </div>
    </>
  );
};

export default HistoryUserPage;
