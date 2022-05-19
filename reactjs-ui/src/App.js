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
import ReportPage from "./components/views/ReportPage";
import SettingPage from "./components/views/SettingPage";
import AddServicePage from "./components/views/AddServicePage";
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
          <Route path="/report" element={<ReportPage />} />
          <Route path="/setting" element={<SettingPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
