import icondropdown from "../../assets/images/icondropdown.png";

const AddNewNumber = () => {
  return (
    <>
      <section className="addnewnumber">
        <div className="addnewnumber-container">
          <div className="addnewnumber-container-box">
            <h2 className="heading">cấp số mới</h2>
            <p className="sub-heading">Dịch vụ khách hàng lựa chọn</p>
            <div className="dropdown">
              <div className="dropdown-select">
                <span className="select">Chọn dịch vụ</span>
                <img src={icondropdown} alt="" />
              </div>
              <div className="dropdown-list">
                <div className="dropdown-list__item">Khám tim mạch</div>
                <div className="dropdown-list__item">Khám sản- Phụ khoa</div>
                <div className="dropdown-list__item">Khám tai mũi họng</div>
              </div>
            </div>
            <div className="function">
              <button className="btn-cancel">Hủy bỏ</button>
              <button className="btn">In số</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AddNewNumber;
