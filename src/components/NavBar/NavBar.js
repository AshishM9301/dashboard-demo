import React from "react";

import {
  RiSearch2Line,
  RiErrorWarningFill,
  RiArrowDownSLine,
} from "react-icons/ri";
import { IoIosChatbubbles } from "react-icons/io";
import { GiArrowFlights } from "react-icons/gi";

function NavBar() {
  var navMenus = [
    {
      icon: (
        <RiSearch2Line
          fontSize={20}
          className="mx-auto"
          color="var(--blue-gray-400)"
        />
      ),
    },
    {
      icon: (
        <IoIosChatbubbles
          fontSize={20}
          className="mx-auto"
          color="var(--blue-gray-400)"
        />
      ),
    },
    {
      icon: (
        <RiErrorWarningFill
          fontSize={20}
          className="mx-auto"
          color="var(--blue-gray-400)"
        />
      ),
    },
  ];

  return (
    <div
      className="bg-white "
      style={{ borderBottom: "2px solid var(--blue-gray-200)" }}
    >
      <div className="w-[96%] mx-auto flex justify-end py-4">
        <div
          className="border-r-2 flex mr-3"
          style={{ borderColor: "var(--blue-gray-200)" }}
        >
          {navMenus.map((button) => (
            <div
              className="rounded-full w-10 h-10 flex justify-center items-center self-center mr-3"
              style={{ backgroundColor: "var(--blue-gray-100)" }}
            >
              {button.icon}
            </div>
          ))}
        </div>
        <div className="flex items-center">
          <div
            className="mr-4 company-logo p-4 rounded-full flex justify-center items-center"
            style={{ backgroundColor: "var(--blue-gray-700)" }}
          >
            <GiArrowFlights fontSize={24} color="var(--blue-gray-200)" />
          </div>
          <div
            className="text-lg font-medium  mr-1"
            style={{ color: "var(--blue-gray-600)" }}
          >
            Acne Inc.
          </div>
          <div className="down-arrow">
            <RiArrowDownSLine fontSize={18} color="var(--blue-gray-600)" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
