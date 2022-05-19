import imgnotify from "../../assets/images/iconnotify.png";
import imguser from "../../assets/images/iconuser.png";

const HeaderDashboard = () => {
  return (
    <>
      <section className="headerdashboard" id="headerdashboard ">
        <div className="headerdashboard-main ">
          <h2>Dashboard</h2>
        </div>
        <div className="headerdashboard-content ">
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

export default HeaderDashboard;
