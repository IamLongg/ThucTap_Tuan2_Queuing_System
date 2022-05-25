import "./styles/app.scss";
import { Routes, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import ForgotPassword from "./components/auth/ForgotPassword";
import ResetPassword from "./components/auth/ResetPassword";
import HomePage from "./components/views/HomePage";
import DashboardPage from "./components/views/DashboardPage";
import DevicePage from "./components/views/DevicePage";
import ManageDevicePage from "./components/views/ManageDevicePage";
import DeviceDetailPage from "./components/views/DeviceDetailPage";
import ServicePage from "./components/views/ServicePage";
import ServiceDetailPage from "./components/views/ServiceDetailPage";
import NumberPage from "./components/views/NumberPage";
import AddNewNumberPage from "./components/views/AddNewNumberPage";
import NumberDetailPage from "./components/views/NumberDetailPage";
import ReportPage from "./components/views/ReportPage";
import SettingPage from "./components/views/SettingPage";
import AddRolePage from "./components/views/AddRolePage";
import AddServicePage from "./components/views/AddServicePage";
import ManageUserPage from "./components/views/ManageUserPage";
import AddUserPage from "./components/views/AddUserPage";
import HistoryUserPage from "./components/views/HistoryUserPage";
function App() {
  return (
    <div className="app">
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/forgotpass" element={<ForgotPassword />} />
          <Route path="/resetpassword" element={<ResetPassword />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/device" element={<DevicePage />} />
          <Route path="/device/manage" element={<ManageDevicePage />} />
          <Route path="/device/detail" element={<DeviceDetailPage />} />
          <Route path="/service" element={<ServicePage />} />
          <Route path="/add/service" element={<AddServicePage />} />
          <Route path="/service/detail" element={<ServiceDetailPage />} />
          <Route path="/number" element={<NumberPage />} />
          <Route path="/add/number" element={<AddNewNumberPage />} />
          <Route path="/number/detail" element={<NumberDetailPage />} />
          <Route path="/report" element={<ReportPage />} />
          <Route path="/manage-role" element={<SettingPage />} />
          <Route path="/add/manage-role" element={<AddRolePage />} />
          <Route path="/manage-user" element={<ManageUserPage />} />
          <Route path="/add/manage-user" element={<AddUserPage />} />
          <Route path="/history" element={<HistoryUserPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
