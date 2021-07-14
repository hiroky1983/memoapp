import React, { VFC } from "react";
import "tailwindcss/tailwind.css";

import { AiOutlineDelete } from "react-icons/ai";

type Props = {
  onClickDelete: (index) => Promise<void>;
  title?: string;
};

export const DeleteButton: VFC<Props> = (props) => {
  const { onClickDelete } = props;
  return (
    <div className="items-center">
      <button
        className="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-400 focus:outline-none w-12 h-12 flex items-center justify-center"
        onClick={onClickDelete}
        title="削除"
      >
        <AiOutlineDelete />
      </button>
    </div>
  );
};
