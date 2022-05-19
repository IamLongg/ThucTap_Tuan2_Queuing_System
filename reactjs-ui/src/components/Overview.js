import percen90 from "../assets/images/percen90.png";
import percen76 from "../assets/images/percen76.png";
import percen86 from "../assets/images/percen86.png";
import iconsmalldevice from "../assets/images/iconsmalldevice.png";
import iconsmallservice from "../assets/images/iconsmallservice.png";
import iconsmallnumber from "../assets/images/iconsmallnumber.png";
import DatePicker from "sassy-datepicker";
const OverView = () => {
  const onChange = (date) => {
    console.log(date.toString());
  };
  return (
    <>
      <section className="overview" id="overview">
        <div className="overview-container">
          <h2 className="title">Tổng quan</h2>
          <div className="overview-container-main">
            <div className="overview-container-main-box">
              <div className="image">
                <img src={percen90} alt="" className="imgpercent" />
              </div>
              <div className="parameter">
                <h3>4.221</h3>
                <div>
                  <img src={iconsmalldevice} alt="" className="icondevice" />
                  <span className="sub-param">Thiết bị</span>
                </div>
              </div>
            </div>
            <div className="overview-container-main-box column">
              <li className="yello">
                <p>Đang hoạt động</p> <span>3.799</span>
              </li>
              <li className="gray">
                <p>Ngưng hoạt động</p> <span>422</span>
              </li>
            </div>
          </div>
          <div className="overview-container-main">
            <div className="overview-container-main-box">
              <div className="image">
                <img src={percen76} alt="" className="imgpercent" />
              </div>
              <div className="parameter">
                <h3>276</h3>
                <div>
                  <img src={iconsmallservice} alt="" className="icondevice" />
                  <span className="sub-param blue">Dịch vụ</span>
                </div>
              </div>
            </div>
            <div className="overview-container-main-box column">
              <li className="blue">
                <p>Đang hoạt động</p> <span className="blue">210</span>
              </li>
              <li className="gray">
                <p>Ngưng hoạt động</p> <span className="blue">66</span>
              </li>
            </div>
          </div>
          <div className="overview-container-main">
            <div className="overview-container-main-box">
              <div className="image">
                <img src={percen86} alt="" className="imgpercent" />
              </div>
              <div className="parameter">
                <h3>276</h3>
                <div>
                  <img src={iconsmallnumber} alt="" className="icondevice" />
                  <span className="sub-param green">Cấp số</span>
                </div>
              </div>
            </div>
            <div className="overview-container-main-box column">
              <li className="yello">
                <p>Đã sử dụng</p> <span className="green">3.721</span>
              </li>
              <li className="gray">
                <p>Đang chờ</p> <span className="green">486</span>
              </li>
              <li className="pink">
                <p>Ngưng hoạt động</p> <span className="green">32</span>
              </li>
            </div>
          </div>

          <div className="overview-container-datepicker">
            <DatePicker onChange={onChange} />
          </div>
        </div>
      </section>
    </>
  );
};

export default OverView;
