import logo from "../../assets/images/Logoalta.png";
import imgIntro from "../../assets/images/forgotpass-intro.png";
import eyeClose from "../../assets/images/eye-close.png";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
  let navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    navigate("/");
  };

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
            <button className="btn" onClick={(e) => handleClick(e)}>
              Xác nhận
            </button>
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
