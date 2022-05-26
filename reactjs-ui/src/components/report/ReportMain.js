import React from "react";
import { BsFillFileEarmarkArrowDownFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { DatePicker, Space } from "antd";
import { FaCaretRight } from "react-icons/fa";
import moment from "moment";

import { Pagination } from "antd";
const ReportMain = () => {
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
  };

  const handleClickDetail = (e) => {
    e.preventDefault();
    navigate("/service/detail");
  };
  return (
    <>
      <section className="report">
        <div className="report-container">
          <div className="flex-box">
            <div className="report-container-box">
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
          </div>
          <div className="report-container-table">
            <div className="tbl-header">
              <table cellPadding="0" cellSpacing="0" border="0">
                <thead>
                  <tr className="col1">
                    <th>Số thứ tự</th>
                  </tr>
                  <tr className="col2">
                    <th>Tên dịch vụ</th>
                  </tr>
                  <tr className="col3">
                    <th>Thời gian cấp</th>
                  </tr>
                  <tr className="col4">
                    <th>Trạng trạng</th>
                  </tr>
                  <tr className="col5">
                    <th>Nguồn cấp</th>
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
                    <td>Khám tim mạch</td>
                  </tr>
                  <tr className="col3">
                    <td>07:20 - 07/10/2021</td>
                  </tr>
                  <tr className="col4">
                    <td>
                      <li className="green">
                        <span>Đang chờ</span>
                      </li>
                    </td>
                  </tr>
                  <tr className="col5">
                    <td>Kiosk</td>
                  </tr>
                </tbody>
                <tbody className="active">
                  <tr className="col1">
                    <td>2010001</td>
                  </tr>
                  <tr className="col2">
                    <td>Khám tim mạch</td>
                  </tr>
                  <tr className="col3">
                    <td>07:20 - 07/10/2021</td>
                  </tr>
                  <tr className="col4">
                    <td>
                      <li className="green">
                        <span>Đang chờ</span>
                      </li>
                    </td>
                  </tr>
                  <tr className="col5">
                    <td>Kiosk</td>
                  </tr>
                </tbody>
                <tbody>
                  <tr className="col1">
                    <td>2010001</td>
                  </tr>
                  <tr className="col2">
                    <td>Khám tim mạch</td>
                  </tr>
                  <tr className="col3">
                    <td>07:20 - 07/10/2021</td>
                  </tr>
                  <tr className="col4">
                    <td>
                      <li className="green">
                        <span>Đang chờ</span>
                      </li>
                    </td>
                  </tr>
                  <tr className="col5">
                    <td>Kiosk</td>
                  </tr>
                </tbody>
                <tbody className="active">
                  <tr className="col1">
                    <td>2010001</td>
                  </tr>
                  <tr className="col2">
                    <td>Khám tim mạch</td>
                  </tr>
                  <tr className="col3">
                    <td>07:20 - 07/10/2021</td>
                  </tr>
                  <tr className="col4">
                    <td>
                      <li className="green">
                        <span>Đang chờ</span>
                      </li>
                    </td>
                  </tr>
                  <tr className="col5">
                    <td>Kiosk</td>
                  </tr>
                </tbody>
                <tbody>
                  <tr className="col1">
                    <td>2010001</td>
                  </tr>
                  <tr className="col2">
                    <td>Khám tim mạch</td>
                  </tr>
                  <tr className="col3">
                    <td>07:20 - 07/10/2021</td>
                  </tr>
                  <tr className="col4">
                    <td>
                      <li className="green">
                        <span>Đang chờ</span>
                      </li>
                    </td>
                  </tr>
                  <tr className="col5">
                    <td>Kiosk</td>
                  </tr>
                </tbody>
                <tbody className="active">
                  <tr className="col1">
                    <td>2010001</td>
                  </tr>
                  <tr className="col2">
                    <td>Khám tim mạch</td>
                  </tr>
                  <tr className="col3">
                    <td>07:20 - 07/10/2021</td>
                  </tr>
                  <tr className="col4">
                    <td>
                      <li className="green">
                        <span>Đang chờ</span>
                      </li>
                    </td>
                  </tr>
                  <tr className="col5">
                    <td>Kiosk</td>
                  </tr>
                </tbody>
                <tbody>
                  <tr className="col1">
                    <td>2010001</td>
                  </tr>
                  <tr className="col2">
                    <td>Khám tim mạch</td>
                  </tr>
                  <tr className="col3">
                    <td>07:20 - 07/10/2021</td>
                  </tr>
                  <tr className="col4">
                    <td>
                      <li className="green">
                        <span>Đang chờ</span>
                      </li>
                    </td>
                  </tr>
                  <tr className="col5">
                    <td>Kiosk</td>
                  </tr>
                </tbody>
                <tbody className="active">
                  <tr className="col1">
                    <td>2010001</td>
                  </tr>
                  <tr className="col2">
                    <td>Khám tim mạch</td>
                  </tr>
                  <tr className="col3">
                    <td>07:20 - 07/10/2021</td>
                  </tr>
                  <tr className="col4">
                    <td>
                      <li className="green">
                        <span>Đang chờ</span>
                      </li>
                    </td>
                  </tr>
                  <tr className="col5">
                    <td>Kiosk</td>
                  </tr>
                </tbody>
                <tbody>
                  <tr className="col1">
                    <td>2010001</td>
                  </tr>
                  <tr className="col2">
                    <td>Khám tim mạch</td>
                  </tr>
                  <tr className="col3">
                    <td>07:20 - 07/10/2021</td>
                  </tr>
                  <tr className="col4">
                    <td>
                      <li className="green">
                        <span>Đang chờ</span>
                      </li>
                    </td>
                  </tr>
                  <tr className="col5">
                    <td>Kiosk</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="report-container-function">
            <button className="btn-add" onClick={(e) => handleClick(e)}>
              <BsFillFileEarmarkArrowDownFill color="#ff9138" />
              Tải <br /> xuống
            </button>
          </div>
          <div className="report-container-pagination">
            <Pagination defaultCurrent={1} total={100} />
          </div>
        </div>
      </section>
    </>
  );
};

export default ReportMain;
