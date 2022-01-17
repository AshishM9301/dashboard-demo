import React from "react";
import Banner from "./Banner";
import Features from "./Features/Features";

function DashBoard() {
  return (
    <div className="h-full" style={{ backgroundColor: "var(--blue-gray-100)" }}>
      <div className="w-[96%] mx-auto">
        <Banner />
        <Features />
      </div>
    </div>
  );
}

export default DashBoard;
