import React from "react";

import "tailwindcss/tailwind.css";
import { AiOutlineDelete } from "react-icons/ai";

export default function DeleteButton(props): JSX.Element {
  const { onClick } = props;
  return (
    <div className="items-center">
      <button
        className="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-400 focus:outline-none w-12 h-12 flex items-center justify-center"
        onClick={onClick}
        title="削除"
      >
        <AiOutlineDelete />
      </button>
    </div>
  );
}
