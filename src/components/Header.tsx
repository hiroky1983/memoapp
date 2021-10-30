import React, { VFC } from "react";
import "tailwindcss/tailwind.css";
// import { ToggleSwitch } from "./toggle/TogguleSwitch";

export const Header: VFC = () => {
  return (
    <div className="items-center mx-2">
      <div className="flex items-center justify-between pr-12">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt=""
          src="https://it-kingdom.com/_next/image?url=%2Fimg%2Flogo.png&w=220&q=75"
          className="p-5 cursor-pointer flex"
        />
        {/* <ToggleSwitch /> */}
      </div>

      <div className="border"></div>
    </div>
  );
};
