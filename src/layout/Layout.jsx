import "./Layout.css";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/sidebar/Sidebar";

const Layout = () => {
  return (
    <div className="layout">
      <Sidebar />
    <div className="layout-content">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
