import React, { VFC } from "react";
import "tailwindcss/tailwind.css";

import { AiFillSave } from "react-icons/ai";

type Props = {
  onClickSave: () => Promise<void>;
  title?: string;
};

export const SaveButton: VFC<Props> = (props) => {
  const { onClickSave } = props;
  return (
    <div className="items-center ">
      <button
        className="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-400 focus:outline-none w-12 h-12 flex items-center justify-center"
        onClick={onClickSave}
        title="保存"
      >
        <AiFillSave />
      </button>
    </div>
  );
};
