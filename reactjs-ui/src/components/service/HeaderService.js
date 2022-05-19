import imgnotify from "../../assets/images/iconnotify.png";
import imguser from "../../assets/images/iconuser.png";
import { RightOutlined } from "@ant-design/icons";
const HeaderService = () => {
  return (
    <>
      <section className="headerdashboard" id="headerdashboard">
        <div className="headerdashboard-main">
          <h2 style={{ color: "#7e7d88" }}>
            Dịch vụ
            <RightOutlined
              style={{
                color: "#d4d4d7",
                fontSize: "1.4rem",
                padding: "0 1rem",
              }}
            />
            <span style={{ color: "#ff9138" }}>Danh sách dịch vụ</span>
          </h2>
        </div>
        <div className="headerdashboard-content">
          <img src={imgnotify} alt="" className="imgnotify" />
          <div className="headerdashboard-content-box">
            <img src={imguser} alt="" className="imguser" />
            <div className="infomation">
              <h3 className="sub-label">Xin chào</h3>
              <h4 className="label">lê quỳnh ái vân</h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeaderService;
