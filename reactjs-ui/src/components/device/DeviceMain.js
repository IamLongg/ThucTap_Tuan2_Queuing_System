import icondropdown from "../../assets/images/icondropdown.png";
import { FiSearch } from "react-icons/fi";
import { AiFillPlusSquare } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

import { Pagination } from "antd";
const DeviceMain = () => {
  let navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    navigate("/device/manage");
  };

  const handleClickDetail = (e) => {
    e.preventDefault();
    navigate("/device/detail");
  };
  return (
    <>
      <section className="devicemain">
        <div className="devicemain-container">
          <h2 className="title">Danh sách thiết bị</h2>
          <div className="flex-box">
            <div className="devicemain-container-box">
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
            <div className="devicemain-container-box">
              <h3>Tình trạng kết nối</h3>
              <div className="dropdown">
                <div className="dropdown-select">
                  <span className="select">Tất cả</span>
                  <img src={icondropdown} alt="" />
                </div>
                <div className="dropdown-list">
                  <div className="dropdown-list__item">Tất cả</div>
                  <div className="dropdown-list__item">Kết nối</div>
                  <div className="dropdown-list__item">Mất kết nối</div>
                </div>
              </div>
            </div>
            <div className="devicemain-container-box">
              <h3>Từ khóa</h3>
              <div className="search">
                <input type="text" placeholder="Nhập từ khóa" />
                <span>
                  <FiSearch />
                </span>
              </div>
            </div>
          </div>
          <div className="devicemain-container-table">
            <div className="tbl-header">
              <table cellPadding="0" cellSpacing="0" border="0">
                <thead>
                  <tr className="col1">
                    <th>Mã thiết bị</th>
                  </tr>
                  <tr className="col2">
                    <th>Tên thiết bị</th>
                  </tr>
                  <tr className="col3">
                    <th>Địa chỉ IP</th>
                  </tr>
                  <tr className="col4">
                    <th>Trạng thái hoạt động</th>
                  </tr>
                  <tr className="col5">
                    <th>Trạng thái kết nối</th>
                  </tr>
                  <tr className="col6">
                    <th>Dịch vụ đã sử dụng</th>
                  </tr>
                  <tr className="col7">
                    <th></th>
                  </tr>
                  <tr className="col8">
                    <th></th>
                  </tr>
                </thead>
              </table>
            </div>
            <div className="tbl-content">
              <table cellPadding="0" cellSpacing="0" border="0">
                <tbody>
                  <tr className="col1">
                    <td>KIO_01</td>
                  </tr>
                  <tr className="col2">
                    <td>Kiosk</td>
                  </tr>
                  <tr className="col3">
                    <td>192.168.1.10</td>
                  </tr>
                  <tr className="col4">
                    <td>
                      <li className="red">
                        <span>Ngưng hoạt động</span>
                      </li>
                    </td>
                  </tr>
                  <tr className="col5">
                    <td>
                      <li className="red">
                        <span>Mất kết nối</span>
                      </li>
                    </td>
                  </tr>
                  <tr className="col6">
                    <td>
                      Khám tim mạch, khám mắt...
                      <a href="">Xem thêm</a>
                    </td>
                  </tr>
                  <tr className="col7">
                    <td>
                      <a href="" onClick={(e) => handleClickDetail(e)}>
                        Chi tiết
                      </a>
                    </td>
                  </tr>
                  <tr className="col8">
                    <td>
                      <a href="">Cập nhật</a>
                    </td>
                  </tr>
                </tbody>
                <tbody className="active">
                  <tr className="col1">
                    <td>KIO_01</td>
                  </tr>
                  <tr className="col2">
                    <td>Kiosk</td>
                  </tr>
                  <tr className="col3">
                    <td>192.168.1.10</td>
                  </tr>
                  <tr className="col4">
                    <td>
                      <li className="green">
                        <span>Hoạt động</span>
                      </li>
                    </td>
                  </tr>
                  <tr className="col5">
                    <td>
                      <li className="green">
                        <span>Kết nối</span>
                      </li>
                    </td>
                  </tr>
                  <tr className="col6">
                    <td>
                      Khám tim mạch, khám mắt...
                      <a href="">Xem thêm</a>
                    </td>
                  </tr>
                  <tr className="col7">
                    <td>
                      <a href="">Chi tiết</a>
                    </td>
                  </tr>
                  <tr className="col8">
                    <td>
                      <a href="">Cập nhật</a>
                    </td>
                  </tr>
                </tbody>
                <tbody>
                  <tr className="col1">
                    <td>KIO_01</td>
                  </tr>
                  <tr className="col2">
                    <td>Kiosk</td>
                  </tr>
                  <tr className="col3">
                    <td>192.168.1.10</td>
                  </tr>
                  <tr className="col4">
                    <td>
                      <li className="red">
                        <span>Ngưng hoạt động</span>
                      </li>
                    </td>
                  </tr>
                  <tr className="col5">
                    <td>
                      <li className="red">
                        <span>Mất kết nối</span>
                      </li>
                    </td>
                  </tr>
                  <tr className="col6">
                    <td>
                      Khám tim mạch, khám mắt...
                      <a href="">Xem thêm</a>
                    </td>
                  </tr>
                  <tr className="col7">
                    <td>
                      <a href="">Chi tiết</a>
                    </td>
                  </tr>
                  <tr className="col8">
                    <td>
                      <a href="">Cập nhật</a>
                    </td>
                  </tr>
                </tbody>
                <tbody className="active">
                  <tr className="col1">
                    <td>KIO_01</td>
                  </tr>
                  <tr className="col2">
                    <td>Kiosk</td>
                  </tr>
                  <tr className="col3">
                    <td>192.168.1.10</td>
                  </tr>
                  <tr className="col4">
                    <td>
                      <li className="green">
                        <span>Hoạt động</span>
                      </li>
                    </td>
                  </tr>
                  <tr className="col5">
                    <td>
                      <li className="green">
                        <span>Kết nối</span>
                      </li>
                    </td>
                  </tr>
                  <tr className="col6">
                    <td>
                      Khám tim mạch, khám mắt...
                      <a href="">Xem thêm</a>
                    </td>
                  </tr>
                  <tr className="col7">
                    <td>
                      <a href="">Chi tiết</a>
                    </td>
                  </tr>
                  <tr className="col8">
                    <td>
                      <a href="">Cập nhật</a>
                    </td>
                  </tr>
                </tbody>
                <tbody>
                  <tr className="col1">
                    <td>KIO_01</td>
                  </tr>
                  <tr className="col2">
                    <td>Kiosk</td>
                  </tr>
                  <tr className="col3">
                    <td>192.168.1.10</td>
                  </tr>
                  <tr className="col4">
                    <td>
                      <li className="red">
                        <span>Ngưng hoạt động</span>
                      </li>
                    </td>
                  </tr>
                  <tr className="col5">
                    <td>
                      <li className="red">
                        <span>Mất kết nối</span>
                      </li>
                    </td>
                  </tr>
                  <tr className="col6">
                    <td>
                      Khám tim mạch, khám mắt...
                      <a href="">Xem thêm</a>
                    </td>
                  </tr>
                  <tr className="col7">
                    <td>
                      <a href="">Chi tiết</a>
                    </td>
                  </tr>
                  <tr className="col8">
                    <td>
                      <a href="">Cập nhật</a>
                    </td>
                  </tr>
                </tbody>
                <tbody className="active">
                  <tr className="col1">
                    <td>KIO_01</td>
                  </tr>
                  <tr className="col2">
                    <td>Kiosk</td>
                  </tr>
                  <tr className="col3">
                    <td>192.168.1.10</td>
                  </tr>
                  <tr className="col4">
                    <td>
                      <li className="green">
                        <span>Hoạt động</span>
                      </li>
                    </td>
                  </tr>
                  <tr className="col5">
                    <td>
                      <li className="green">
                        <span>Kết nối</span>
                      </li>
                    </td>
                  </tr>
                  <tr className="col6">
                    <td>
                      Khám tim mạch, khám mắt...
                      <a href="">Xem thêm</a>
                    </td>
                  </tr>
                  <tr className="col7">
                    <td>
                      <a href="">Chi tiết</a>
                    </td>
                  </tr>
                  <tr className="col8">
                    <td>
                      <a href="">Cập nhật</a>
                    </td>
                  </tr>
                </tbody>
                <tbody>
                  <tr className="col1">
                    <td>KIO_01</td>
                  </tr>
                  <tr className="col2">
                    <td>Kiosk</td>
                  </tr>
                  <tr className="col3">
                    <td>192.168.1.10</td>
                  </tr>
                  <tr className="col4">
                    <td>
                      <li className="red">
                        <span>Ngưng hoạt động</span>
                      </li>
                    </td>
                  </tr>
                  <tr className="col5">
                    <td>
                      <li className="red">
                        <span>Mất kết nối</span>
                      </li>
                    </td>
                  </tr>
                  <tr className="col6">
                    <td>
                      Khám tim mạch, khám mắt...
                      <a href="">Xem thêm</a>
                    </td>
                  </tr>
                  <tr className="col7">
                    <td>
                      <a href="">Chi tiết</a>
                    </td>
                  </tr>
                  <tr className="col8">
                    <td>
                      <a href="">Cập nhật</a>
                    </td>
                  </tr>
                </tbody>
                <tbody className="active">
                  <tr className="col1">
                    <td>KIO_01</td>
                  </tr>
                  <tr className="col2">
                    <td>Kiosk</td>
                  </tr>
                  <tr className="col3">
                    <td>192.168.1.10</td>
                  </tr>
                  <tr className="col4">
                    <td>
                      <li className="green">
                        <span>Hoạt động</span>
                      </li>
                    </td>
                  </tr>
                  <tr className="col5">
                    <td>
                      <li className="green">
                        <span>Kết nối</span>
                      </li>
                    </td>
                  </tr>
                  <tr className="col6">
                    <td>
                      Khám tim mạch, khám mắt...
                      <a href="">Xem thêm</a>
                    </td>
                  </tr>
                  <tr className="col7">
                    <td>
                      <a href="">Chi tiết</a>
                    </td>
                  </tr>
                  <tr className="col8">
                    <td>
                      <a href="">Cập nhật</a>
                    </td>
                  </tr>
                </tbody>
                <tbody>
                  <tr className="col1">
                    <td>KIO_01</td>
                  </tr>
                  <tr className="col2">
                    <td>Kiosk</td>
                  </tr>
                  <tr className="col3">
                    <td>192.168.1.10</td>
                  </tr>
                  <tr className="col4">
                    <td>
                      <li className="red">
                        <span>Ngưng hoạt động</span>
                      </li>
                    </td>
                  </tr>
                  <tr className="col5">
                    <td>
                      <li className="red">
                        <span>Mất kết nối</span>
                      </li>
                    </td>
                  </tr>
                  <tr className="col6">
                    <td>
                      Khám tim mạch, khám mắt...
                      <a href="">Xem thêm</a>
                    </td>
                  </tr>
                  <tr className="col7">
                    <td>
                      <a href="">Chi tiết</a>
                    </td>
                  </tr>
                  <tr className="col8">
                    <td>
                      <a href="">Cập nhật</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="devicemain-container-function">
            <button className="btn-add" onClick={(e) => handleClick(e)}>
              <AiFillPlusSquare />
              Thêm <br /> thiết bị
            </button>
          </div>
          <div className="devicemain-container-pagination">
            <Pagination defaultCurrent={1} total={100} />
          </div>
        </div>
      </section>
    </>
  );
};

export default DeviceMain;
