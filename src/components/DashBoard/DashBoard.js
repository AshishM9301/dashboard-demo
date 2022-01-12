import React from "react";

import Banner from "../../assets/images/Bg.png";
function DashBoard() {
  return (
    <div className="h-full" style={{ backgroundColor: "var(--blue-gray-100)" }}>
      <div className="w-[96%] mx-auto">
        <div className="banner pt-8">
          <img src={Banner} class="img-fluid w-full" alt="Banner" />
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
