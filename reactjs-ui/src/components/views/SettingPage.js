import Menubar from "../MenuBar";
import HeaderSetting from "../settings/HeaderSetting";
import SettingMain from "../settings/SettingMain";

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
