import "./Sidebar.css";
import { navbarLinks } from "../../assets/Data";
import { Link } from "react-router-dom";
import React from "react";

/*

export const navbarLinks = {
  job: {
    title: "GET JOBS",
    hiddenTitle: "LOOKING FOR A JOB",
    links: [
      {
        title: "My applied jobs",
        path: "/jobs",
        icon: UserIcon ,
      },
      {
        title: "Search jobs",
        path: "/jobs",
        icon: SearchIcon ,
      },
      {
        title: "Search salary",
        path: "/jobs",
        icon: CurrencyIocnINR ,
      },
      {
        title: "Ask for referral",
        path: "/jobs",
        icon: UserPlusIcon ,
      },
    ],
  },

  refer: {
    title: "REFER",
    hiddenTitle: "RECOMMEND AND EARN",
    links: [
      {
        title: "Recommend from shortlist",
        path: "/jobs",
        icon: ThumbsUpIcon ,
      },
      {
        title: "Recommend to specific company",
        path: "/jobs",
        icon: TaskIcon ,
      },
      {
        title: "Refer this extension",
        path: "/jobs",
        icon: ShareIcon ,
      },
    ],
  },
};

*/
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
                    <li key={index}>
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
