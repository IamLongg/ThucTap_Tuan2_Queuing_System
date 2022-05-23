const NumberDetail = () => {
  return (
    <>
      <div className="numberdetail">
        <div className="numberdetail-container">
          <h2 className="title">Quản lý cấp số</h2>
          <div className="numberdetail-container-main">
            <h3 className="heading">Thông tin cấp số</h3>
            <div className="flex-box">
              <div className="flex-box-left">
                <div className="numberdetail-container-main-box">
                  <h5 className="sub-heading">Họ tên:</h5>
                  <span>Nguyễn Thị Dung</span>
                </div>
                <div className="numberdetail-container-main-box">
                  <h5 className="sub-heading">Tên dịch vụ:</h5>
                  <span>Khám tim mạch</span>
                </div>
                <div className="numberdetail-container-main-box">
                  <h5 className="sub-heading">Số thứ tự:</h5>
                  <span>2001201</span>
                </div>
                <div className="numberdetail-container-main-box">
                  <h5 className="sub-heading">Thời gian cấp:</h5>
                  <span>14:35 - 07/11/2021</span>
                </div>
                <div className="numberdetail-container-main-box">
                  <h5 className="sub-heading">Hạn sử dụng:</h5>
                  <span>18:00 - 07/11/2021</span>
                </div>
              </div>
              <div className="flex-box-right">
                <div className="numberdetail-container-main-box">
                  <h5 className="sub-heading">Nguồn cấp:</h5>
                  <span>Kiosk</span>
                </div>
                <div className="numberdetail-container-main-box">
                  <h5 className="sub-heading">Trạng thái:</h5>
                  <span>
                    <li className="blue">
                      <p>Đang chờ</p>
                    </li>
                  </span>
                </div>
                <div className="numberdetail-container-main-box">
                  <h5 className="sub-heading">Số điện thoại:</h5>
                  <span>0948523623</span>
                </div>
                <div className="numberdetail-container-main-box">
                  <h5 className="sub-heading">Địa chỉ Email:</h5>
                  <span>nguyendung@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NumberDetail;
