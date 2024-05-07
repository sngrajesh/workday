
import "./Sidebar.css";
import { navbarLinks } from "../../assets/Data";
import { Link } from "react-router-dom";
import React from "react";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <img
        className="sidebar-company-image"
        src="https://jobs.weekday.works/_next/static/media/logo-small.08826abd.png"
        alt="Profile"
      />
      <div className="sidebar-main-links">
        {Object.keys(navbarLinks).map((key, index) => {
          return (
            <div key={index} className="sidebar-link-container">
              <h2 className="sidebar-parent-link-heading">
                {navbarLinks[key].title}
              </h2>
              <ul>
                {navbarLinks[key].links.map((link, index) => {
                  return (
                    <li key={index}  
                      data-tooltip={link.title}
                    >
                      <Link to={link.path}>
                        {React.createElement(link.icon, {
                          className: "sidebar-icon",
                        })}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
      <img
        className="sidebar-profile-image"
        src="https://media.licdn.com/dms/image/D4D03AQEWwA19rENgaQ/profile-displayphoto-shrink_100_100/0/1703833741451?e=1715817600&v=beta&t=gUnUqCbmAMGRvNkhvkU4b0u3WNosGa4o3YHeHQpYryo"
        alt="Profile"
      />
    </div>
  );
};

export default Sidebar;
