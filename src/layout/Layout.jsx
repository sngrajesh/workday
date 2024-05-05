import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/sidebar/Sidebar";

const Layout = () => {
  return (
    <div className="layout">
      <Navbar />
      <div className="navbar"></div>
      <div className="content">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
