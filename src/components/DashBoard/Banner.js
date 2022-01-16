import React from "react";
import BannerImg from "../../assets/images/Bg.png";

function Banner() {
  return (
    <div className="banner pt-8 relative">
      <img src={BannerImg} class="img-fluid w-full" alt="Banner" />
      <div className="absolute top-16 left-5">
        <div
          className=" font-bold text-[2.5rem]"
          style={{ color: "var(--blue-gray-800)" }}
        >
          Good afternoon, Acne Inc. 👋
        </div>
        <div className=" font-normal" style={{ color: "var(--blue-gray-600)" }}>
          Here is what’s happening with your projects today:
        </div>
      </div>
    </div>
  );
}

export default Banner;
