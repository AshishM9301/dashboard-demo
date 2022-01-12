import React from "react";

import { useLocation } from "react-router-dom";

import logo from "../../assets/images/Logo.svg";
import DashboardIcon from "../../assets/images/DashboardIcon.svg";
import CustomersIcon from "../../assets/images/CustomersIcon.svg";
import OrdersIcon from "../../assets/images/OrdersIcon.svg";
import CampaignsIcon from "../../assets/images/CampaignsIcon.svg";
import TeamIcon from "../../assets/images/TeamIcon.svg";
import MessageIcon from "../../assets/images/MessageIcon.svg";
import TaskIcon from "../../assets/images/TaskIcon.svg";
import ApplicationsIcon from "../../assets/images/ApplicationsIcon.svg";
import SettingsIcon from "../../assets/images/SettingsIcon.svg";

function SideBar() {
  var menus = [
    { id: 1, icon: DashboardIcon, name: "Dashboard", link: "/" },
    { id: 2, icon: CustomersIcon, name: "Customers", link: "/customers" },
    { id: 3, icon: OrdersIcon, name: "Orders", link: "/orders" },
    { id: 4, icon: CampaignsIcon, name: "Campaigns", link: "/campaigns" },
    { id: 5, icon: TeamIcon, name: "Team", link: "/team" },
    { id: 6, icon: MessageIcon, name: "Message", link: "/message" },
    { id: 7, icon: TaskIcon, name: "Task", link: "/task" },
    {
      id: 8,
      icon: ApplicationsIcon,
      name: "Applications",
      link: "/applications",
    },
    { id: 9, icon: SettingsIcon, name: "Settings", link: "/settings" },
  ];

  var location = useLocation();

  console.log(location.pathname);

  return (
    <div className="sticky" style={{ backgroundColor: "var(--blue-gray-800)" }}>
      <div className="xl:w-80 lg:w-60 w-48 min-h-screen  p-4">
        <div className="logo px-2">
          <img src={logo} alt="logo" />
        </div>

        <div className="mt-10 pt-8" style={{ color: "var(--blue-gray-200)" }}>
          {menus.map((card) => (
            <div
              key={card.id}
              className={` card mx-3 ${
                card.link === location.pathname ? "nav-active" : null
              } flex px-4 py-2 rounded-sm items-center mb-2 cursor-pointer`}
            >
              <div className="icon">
                <img src={card.icon} alt={card.name} className="w-8" />
              </div>
              <div className="text-xl font-medium ml-4 md:visible invisible">
                {card.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SideBar;
