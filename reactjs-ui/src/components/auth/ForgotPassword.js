import logo from "../../assets/images/Logoalta.png";
import imgIntro from "../../assets/images/intro.png";
import { Link } from "react-router-dom";
const ForgotPassword = () => {
  return (
    <>
      <section className="forgotpassword" id="forgotpassword">
        <div className="forgotpassword-main">
          <div className="forgotpassword-main-box">
            <img srcSet={logo} alt="" className="image" />
            <div className="forgotpassword-main-box-group">
              <h3 className="label-forgotpass">Đặt lại mật khẩu</h3>
              <p className="sub-label">
                Vui lòng nhập email để đặt lại mật khẩu của bạn *
              </p>
              <input type="text" className="input-forgotpassword" />
            </div>
            <div className="function">
              <button className="btn-cancel">
                <Link to="/">Hủy</Link>
              </button>
              <button className="btn">
                <Link to="/resetpassword">Tiếp tục</Link>
              </button>
            </div>
          </div>
        </div>
        <div className="forgotpassword-intro">
          <img src={imgIntro} alt="" className="imageIntro" />
        </div>
      </section>
    </>
  );
};

export default ForgotPassword;
