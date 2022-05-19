import { MdModeEditOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";
const DeviceDetail = () => {
  let navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    navigate("/device/manage");
  };

  return (
    <>
      <section className="deviceDetail">
        <div className="deviceDetail-container">
          <h2 className="title">Quản lý thiết bị</h2>
          <div className="deviceDetail-container-main">
            <h3 className="heading">Thông tin thiết bị</h3>
            <div className="flex-box">
              <div className="deviceDetail-container-main-box">
                <h5 className="sub-heading">Mã thiết bị:</h5>
                <span>KIO_01</span>
              </div>
              <div className="deviceDetail-container-main-box">
                <h5 className="sub-heading">Loại thiết bị:</h5>
                <span>Kiosk</span>
              </div>
              <div className="deviceDetail-container-main-box">
                <h5 className="sub-heading">Tên thiết bị:</h5>
                <span>Kiosk</span>
              </div>
              <div className="deviceDetail-container-main-box">
                <h5 className="sub-heading">Tên đăng nhập:</h5>
                <span>Linhkyo011</span>
              </div>
              <div className="deviceDetail-container-main-box">
                <h5 className="sub-heading">Địa chỉ IP:</h5>
                <span>128.172.308</span>
              </div>
              <div className="deviceDetail-container-main-box">
                <h5 className="sub-heading">Mật khẩu:</h5>
                <span>CMS</span>
              </div>
              <div className="deviceDetail-container-main-box">
                <h5 className="sub-heading">Dịch vụ sử dụng:</h5>
                <span>
                  Khám tim mạch, Khám sản- Phụ khoa, Khám răng hàm mặt, Khám tai
                  mũi họng, Khám tổng quát, Khám bao quát.
                </span>
              </div>
            </div>
          </div>
          <div className="deviceDetail-container-function">
            <button className="btn-update" onClick={(e) => handleClick(e)}>
              <MdModeEditOutline />
              Cập nhật <br /> thiết bị
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default DeviceDetail;
