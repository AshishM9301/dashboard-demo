import React from "react";

import { CgSortAz } from "react-icons/cg";

import { BsCalendar } from "react-icons/bs";

import { IoMdAdd } from "react-icons/io";

function ChangeDate() {
  return (
    <div className="flex">
      <div
        className="bg-white rounded w-9 h-9 mx-auto flex items-center justify-center"
        style={{
          border: " 1px solid var(--blue-gray-200)",
          boxShadow: `0px 1px 2px rgba(15, 23, 42, 0.04)`,
        }}
      >
        <CgSortAz size={32} color="var(--blue-gray-500)" />
      </div>

      <div
        className="bg-white rounded h-9 px-3 flex items-center text-sm font-medium ml-3"
        style={{
          border: " 1px solid var(--blue-gray-200)",
          boxShadow: `0px 1px 2px rgba(15, 23, 42, 0.04)`,
          color: "var(--blue-gray-500)",
        }}
      >
        <BsCalendar size={18} color="var(--blue-gray-500)" />
        <div className="ml-2">Nov 20, 2020</div>
        <div className="ml-2" style={{ color: "var(--blue-gray-300)" }}>
          -
        </div>
        <div className="ml-2">Dec 19, 2020</div>
      </div>

      <div
        className="h-9 px-2 button rounded flex text-white items-center text-sm font-medium ml-3"
        style={{
          backgroundColor: "var(--blue-indigo-500)",
          boxShadow: "0px 1px 2px rgba(15, 23, 42, 0.08)",
        }}
      >
        <IoMdAdd size={24} color="var(--blue-indigo-100)" />
        <div className="ml-2">Add View</div>
      </div>
    </div>
  );
}

export default ChangeDate;
