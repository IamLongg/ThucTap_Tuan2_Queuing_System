import icondropdown from "../../../assets/images/icondropdown.png";
const AddUser = () => {
  return (
    <>
      <section className="addUser">
        <div className="addUser-container">
          <h2 className="title">Quản lý thiết bị</h2>
          <div className="addUser-container-main">
            <h3 className="heading">Thông tin thiết bị</h3>
            <div className="flex-box">
              <div className="addUser-container-main-box">
                <h5 className="sub-heading">
                  Họ tên: <span>*</span>
                </h5>
                <input type="text" placeholder="Nhập họ tên" />
              </div>
              <div className="addUser-container-main-box">
                <h5 className="sub-heading">
                  Tên đăng nhập: <span>*</span>
                </h5>
                <input type="text" placeholder="Nhập tên đăng nhập" />
              </div>
              <div className="addUser-container-main-box">
                <h5 className="sub-heading">
                  Số điện thoại: <span>*</span>
                </h5>
                <input type="text" placeholder="Nhập số điện thoại" />
              </div>
              <div className="addUser-container-main-box">
                <h5 className="sub-heading">
                  Mật khẩu: <span>*</span>
                </h5>
                <input type="password" placeholder="Nhập mật khẩu" />
              </div>
              <div className="addUser-container-main-box">
                <h5 className="sub-heading">
                  Email: <span>*</span>
                </h5>
                <input type="text" placeholder="Nhập email" />
              </div>
              <div className="addUser-container-main-box">
                <h5 className="sub-heading">
                  Nhập lại mật khẩu: <span>*</span>
                </h5>
                <input type="password" placeholder="Nhập lại mật khẩu" />
              </div>
              <div className="addUser-container-main-box">
                <h5 className="sub-heading">
                  Vai trò: <span>*</span>
                </h5>
                <div className="dropdown">
                  <div className="dropdown-select">
                    <span className="select">Chọn vai trò</span>
                    <img src={icondropdown} alt="" />
                  </div>
                  <div className="dropdown-list">
                    <div className="dropdown-list__item">Kế toán</div>
                    <div className="dropdown-list__item">Quản lý</div>
                    <div className="dropdown-list__item">Admin</div>
                  </div>
                </div>
              </div>
              <div className="addUser-container-main-box">
                <h5 className="sub-heading">
                  Tình trạng: <span>*</span>
                </h5>
                <div className="dropdown">
                  <div className="dropdown-select">
                    <span className="select">Tất cả</span>
                    <img src={icondropdown} alt="" />
                  </div>
                  <div className="dropdown-list">
                    <div className="dropdown-list__item">Tất cả</div>
                    <div className="dropdown-list__item">Ngưng hoạt động</div>
                    <div className="dropdown-list__item">Hoạt động</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="addUser-container-main-note">
              <span>*</span>
              <h3 className="sub-note">Là trường thông tin bắt buộc</h3>
            </div>
          </div>
          <div className="function">
            <button className="btn-cancel">Hủy bỏ</button>
            <button className="btn">Thêm</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default AddUser;
