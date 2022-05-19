import iconblue from "../../assets/images/iconblue.png";
import icongreen from "../../assets/images/icongreen.png";
import iconorange from "../../assets/images/iconorange.png";
import iconred from "../../assets/images/iconred.png";
import iconup from "../../assets/images/iconup.png";
import icondown from "../../assets/images/icondown.png";
import DashboardDay from "./DashboarDay";
const DashboardMain = () => {
  return (
    <>
      <section className="dashboardmain" id="dashboardmain">
        <div className="dashboardmain-container">
          <h2 className="title">Biểu đồ cấp số</h2>
          <div className="dashboardmain-container-box">
            <div className="content">
              <img src={iconblue} alt="" className="imgicon" />
              <p className="heading">
                Số thứ tự <br></br> đã cấp
              </p>
            </div>
            <div className="info">
              <h4>4.221</h4>
              <p>
                <img src={iconup} alt="" className="iconup" />
                <span>32.41%</span>
              </p>
            </div>
          </div>
          <div className="dashboardmain-container-box">
            <div className="content">
              <img src={icongreen} alt="" className="imgicon" />
              <p className="heading">
                Số thứ tự <br></br> đã sử dụng
              </p>
            </div>
            <div className="info">
              <h4>3.721</h4>
              <p>
                <img src={icondown} alt="" className="icondown" />
                <span>32.41%</span>
              </p>
            </div>
          </div>
          <div className="dashboardmain-container-box">
            <div className="content">
              <img src={iconorange} alt="" className="imgicon" />
              <p className="heading">
                Số thứ tự <br></br> đang chờ
              </p>
            </div>
            <div className="info">
              <h4>468</h4>
              <p>
                <img src={iconup} alt="" className="iconup" />
                <span>56.41%</span>
              </p>
            </div>
          </div>
          <div className="dashboardmain-container-box">
            <div className="content">
              <img src={iconred} alt="" className="imgicon" />
              <p className="heading">
                Số thứ tự <br></br> đã bỏ qua
              </p>
            </div>
            <div className="info">
              <h4>32</h4>
              <p>
                <img src={icondown} alt="" className="icondown" />
                <span>22.41%</span>
              </p>
            </div>
          </div>
          <DashboardDay />
        </div>
      </section>
    </>
  );
};

export default DashboardMain;
