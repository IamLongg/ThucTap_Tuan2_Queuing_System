import { FiSearch } from "react-icons/fi";
import { AiFillPlusSquare } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const SettingMain = () => {
  let navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    navigate("/add/manage-role");
  };
  return (
    <>
      <section className="manage-role">
        <div className="manage-role-container">
          <div className="flex-box">
            <div className="manage-role-container-box">
              <h2 className="title">Danh sách vai trò</h2>
            </div>
            <div className="manage-role-container-box">
              <h3>Từ khóa</h3>
              <div className="search">
                <input type="text" placeholder="Nhập từ khóa" />
                <span>
                  <FiSearch />
                </span>
              </div>
            </div>
          </div>
          <div className="manage-role-container-table">
            <div className="tbl-header">
              <table cellPadding="0" cellSpacing="0" border="0">
                <thead>
                  <tr className="col1">
                    <th>Tên vai trò</th>
                  </tr>
                  <tr className="col2">
                    <th>Số người dùng</th>
                  </tr>
                  <tr className="col3">
                    <th>Mô tả</th>
                  </tr>
                  <tr className="col4">
                    <th></th>
                  </tr>
                </thead>
              </table>
            </div>
            <div className="tbl-content">
              <table cellPadding="0" cellSpacing="0" border="0">
                <tbody>
                  <tr className="col1">
                    <td>Kế toán</td>
                  </tr>
                  <tr className="col2">
                    <td>6</td>
                  </tr>
                  <tr className="col3">
                    <td>
                      Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu
                    </td>
                  </tr>
                  <tr className="col4">
                    <td>
                      <a href="">Cập nhật</a>
                    </td>
                  </tr>
                </tbody>
                <tbody className="active">
                  <tr className="col1">
                    <td>Kế toán</td>
                  </tr>
                  <tr className="col2">
                    <td>6</td>
                  </tr>
                  <tr className="col3">
                    <td>
                      Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu
                    </td>
                  </tr>
                  <tr className="col4">
                    <td>
                      <a href="">Cập nhật</a>
                    </td>
                  </tr>
                </tbody>
                <tbody>
                  <tr className="col1">
                    <td>Kế toán</td>
                  </tr>
                  <tr className="col2">
                    <td>6</td>
                  </tr>
                  <tr className="col3">
                    <td>
                      Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu
                    </td>
                  </tr>
                  <tr className="col4">
                    <td>
                      <a href="">Cập nhật</a>
                    </td>
                  </tr>
                </tbody>
                <tbody className="active">
                  <tr className="col1">
                    <td>Kế toán</td>
                  </tr>
                  <tr className="col2">
                    <td>6</td>
                  </tr>
                  <tr className="col3">
                    <td>
                      Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu
                    </td>
                  </tr>
                  <tr className="col4">
                    <td>
                      <a href="">Cập nhật</a>
                    </td>
                  </tr>
                </tbody>
                <tbody>
                  <tr className="col1">
                    <td>Kế toán</td>
                  </tr>
                  <tr className="col2">
                    <td>6</td>
                  </tr>
                  <tr className="col3">
                    <td>
                      Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu
                    </td>
                  </tr>
                  <tr className="col4">
                    <td>
                      <a href="">Cập nhật</a>
                    </td>
                  </tr>
                </tbody>
                <tbody className="active">
                  <tr className="col1">
                    <td>Kế toán</td>
                  </tr>
                  <tr className="col2">
                    <td>6</td>
                  </tr>
                  <tr className="col3">
                    <td>
                      Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu
                    </td>
                  </tr>
                  <tr className="col4">
                    <td>
                      <a href="">Cập nhật</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="manage-role-container-function">
            <button className="btn-add" onClick={(e) => handleClick(e)}>
              <AiFillPlusSquare color="#ff9138" />
              Thêm <br /> vai trò
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default SettingMain;
