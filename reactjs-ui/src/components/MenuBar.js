import logo from "../assets/images/Logoalta.png";
import icondashboard from "../assets/images/icondashboard.png";
import icondevice from "../assets/images/icondevice.png";
import iconmore from "../assets/images/iconmore.png";
import iconnumber from "../assets/images/iconnumber.png";
import iconreport from "../assets/images/iconreport.png";
import iconservice from "../assets/images/iconservice.png";
import iconsetting from "../assets/images/iconsetting.png";
import iconexit from "../assets/images/iconexit.png";
import { Link, NavLink } from "react-router-dom";
const Menubar = () => {
  return (
    <>
      <section className="menubar" id="menubar">
        <div className="menubar-main">
          <img src={logo} alt="" className="imgmenubar" />
          <NavLink
            className={({ isActive }) =>
              isActive ? "menubar-main-box active" : "menubar-main-box"
            }
            to="/dashboard"
            exact="true"
          >
            <img src={icondashboard} alt="" className="icondashboard" />
            Dashboard
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive ? "menubar-main-box active" : "menubar-main-box"
            }
            to="/device"
            exact="true"
          >
            <img src={icondevice} alt="" className="icondevice" />
            Thiết bị
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "menubar-main-box active" : "menubar-main-box"
            }
            to="/service"
            exact="true"
          >
            <img src={iconservice} alt="" className="iconservice" />
            Dịch vụ
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "menubar-main-box active" : "menubar-main-box"
            }
            to="/number"
            exact="true"
          >
            <img src={iconnumber} alt="" className="iconnumber" />
            Cấp số
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "menubar-main-box active" : "menubar-main-box"
            }
            to="/report"
            exact="true"
          >
            <img src={iconreport} alt="" className="iconreport" />
            Báo cáo
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "menubar-main-box active setting"
                : "menubar-main-box setting"
            }
            to="/manage-role"
            exact="true"
          >
            <img src={iconsetting} alt="" className="iconsetting" />
            Cài đặt hệ thống
            <img src={iconmore} alt="" className="iconmore" />
            <div className="navigation">
              <ul>
                <li>
                  <NavLink
                    className={({ isActive }) => (isActive ? "active " : "")}
                    to="/manage-role"
                    exact="true"
                  >
                    Quản lý vai trò
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) => (isActive ? "active " : "")}
                    to="/manage-user"
                    exact="true"
                  >
                    Quản lý tài khoản
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) => (isActive ? "active " : "")}
                    to="/history"
                    exact="true"
                  >
                    Nhật ký hoạt động
                  </NavLink>
                </li>
              </ul>
            </div>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "menubar-main-box active" : "menubar-main-box"
            }
            to="/"
            exact="true"
          >
            <img src={iconexit} alt="" className="iconexit" />
            Đăng xuất
          </NavLink>
        </div>
      </section>
    </>
  );
};

export default Menubar;
