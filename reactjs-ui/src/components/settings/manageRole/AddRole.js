const AddRole = () => {
  return (
    <>
      <section className="addrole">
        <div className="addrole-container">
          <h2 className="title">Danh sách vai trò</h2>
          <div className="addrole-container-main">
            <h3 className="heading">Thông tin vai trò</h3>
            <div className="flex-box">
              <div className="addrole-container-main-box">
                <div className="addrole-container-main-box-content-left">
                  <h5 className="sub-heading">
                    Tên vai trò: <span>*</span>
                  </h5>
                  <input type="text" placeholder="Nhập tên vai trò" />
                  <h5 className="sub-heading">
                    Mô tả: <span>*</span>
                  </h5>
                  <textarea rows="5" cols="60" placeholder="Mô tả dịch vụ" />
                  <div className="note">
                    <span>*</span>
                    <h3 className="sub-note">Là trường thông tin bắt buộc</h3>
                  </div>
                </div>
              </div>
              <div className="addrole-container-main-box">
                <div className="addrole-container-main-box-content-right">
                  <h5 className="sub-heading">
                    Phân quyền chức năng: <span>*</span>
                  </h5>
                  <form action="">
                    <label htmlFor="">Nhóm chức năng A</label>
                    <div className="input">
                      <input type="checkbox" id="" name="" />
                      <span>Tất cả</span>
                    </div>
                    <div className="input">
                      <input type="checkbox" id="" name="" />
                      <span>Chức năng x</span>
                    </div>
                    <div className="input">
                      <input type="checkbox" id="" name="" />
                      <span>Chức năng y</span>
                    </div>
                    <div className="input">
                      <input type="checkbox" id="" name="" />
                      <span>Chức năng z</span>
                    </div>
                    <label htmlFor="">Nhóm chức năng B</label>
                    <div className="input">
                      <input type="checkbox" id="" name="" />
                      <span>Tất cả</span>
                    </div>
                    <div className="input">
                      <input type="checkbox" id="" name="" />
                      <span>Chức năng x</span>
                    </div>
                    <div className="input">
                      <input type="checkbox" id="" name="" />
                      <span>Chức năng y</span>
                    </div>
                    <div className="input">
                      <input type="checkbox" id="" name="" />
                      <span>Chức năng z</span>
                    </div>
                    <label htmlFor="">Nhóm chức năng C</label>
                    <div className="input">
                      <input type="checkbox" id="" name="" />
                      <span>Tất cả</span>
                    </div>
                    <div className="input">
                      <input type="checkbox" id="" name="" />
                      <span>Chức năng x</span>
                    </div>
                    <div className="input">
                      <input type="checkbox" id="" name="" />
                      <span>Chức năng y</span>
                    </div>
                    <div className="input">
                      <input type="checkbox" id="" name="" />
                      <span>Chức năng z</span>
                    </div>
                    <label htmlFor="">Nhóm chức năng D</label>
                    <div className="input">
                      <input type="checkbox" id="" name="" />
                      <span>Tất cả</span>
                    </div>
                    <div className="input">
                      <input type="checkbox" id="" name="" />
                      <span>Chức năng x</span>
                    </div>
                    <div className="input">
                      <input type="checkbox" id="" name="" />
                      <span>Chức năng y</span>
                    </div>
                    <div className="input">
                      <input type="checkbox" id="" name="" />
                      <span>Chức năng z</span>
                    </div>
                  </form>
                </div>
              </div>
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

export default AddRole;
