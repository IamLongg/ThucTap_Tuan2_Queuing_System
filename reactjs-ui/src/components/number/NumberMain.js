import icondropdown from "../../assets/images/icondropdown.png";
import { FiSearch } from "react-icons/fi";
import { AiFillPlusSquare } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { DatePicker, Space } from "antd";
import { FaCaretRight } from "react-icons/fa";
import moment from "moment";
import { Pagination } from "antd";

const NumberMain = () => {
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
    navigate("/add/number");
  };

  const handleClickDetail = (e) => {
    e.preventDefault();
    navigate("/number/detail");
  };

  return (
    <>
      <section className="numbermain">
        <div className="numbermain-container">
          <h2 className="title">Quản lý cấp số</h2>
          <div className="flex-box">
            <div className="numbermain-container-box">
              <h3>Tên dịch vụ</h3>
              <div className="dropdown">
                <div className="dropdown-select">
                  <span className="select">Tất cả</span>
                  <img src={icondropdown} alt="" />
                </div>
                <div className="dropdown-list">
                  <div className="dropdown-list__item">Tất cả</div>
                  <div className="dropdown-list__item">Khám sản- Phụ sản</div>
                  <div className="dropdown-list__item">Khám răng hàm mặt</div>
                  <div className="dropdown-list__item">Khám tai mũi họng</div>
                </div>
              </div>
            </div>
            <div className="numbermain-container-box">
              <h3>Tình trạng</h3>
              <div className="dropdown">
                <div className="dropdown-select">
                  <span className="select">Tất cả</span>
                  <img src={icondropdown} alt="" />
                </div>
                <div className="dropdown-list">
                  <div className="dropdown-list__item">Tất cả</div>
                  <div className="dropdown-list__item">Đang sử dụng</div>
                  <div className="dropdown-list__item">Đang chờ</div>
                  <div className="dropdown-list__item">Đã sử dụng</div>
                  <div className="dropdown-list__item">Bỏ qua</div>
                </div>
              </div>
            </div>

            <div className="numbermain-container-box">
              <h3>Nguồn cấp</h3>
              <div className="dropdown">
                <div className="dropdown-select">
                  <span className="select">Tất cả</span>
                  <img src={icondropdown} alt="" />
                </div>
                <div className="dropdown-list">
                  <div className="dropdown-list__item">Tất cả</div>
                  <div className="dropdown-list__item">Kiosk</div>
                  <div className="dropdown-list__item">Hệ thống</div>
                </div>
              </div>
            </div>
            <div className="numbermain-container-box">
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
            <div className="numbermain-container-box">
              <h3>Từ khóa</h3>
              <div className="search">
                <input type="text" placeholder="Nhập từ khóa" />
                <span>
                  <FiSearch />
                </span>
              </div>
            </div>
          </div>
          <div className="numbermain-container-table">
            <div className="tbl-header">
              <table cellPadding="0" cellSpacing="0" border="0">
                <thead>
                  <tr className="col1">
                    <th>STT</th>
                  </tr>
                  <tr className="col2">
                    <th>Tên khách hàng</th>
                  </tr>
                  <tr className="col3">
                    <th>Tên dịch vụ</th>
                  </tr>
                  <tr className="col4">
                    <th>Thời gian cấp</th>
                  </tr>
                  <tr className="col5">
                    <th>Hạn sử dụng</th>
                  </tr>
                  <tr className="col6">
                    <th>Trạng thái</th>
                  </tr>
                  <tr className="col7">
                    <th>Nguồn cấp</th>
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
                    <td>2010001</td>
                  </tr>
                  <tr className="col2">
                    <td>Lê Huỳnh Ái Vân</td>
                  </tr>
                  <tr className="col3">
                    <td>Khám tim mạch</td>
                  </tr>
                  <tr className="col4">
                    <td>14:35 - 07/11/2021</td>
                  </tr>
                  <tr className="col5">
                    <td>14:35 - 12/11/2021</td>
                  </tr>
                  <tr className="col6">
                    <td>
                      <li className="red">
                        <span>Đang chờ</span>
                      </li>
                    </td>
                  </tr>
                  <tr className="col7">
                    <td>Kiosk</td>
                  </tr>
                  <tr className="col8">
                    <td>
                      <a href="" onClick={(e) => handleClickDetail(e)}>
                        Chi tiết
                      </a>
                    </td>
                  </tr>
                </tbody>
                <tbody className="active">
                  <tr className="col1">
                    <td>2010001</td>
                  </tr>
                  <tr className="col2">
                    <td>Lê Huỳnh Ái Vân</td>
                  </tr>
                  <tr className="col3">
                    <td>Khám tim mạch</td>
                  </tr>
                  <tr className="col4">
                    <td>14:35 - 07/11/2021</td>
                  </tr>
                  <tr className="col5">
                    <td>14:35 - 12/11/2021</td>
                  </tr>
                  <tr className="col6">
                    <td>
                      <li className="green">
                        <span>Đang chờ</span>
                      </li>
                    </td>
                  </tr>
                  <tr className="col7">
                    <td>Kiosk</td>
                  </tr>
                  <tr className="col8">
                    <td>
                      <a href="">Chi tiết</a>
                    </td>
                  </tr>
                </tbody>
                <tbody>
                  <tr className="col1">
                    <td>2010001</td>
                  </tr>
                  <tr className="col2">
                    <td>Lê Huỳnh Ái Vân</td>
                  </tr>
                  <tr className="col3">
                    <td>Khám tim mạch</td>
                  </tr>
                  <tr className="col4">
                    <td>14:35 - 07/11/2021</td>
                  </tr>
                  <tr className="col5">
                    <td>14:35 - 12/11/2021</td>
                  </tr>
                  <tr className="col6">
                    <td>
                      <li className="red">
                        <span>Đang chờ</span>
                      </li>
                    </td>
                  </tr>
                  <tr className="col7">
                    <td>Kiosk</td>
                  </tr>
                  <tr className="col8">
                    <td>
                      <a href="">Chi tiết</a>
                    </td>
                  </tr>
                </tbody>
                <tbody className="active">
                  <tr className="col1">
                    <td>2010001</td>
                  </tr>
                  <tr className="col2">
                    <td>Lê Huỳnh Ái Vân</td>
                  </tr>
                  <tr className="col3">
                    <td>Khám tim mạch</td>
                  </tr>
                  <tr className="col4">
                    <td>14:35 - 07/11/2021</td>
                  </tr>
                  <tr className="col5">
                    <td>14:35 - 12/11/2021</td>
                  </tr>
                  <tr className="col6">
                    <td>
                      <li className="green">
                        <span>Đang chờ</span>
                      </li>
                    </td>
                  </tr>
                  <tr className="col7">
                    <td>Kiosk</td>
                  </tr>
                  <tr className="col8">
                    <td>
                      <a href="">Chi tiết</a>
                    </td>
                  </tr>
                </tbody>
                <tbody>
                  <tr className="col1">
                    <td>2010001</td>
                  </tr>
                  <tr className="col2">
                    <td>Lê Huỳnh Ái Vân</td>
                  </tr>
                  <tr className="col3">
                    <td>Khám tim mạch</td>
                  </tr>
                  <tr className="col4">
                    <td>14:35 - 07/11/2021</td>
                  </tr>
                  <tr className="col5">
                    <td>14:35 - 12/11/2021</td>
                  </tr>
                  <tr className="col6">
                    <td>
                      <li className="red">
                        <span>Đang chờ</span>
                      </li>
                    </td>
                  </tr>
                  <tr className="col7">
                    <td>Kiosk</td>
                  </tr>
                  <tr className="col8">
                    <td>
                      <a href="">Chi tiết</a>
                    </td>
                  </tr>
                </tbody>
                <tbody className="active">
                  <tr className="col1">
                    <td>2010001</td>
                  </tr>
                  <tr className="col2">
                    <td>Lê Huỳnh Ái Vân</td>
                  </tr>
                  <tr className="col3">
                    <td>Khám tim mạch</td>
                  </tr>
                  <tr className="col4">
                    <td>14:35 - 07/11/2021</td>
                  </tr>
                  <tr className="col5">
                    <td>14:35 - 12/11/2021</td>
                  </tr>
                  <tr className="col6">
                    <td>
                      <li className="green">
                        <span>Đang chờ</span>
                      </li>
                    </td>
                  </tr>
                  <tr className="col7">
                    <td>Kiosk</td>
                  </tr>
                  <tr className="col8">
                    <td>
                      <a href="">Chi tiết</a>
                    </td>
                  </tr>
                </tbody>
                <tbody>
                  <tr className="col1">
                    <td>2010001</td>
                  </tr>
                  <tr className="col2">
                    <td>Lê Huỳnh Ái Vân</td>
                  </tr>
                  <tr className="col3">
                    <td>Khám tim mạch</td>
                  </tr>
                  <tr className="col4">
                    <td>14:35 - 07/11/2021</td>
                  </tr>
                  <tr className="col5">
                    <td>14:35 - 12/11/2021</td>
                  </tr>
                  <tr className="col6">
                    <td>
                      <li className="red">
                        <span>Đang chờ</span>
                      </li>
                    </td>
                  </tr>
                  <tr className="col7">
                    <td>Kiosk</td>
                  </tr>
                  <tr className="col8">
                    <td>
                      <a href="">Chi tiết</a>
                    </td>
                  </tr>
                </tbody>
                <tbody className="active">
                  <tr className="col1">
                    <td>2010001</td>
                  </tr>
                  <tr className="col2">
                    <td>Lê Huỳnh Ái Vân</td>
                  </tr>
                  <tr className="col3">
                    <td>Khám tim mạch</td>
                  </tr>
                  <tr className="col4">
                    <td>14:35 - 07/11/2021</td>
                  </tr>
                  <tr className="col5">
                    <td>14:35 - 12/11/2021</td>
                  </tr>
                  <tr className="col6">
                    <td>
                      <li className="green">
                        <span>Đang chờ</span>
                      </li>
                    </td>
                  </tr>
                  <tr className="col7">
                    <td>Kiosk</td>
                  </tr>
                  <tr className="col8">
                    <td>
                      <a href="">Chi tiết</a>
                    </td>
                  </tr>
                </tbody>
                <tbody>
                  <tr className="col1">
                    <td>2010001</td>
                  </tr>
                  <tr className="col2">
                    <td>Lê Huỳnh Ái Vân</td>
                  </tr>
                  <tr className="col3">
                    <td>Khám tim mạch</td>
                  </tr>
                  <tr className="col4">
                    <td>14:35 - 07/11/2021</td>
                  </tr>
                  <tr className="col5">
                    <td>14:35 - 12/11/2021</td>
                  </tr>
                  <tr className="col6">
                    <td>
                      <li className="red">
                        <span>Đang chờ</span>
                      </li>
                    </td>
                  </tr>
                  <tr className="col7">
                    <td>Kiosk</td>
                  </tr>
                  <tr className="col8">
                    <td>
                      <a href="">Chi tiết</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="numbermain-container-function">
            <button className="btn-add" onClick={(e) => handleClick(e)}>
              <AiFillPlusSquare />
              Cấp <br /> số mới
            </button>
          </div>
          <div className="numbermain-container-pagination">
            <Pagination defaultCurrent={1} total={100} />
          </div>
        </div>
      </section>
    </>
  );
};

export default NumberMain;
