import React from "react";

import { AiFillSave } from "react-icons/ai";
import "tailwindcss/tailwind.css";

export default function SaveButton(props): JSX.Element {
  const { onClick } = props;
  return (
    <div className="items-center ">
      <button
        className="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-400 focus:outline-none w-12 h-12 flex items-center justify-center"
        onClick={onClick}
        title="保存"
      >
        <AiFillSave />
      </button>
    </div>
  );
}
