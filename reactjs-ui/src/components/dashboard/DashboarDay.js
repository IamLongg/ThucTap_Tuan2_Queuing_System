import icondropdown from "../../assets/images/icondropdown.png";
import imgchart from "../../assets/images/imgchart.png";
import iconselect from "../../assets/images/iconselect.png";
const DashboardDay = () => {
  return (
    <>
      <section className="dashboardDay">
        <div className="dashboardDay-container">
          <div className="dashboardDay-container-header">
            <div className="header-title">
              <h2>Bảng thống kê theo ngày</h2>
              <p>Tháng 11/2021</p>
            </div>
            <div className="header-followday">
              <span>Xem theo</span>
              <div className="dropdown">
                <div className="dropdown-select">
                  <span className="select">Ngày</span>
                  <img src={icondropdown} alt="" />
                </div>
                <div className="dropdown-list">
                  <div className="dropdown-list__item">Ngày</div>
                  <div className="dropdown-list__item">Tuần</div>
                  <div className="dropdown-list__item">Tháng</div>
                </div>
              </div>
            </div>
          </div>

          <div className="dashboardDay-container-content">
            <div className="dashboardDay-container-content-box">
              <p>6000</p>
            </div>
            <div className="dashboardDay-container-content-box">
              <p>5000</p>
            </div>
            <div className="dashboardDay-container-content-box">
              <p>4000</p>
            </div>
            <div className="dashboardDay-container-content-box">
              <p>3000</p>
            </div>
            <div className="dashboardDay-container-content-box">
              <p>2000</p>
            </div>
            <div className="dashboardDay-container-content-box">
              <p>1000</p>
            </div>
            <div className="dashboardDay-container-content-box">
              <p>0</p>
            </div>
            <img src={imgchart} alt="" className="imgchart" />
            <div className="info">
              <button>4.221</button>
              <img src={iconselect} alt="" className="iconselect" />
            </div>
            <div className="dashboardDay-container-content-subbox">
              <p className="col1">01</p>
              <p className="col2">13</p>
              <p className="col3">19</p>
              <p className="col4">31</p>
            </div>
            <div className="param">
              <span>sl</span>
              <h5>/</h5>
              <h6>ngày</h6>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DashboardDay;
