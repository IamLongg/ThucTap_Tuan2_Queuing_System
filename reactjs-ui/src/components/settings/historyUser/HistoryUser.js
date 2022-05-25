import React from "react";
import { DatePicker, Space } from "antd";
import { FaCaretRight } from "react-icons/fa";
import moment from "moment";
import { FiSearch } from "react-icons/fi";
import { Pagination } from "antd";

const HistoryUser = () => {
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
  return (
    <>
      <section className="history-user">
        <div className="history-user-container">
          <div className="flex-box">
            <div className="history-user-container-box">
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
            <div className="history-user-container-box">
              <h3>Từ khóa</h3>
              <div className="search">
                <input type="text" placeholder="Nhập từ khóa" />
                <span>
                  <FiSearch />
                </span>
              </div>
            </div>
          </div>
          <div className="history-user-container-table">
            <div className="tbl-header">
              <table cellPadding="0" cellSpacing="0" border="0">
                <thead>
                  <tr className="col1">
                    <th>Tên đăng nhập</th>
                  </tr>
                  <tr className="col2">
                    <th>Thời gian tác động</th>
                  </tr>
                  <tr className="col3">
                    <th>IP thực hiện</th>
                  </tr>
                  <tr className="col4">
                    <th>Thao tác thực hiện</th>
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
                    <td>01/12/2021 15:12:17</td>
                  </tr>
                  <tr className="col3">
                    <td>192.168.3.1</td>
                  </tr>
                  <tr className="col4">
                    <td>Cập nhật thông tin dịch vụ</td>
                  </tr>
                </tbody>
                <tbody className="active">
                  <tr className="col1">
                    <td>tuyetnguyen@12</td>
                  </tr>
                  <tr className="col2">
                    <td>01/12/2021 15:12:17</td>
                  </tr>
                  <tr className="col3">
                    <td>192.168.3.1</td>
                  </tr>
                  <tr className="col4">
                    <td>Cập nhật thông tin dịch vụ</td>
                  </tr>
                </tbody>
                <tbody>
                  <tr className="col1">
                    <td>tuyetnguyen@12</td>
                  </tr>
                  <tr className="col2">
                    <td>01/12/2021 15:12:17</td>
                  </tr>
                  <tr className="col3">
                    <td>192.168.3.1</td>
                  </tr>
                  <tr className="col4">
                    <td>Cập nhật thông tin dịch vụ</td>
                  </tr>
                </tbody>
                <tbody className="active">
                  <tr className="col1">
                    <td>tuyetnguyen@12</td>
                  </tr>
                  <tr className="col2">
                    <td>01/12/2021 15:12:17</td>
                  </tr>
                  <tr className="col3">
                    <td>192.168.3.1</td>
                  </tr>
                  <tr className="col4">
                    <td>Cập nhật thông tin dịch vụ</td>
                  </tr>
                </tbody>
                <tbody>
                  <tr className="col1">
                    <td>tuyetnguyen@12</td>
                  </tr>
                  <tr className="col2">
                    <td>01/12/2021 15:12:17</td>
                  </tr>
                  <tr className="col3">
                    <td>192.168.3.1</td>
                  </tr>
                  <tr className="col4">
                    <td>Cập nhật thông tin dịch vụ</td>
                  </tr>
                </tbody>
                <tbody className="active">
                  <tr className="col1">
                    <td>tuyetnguyen@12</td>
                  </tr>
                  <tr className="col2">
                    <td>01/12/2021 15:12:17</td>
                  </tr>
                  <tr className="col3">
                    <td>192.168.3.1</td>
                  </tr>
                  <tr className="col4">
                    <td>Cập nhật thông tin dịch vụ</td>
                  </tr>
                </tbody>
                <tbody>
                  <tr className="col1">
                    <td>tuyetnguyen@12</td>
                  </tr>
                  <tr className="col2">
                    <td>01/12/2021 15:12:17</td>
                  </tr>
                  <tr className="col3">
                    <td>192.168.3.1</td>
                  </tr>
                  <tr className="col4">
                    <td>Cập nhật thông tin dịch vụ</td>
                  </tr>
                </tbody>
                <tbody className="active">
                  <tr className="col1">
                    <td>tuyetnguyen@12</td>
                  </tr>
                  <tr className="col2">
                    <td>01/12/2021 15:12:17</td>
                  </tr>
                  <tr className="col3">
                    <td>192.168.3.1</td>
                  </tr>
                  <tr className="col4">
                    <td>Cập nhật thông tin dịch vụ</td>
                  </tr>
                </tbody>
                <tbody>
                  <tr className="col1">
                    <td>tuyetnguyen@12</td>
                  </tr>
                  <tr className="col2">
                    <td>01/12/2021 15:12:17</td>
                  </tr>
                  <tr className="col3">
                    <td>192.168.3.1</td>
                  </tr>
                  <tr className="col4">
                    <td>Cập nhật thông tin dịch vụ</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="history-user-container-pagination">
            <Pagination defaultCurrent={1} total={100} />
          </div>
        </div>
      </section>
    </>
  );
};

export default HistoryUser;
