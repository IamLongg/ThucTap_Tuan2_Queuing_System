import Menubar from "../MenuBar";
import HeaderSetting from "../settings/manageRole/HeaderSetting";
import SettingMain from "../settings/manageRole/SettingMain";

const SettingPage = () => {
  return (
    <>
      <div className="flex-row">
        <Menubar />
        <main className="main-wrap">
          <HeaderSetting />
          <SettingMain />
        </main>
      </div>
    </>
  );
};

export default SettingPage;
