const AddService = () => {
  return (
    <>
      <section className="addservice">
        <div className="addservice-container">
          <h2 className="title">Quản lý dịch vụ</h2>
          <div className="addservice-container-main">
            <h3 className="heading">Thông tin dịch vụ</h3>
            <div className="addservice-container-main-box">
              <div className="addservice-container-main-box-content">
                <h5 className="sub-heading">
                  Mã dịch vụ: <span>*</span>
                </h5>
                <input type="text" placeholder="201" />
                <h5 className="sub-heading">
                  Tên dịch vụ: <span>*</span>
                </h5>
                <input type="text" placeholder="Khám tim mạch" />
              </div>
              <div className="addservice-container-main-box-desc">
                <h5 className="sub-heading">
                  Mô tả: <span>*</span>
                </h5>
                <textarea rows="5" cols="60" placeholder="Mô tả dịch vụ" />
              </div>
            </div>
            <h3 className="heading">Quy tắc cấp số</h3>
            <div className="addservice-container-main-select">
              <div className="block">
                <input type="checkbox" className="checkbox" />
                <div className="text">
                  <p>Tăng tự động từ:</p>
                </div>
                <div className="input-text">
                  <input type="text" placeholder="0001" />
                </div>
                <span>đến</span>
                <div className="input-text">
                  <input type="text" placeholder="9999" />
                </div>
              </div>
              <div className="block">
                <input type="checkbox" className="checkbox" />
                <div className="text">
                  <p>Prefix:</p>
                </div>
                <div className="input-text">
                  <input type="text" placeholder="0001" />
                </div>
              </div>
              <div className="block">
                <input type="checkbox" className="checkbox" />
                <div className="text">
                  <p>Surfix:</p>
                </div>
                <div className="input-text">
                  <input type="text" placeholder="0001" />
                </div>
              </div>
              <div className="block">
                <input type="checkbox" className="checkbox" />
                <div className="text">
                  <p>Reset mỗi ngày</p>
                </div>
              </div>
            </div>
            <div className="addservice-container-main-note">
              <span>*</span>
              <h3 className="sub-note">Là trường thông tin bắt buộc</h3>
            </div>
          </div>
          <div className="function">
            <button className="btn-cancel">Hủy bỏ</button>
            <button className="btn">Thêm dịch vụ</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default AddService;
