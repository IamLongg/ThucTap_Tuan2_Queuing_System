import logo from "../../assets/images/Logoalta.png";
import imgIntro from "../../assets/images/forgotpass-intro.png";
import eyeClose from "../../assets/images/eye-close.png";

const ResetPassword = () => {
  return (
    <>
      <section className="resetpassword" id="resetpassword">
        <div className="resetpassword-main">
          <div className="resetpassword-main-box">
            <img srcSet={logo} alt="" className="image" />
            <h3 className="label-resetpass">Đặt lại mật khẩu mới</h3>
            <div className="resetpassword-main-box-group">
              <h3 className="label">Mật khẩu</h3>
              <input type="password" className="input-resetpassword" />
              <img src={eyeClose} alt="" className="icon" />
            </div>
            <div className="resetpassword-main-box-group">
              <h3 className="label">Nhập lại mật khẩu</h3>
              <input type="password" className="input-resetpassword" />
              <img src={eyeClose} alt="" className="icon" />
            </div>
            <button className="btn">Xác nhận</button>
          </div>
        </div>
        <div className="resetpassword-intro">
          <img src={imgIntro} alt="" className="imageIntro" />
        </div>
      </section>
    </>
  );
};

export default ResetPassword;
