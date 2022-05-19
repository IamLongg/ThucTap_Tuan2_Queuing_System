import React from "react";
import icondropdown from "../../assets/images/icondropdown.png";
import { FiSearch } from "react-icons/fi";
import { AiOutlineRollback } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { DatePicker, Space } from "antd";
import { FaCaretRight } from "react-icons/fa";
import moment from "moment";
import { Pagination } from "antd";

const ServiceDetail = () => {
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

  const handleBack = (e) => {
    e.preventDefault();
    navigate("/service");
  };
  return (
    <>
      <section className="serviceDetail">
        <h2 className="title">Quản lý dịch vụ</h2>
        <div className="serviceDetail-container">
          <div className="serviceDetail-container-info">
            <h3 className="heading">Thông tin dịch vụ</h3>
            <div className="serviceDetail-container-info-select">
              <div className="block">
                <div className="text">
                  <p>Mã dịch vụ:</p>
                </div>
                <div className="sub-text">
                  <p>201</p>
                </div>
              </div>
              <div className="block">
                <div className="text">
                  <p>Tên dịch vụ:</p>
                </div>
                <div className="sub-text">
                  <p>Khám tim mạch</p>
                </div>
              </div>
              <div className="block">
                <div className="text">
                  <p>Mô tả:</p>
                </div>
                <div className="sub-text">
                  <p>Chuyên các bệnh lý về tim</p>
                </div>
              </div>
            </div>
            <h3 className="heading">Quy tắc cấp số</h3>
            <div className="serviceDetail-container-info-select">
              <div className="block">
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
                <div className="text">
                  <p>Prefix:</p>
                </div>
                <div className="input-text">
                  <input type="text" placeholder="0001" />
                </div>
              </div>
              <div className="block">
                <div className="text">
                  <p>Surfix:</p>
                </div>
                <div className="input-text">
                  <input type="text" placeholder="0001" />
                </div>
              </div>
              <div className="block">
                <div className="text">
                  <p>Reset mỗi ngày</p>
                </div>
              </div>
            </div>
          </div>
          <div className="serviceDetail-container-sub-info">
            <div className="flex-box">
              <div className="serviceDetail-container-sub-info-box">
                <h3>Trạng thái</h3>
                <div className="dropdown">
                  <div className="dropdown-select">
                    <span className="select">Tất cả</span>
                    <img src={icondropdown} alt="" />
                  </div>
                  <div className="dropdown-list">
                    <div className="dropdown-list__item">Tất cả</div>
                    <div className="dropdown-list__item">Đã hoàn thành</div>
                    <div className="dropdown-list__item">Đã thực hiện</div>
                    <div className="dropdown-list__item">Vắng</div>
                  </div>
                </div>
              </div>
              <div className="serviceDetail-container-sub-info-box">
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
              <div className="serviceDetail-container-sub-info-box">
                <h3>Từ khóa</h3>
                <div className="search">
                  <input type="text" placeholder="Nhập từ khóa" />
                  <span>
                    <FiSearch />
                  </span>
                </div>
              </div>
            </div>
            <div className="serviceDetail-container-sub-info-table">
              <div className="tbl-header">
                <table cellPadding="0" cellSpacing="0" border="0">
                  <thead>
                    <tr className="col1">
                      <th>Số thứ tự</th>
                    </tr>
                    <tr className="col2">
                      <th>Trạng thái</th>
                    </tr>
                  </thead>
                </table>
              </div>
              <div className="tbl-content">
                <table cellPadding="0" cellSpacing="0" border="0">
                  <tbody>
                    <tr className="col1">
                      <td>2010001</td>
                    </tr>
                    <tr className="col2">
                      <td>
                        <li className="green">
                          <span>Đã hoàn thành</span>
                        </li>
                      </td>
                    </tr>
                  </tbody>
                  <tbody className="active">
                    <tr className="col1">
                      <td>2010001</td>
                    </tr>
                    <tr className="col2">
                      <td>
                        <li className="green">
                          <span>Đã hoàn thành</span>
                        </li>
                      </td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr className="col1">
                      <td>2010001</td>
                    </tr>
                    <tr className="col2">
                      <td>
                        <li className="green">
                          <span>Đã hoàn thành</span>
                        </li>
                      </td>
                    </tr>
                  </tbody>
                  <tbody className="active">
                    <tr className="col1">
                      <td>2010001</td>
                    </tr>
                    <tr className="col2">
                      <td>
                        <li className="green">
                          <span>Đã hoàn thành</span>
                        </li>
                      </td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr className="col1">
                      <td>2010001</td>
                    </tr>
                    <tr className="col2">
                      <td>
                        <li className="green">
                          <span>Đã hoàn thành</span>
                        </li>
                      </td>
                    </tr>
                  </tbody>
                  <tbody className="active">
                    <tr className="col1">
                      <td>2010001</td>
                    </tr>
                    <tr className="col2">
                      <td>
                        <li className="green">
                          <span>Đã hoàn thành</span>
                        </li>
                      </td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr className="col1">
                      <td>2010001</td>
                    </tr>
                    <tr className="col2">
                      <td>
                        <li className="green">
                          <span>Đã hoàn thành</span>
                        </li>
                      </td>
                    </tr>
                  </tbody>
                  <tbody className="active">
                    <tr className="col1">
                      <td>2010001</td>
                    </tr>
                    <tr className="col2">
                      <td>
                        <li className="green">
                          <span>Đã hoàn thành</span>
                        </li>
                      </td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr className="col1">
                      <td>2010001</td>
                    </tr>
                    <tr className="col2">
                      <td>
                        <li className="green">
                          <span>Đã hoàn thành</span>
                        </li>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="serviceDetail-container-sub-info-function">
              <button className="btn-add" onClick={(e) => handleClick(e)}>
                <MdModeEditOutline />
                Cập nhật <br /> danh sách
              </button>
              <button className="btn-add" onClick={(e) => handleBack(e)}>
                <AiOutlineRollback />
                Quay lại
              </button>
            </div>
            <div className="serviceDetail-container-sub-info-pagination">
              <Pagination defaultCurrent={1} total={100} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetail;
