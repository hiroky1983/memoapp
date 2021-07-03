import React from "react";
import "tailwindcss/tailwind.css";

export default function Header () {
  return (
    <div className="items-center mx-2">
      <div className="flex items-center">
        <img
          src="https://it-kingdom.com/_next/image?url=%2Fimg%2Flogo.png&w=220&q=75"
          className="p-5 cursor-pointer flex"
        />
      </div>

      <div className="border"></div>
    </div>
  );
}
