import React from "react";
import icondropdown from "../../assets/images/icondropdown.png";
import { FiSearch } from "react-icons/fi";
import { AiFillPlusSquare } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { DatePicker, Space } from "antd";
import { FaCaretRight } from "react-icons/fa";
import moment from "moment";

import { Pagination } from "antd";

const ServiceMain = () => {
  const { RangePicker } = DatePicker;

  const dateFormat = "YYYY/MM/DD";
  const weekFormat = "MM/DD";
  const monthFormat = "YYYY/MM";

  const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY"];

  const customFormat = (value) => `custom format: ${value.format(dateFormat)}`;

  const customWeekStartEndFormat = (value) =>
    `${moment(value).startOf("week").format(weekFormat)} ~ ${moment(value)
      .endOf("week")
      .format(weekFormat)}`;
  let navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    navigate("/add/service");
  };

  const handleClickDetail = (e) => {
    e.preventDefault();
    navigate("/service/detail");
  };

  return (
    <>
      <section className="servicemain">
        <div className="servicemain-container">
          <h2 className="title">Quản lý dịch vụ</h2>
          <div className="flex-box">
            <div className="servicemain-container-box">
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
            <div className="servicemain-container-box">
              <h3>Chọn thời gian</h3>
              <Space direction="vertical" size={12}>
                <DatePicker
                  defaultValue={moment("10/10/2021", dateFormatList[0])}
                  format={dateFormatList}
                />
              </Space>
              <span>
                <FaCaretRight />
              </span>
              <Space direction="vertical" size={12}>
                <DatePicker
                  defaultValue={moment("18/10/2021", dateFormatList[0])}
                  format={dateFormatList}
                />
              </Space>
            </div>
            <div className="servicemain-container-box">
              <h3>Từ khóa</h3>
              <div className="search">
                <input type="text" placeholder="Nhập từ khóa" />
                <span>
                  <FiSearch />
                </span>
              </div>
            </div>
          </div>
          <div className="servicemain-container-table">
            <div className="tbl-header">
              <table cellPadding="0" cellSpacing="0" border="0">
                <thead>
                  <tr className="col1">
                    <th>Mã dịch vụ</th>
                  </tr>
                  <tr className="col2">
                    <th>Tên dịch vụ</th>
                  </tr>
                  <tr className="col3">
                    <th>Mô tả</th>
                  </tr>
                  <tr className="col4">
                    <th>Trạng thái hoạt động</th>
                  </tr>

                  <tr className="col5">
                    <th></th>
                  </tr>
                  <tr className="col6">
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
                    <td>Mô tả dịch vụ 1</td>
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
                      <a href="" onClick={(e) => handleClickDetail(e)}>
                        Chi tiết
                      </a>
                    </td>
                  </tr>
                  <tr className="col6">
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
                    <td>Mô tả dịch vụ 1</td>
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
                      <a href="" onClick={(e) => handleClickDetail(e)}>
                        Chi tiết
                      </a>
                    </td>
                  </tr>
                  <tr className="col6">
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
                    <td>Mô tả dịch vụ 1</td>
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
                      <a href="" onClick={(e) => handleClickDetail(e)}>
                        Chi tiết
                      </a>
                    </td>
                  </tr>
                  <tr className="col6">
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
                    <td>Mô tả dịch vụ 1</td>
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
                      <a href="" onClick={(e) => handleClickDetail(e)}>
                        Chi tiết
                      </a>
                    </td>
                  </tr>
                  <tr className="col6">
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
                    <td>Mô tả dịch vụ 1</td>
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
                      <a href="" onClick={(e) => handleClickDetail(e)}>
                        Chi tiết
                      </a>
                    </td>
                  </tr>
                  <tr className="col6">
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
                    <td>Mô tả dịch vụ 1</td>
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
                      <a href="" onClick={(e) => handleClickDetail(e)}>
                        Chi tiết
                      </a>
                    </td>
                  </tr>
                  <tr className="col6">
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
                    <td>Mô tả dịch vụ 1</td>
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
                      <a href="" onClick={(e) => handleClickDetail(e)}>
                        Chi tiết
                      </a>
                    </td>
                  </tr>
                  <tr className="col6">
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
                    <td>Mô tả dịch vụ 1</td>
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
                      <a href="" onClick={(e) => handleClickDetail(e)}>
                        Chi tiết
                      </a>
                    </td>
                  </tr>
                  <tr className="col6">
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
                    <td>Mô tả dịch vụ 1</td>
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
                      <a href="" onClick={(e) => handleClickDetail(e)}>
                        Chi tiết
                      </a>
                    </td>
                  </tr>
                  <tr className="col6">
                    <td>
                      <a href="">Cập nhật</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="servicemain-container-function">
            <button className="btn-add" onClick={(e) => handleClick(e)}>
              <AiFillPlusSquare />
              Thêm <br /> dịch vụ
            </button>
          </div>
          <div className="servicemain-container-pagination">
            <Pagination defaultCurrent={1} total={100} />
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceMain;
