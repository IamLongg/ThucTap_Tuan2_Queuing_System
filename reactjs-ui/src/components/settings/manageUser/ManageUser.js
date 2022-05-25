import React from "react";
import icondropdown from "../../../assets/images/icondropdown.png";
import { FiSearch } from "react-icons/fi";
import { AiFillPlusSquare } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { Pagination } from "antd";

const ManageUser = () => {
  let navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    navigate("/add/manage-user");
  };

  const handleClickUpdate = (e) => {
    e.preventDefault();
    navigate("/add/manage-user");
  };
  return (
    <>
      <section className="manage-user">
        <div className="manage-user-container">
          <h2 className="title">Quản lý dịch vụ</h2>
          <div className="flex-box">
            <div className="manage-user-container-box">
              <h3>Tình trạng hoạt động</h3>
              <div className="dropdown">
                <div className="dropdown-select">
                  <span className="select">Tất cả</span>
                  <img src={icondropdown} alt="" />
                </div>
                <div className="dropdown-list">
                  <div className="dropdown-list__item">Tất cả</div>
                  <div className="dropdown-list__item">Hoạt động</div>
                  <div className="dropdown-list__item">Ngưng hoạt động</div>
                </div>
              </div>
            </div>

            <div className="manage-user-container-box">
              <h3>Từ khóa</h3>
              <div className="search">
                <input type="text" placeholder="Nhập từ khóa" />
                <span>
                  <FiSearch />
                </span>
              </div>
            </div>
          </div>
          <div className="manage-user-container-table">
            <div className="tbl-header">
              <table cellPadding="0" cellSpacing="0" border="0">
                <thead>
                  <tr className="col1">
                    <th>Tên đăng nhập</th>
                  </tr>
                  <tr className="col2">
                    <th>Họ tên</th>
                  </tr>
                  <tr className="col3">
                    <th>Số điện thoại</th>
                  </tr>
                  <tr className="col4">
                    <th>Email</th>
                  </tr>
                  <tr className="col5">
                    <th>Vai trò</th>
                  </tr>
                  <tr className="col6">
                    <th>Trạng thái hoạt động</th>
                  </tr>
                  <tr className="col7">
                    <th></th>
                  </tr>
                </thead>
              </table>
            </div>
            <div className="tbl-content">
              <table cellPadding="0" cellSpacing="0" border="0">
                <tbody>
                  <tr className="col1">
                    <td>tuyetnguyen@12</td>
                  </tr>
                  <tr className="col2">
                    <td>Nguyen Văn A</td>
                  </tr>
                  <tr className="col3">
                    <td>0919256712</td>
                  </tr>
                  <tr className="col4">
                    <td>tuyetnguyen123@gmail.com</td>
                  </tr>
                  <tr className="col5">
                    <td>Kế toán</td>
                  </tr>
                  <tr className="col6">
                    <td>
                      <li className="green">
                        <span>Hoạt động</span>
                      </li>
                    </td>
                  </tr>
                  <tr className="col7">
                    <td>
                      <a href="" onClick={(e) => handleClickUpdate(e)}>
                        Cập nhật
                      </a>
                    </td>
                  </tr>
                </tbody>
                <tbody className="active">
                  <tr className="col1">
                    <td>tuyetnguyen@12</td>
                  </tr>
                  <tr className="col2">
                    <td>Nguyen Văn A</td>
                  </tr>
                  <tr className="col3">
                    <td>0919256712</td>
                  </tr>
                  <tr className="col4">
                    <td>tuyetnguyen123@gmail.com</td>
                  </tr>
                  <tr className="col5">
                    <td>Kế toán</td>
                  </tr>
                  <tr className="col6">
                    <td>
                      <li className="green">
                        <span>Hoạt động</span>
                      </li>
                    </td>
                  </tr>
                  <tr className="col7">
                    <td>
                      <a href="">Cập nhật</a>
                    </td>
                  </tr>
                </tbody>
                <tbody>
                  <tr className="col1">
                    <td>tuyetnguyen@12</td>
                  </tr>
                  <tr className="col2">
                    <td>Nguyen Văn A</td>
                  </tr>
                  <tr className="col3">
                    <td>0919256712</td>
                  </tr>
                  <tr className="col4">
                    <td>tuyetnguyen123@gmail.com</td>
                  </tr>
                  <tr className="col5">
                    <td>Kế toán</td>
                  </tr>
                  <tr className="col6">
                    <td>
                      <li className="green">
                        <span>Hoạt động</span>
                      </li>
                    </td>
                  </tr>
                  <tr className="col7">
                    <td>
                      <a href="">Cập nhật</a>
                    </td>
                  </tr>
                </tbody>
                <tbody className="active">
                  <tr className="col1">
                    <td>tuyetnguyen@12</td>
                  </tr>
                  <tr className="col2">
                    <td>Nguyen Văn A</td>
                  </tr>
                  <tr className="col3">
                    <td>0919256712</td>
                  </tr>
                  <tr className="col4">
                    <td>tuyetnguyen123@gmail.com</td>
                  </tr>
                  <tr className="col5">
                    <td>Kế toán</td>
                  </tr>
                  <tr className="col6">
                    <td>
                      <li className="green">
                        <span>Hoạt động</span>
                      </li>
                    </td>
                  </tr>
                  <tr className="col7">
                    <td>
                      <a href="">Cập nhật</a>
                    </td>
                  </tr>
                </tbody>
                <tbody>
                  <tr className="col1">
                    <td>tuyetnguyen@12</td>
                  </tr>
                  <tr className="col2">
                    <td>Nguyen Văn A</td>
                  </tr>
                  <tr className="col3">
                    <td>0919256712</td>
                  </tr>
                  <tr className="col4">
                    <td>tuyetnguyen123@gmail.com</td>
                  </tr>
                  <tr className="col5">
                    <td>Kế toán</td>
                  </tr>
                  <tr className="col6">
                    <td>
                      <li className="green">
                        <span>Hoạt động</span>
                      </li>
                    </td>
                  </tr>
                  <tr className="col7">
                    <td>
                      <a href="">Cập nhật</a>
                    </td>
                  </tr>
                </tbody>
                <tbody className="active">
                  <tr className="col1">
                    <td>tuyetnguyen@12</td>
                  </tr>
                  <tr className="col2">
                    <td>Nguyen Văn A</td>
                  </tr>
                  <tr className="col3">
                    <td>0919256712</td>
                  </tr>
                  <tr className="col4">
                    <td>tuyetnguyen123@gmail.com</td>
                  </tr>
                  <tr className="col5">
                    <td>Kế toán</td>
                  </tr>
                  <tr className="col6">
                    <td>
                      <li className="green">
                        <span>Hoạt động</span>
                      </li>
                    </td>
                  </tr>
                  <tr className="col7">
                    <td>
                      <a href="">Cập nhật</a>
                    </td>
                  </tr>
                </tbody>
                <tbody>
                  <tr className="col1">
                    <td>tuyetnguyen@12</td>
                  </tr>
                  <tr className="col2">
                    <td>Nguyen Văn A</td>
                  </tr>
                  <tr className="col3">
                    <td>0919256712</td>
                  </tr>
                  <tr className="col4">
                    <td>tuyetnguyen123@gmail.com</td>
                  </tr>
                  <tr className="col5">
                    <td>Kế toán</td>
                  </tr>
                  <tr className="col6">
                    <td>
                      <li className="green">
                        <span>Hoạt động</span>
                      </li>
                    </td>
                  </tr>
                  <tr className="col7">
                    <td>
                      <a href="">Cập nhật</a>
                    </td>
                  </tr>
                </tbody>
                <tbody className="active">
                  <tr className="col1">
                    <td>tuyetnguyen@12</td>
                  </tr>
                  <tr className="col2">
                    <td>Nguyen Văn A</td>
                  </tr>
                  <tr className="col3">
                    <td>0919256712</td>
                  </tr>
                  <tr className="col4">
                    <td>tuyetnguyen123@gmail.com</td>
                  </tr>
                  <tr className="col5">
                    <td>Kế toán</td>
                  </tr>
                  <tr className="col6">
                    <td>
                      <li className="green">
                        <span>Hoạt động</span>
                      </li>
                    </td>
                  </tr>
                  <tr className="col7">
                    <td>
                      <a href="">Cập nhật</a>
                    </td>
                  </tr>
                </tbody>
                <tbody>
                  <tr className="col1">
                    <td>tuyetnguyen@12</td>
                  </tr>
                  <tr className="col2">
                    <td>Nguyen Văn A</td>
                  </tr>
                  <tr className="col3">
                    <td>0919256712</td>
                  </tr>
                  <tr className="col4">
                    <td>tuyetnguyen123@gmail.com</td>
                  </tr>
                  <tr className="col5">
                    <td>Kế toán</td>
                  </tr>
                  <tr className="col6">
                    <td>
                      <li className="green">
                        <span>Hoạt động</span>
                      </li>
                    </td>
                  </tr>
                  <tr className="col7">
                    <td>
                      <a href="">Cập nhật</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="manage-user-container-function">
            <button className="btn-add" onClick={(e) => handleClick(e)}>
              <AiFillPlusSquare />
              Thêm <br /> tài <br /> khoản
            </button>
          </div>
          <div className="manage-user-container-pagination">
            <Pagination defaultCurrent={1} total={100} />
          </div>
        </div>
      </section>
    </>
  );
};

export default ManageUser;
