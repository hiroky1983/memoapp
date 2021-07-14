import React, { VFC } from "react";
import "tailwindcss/tailwind.css";

import { AiOutlineSearch } from "react-icons/ai";

type Props = {
  onClickSearch: () => void;
  title?: string;
  onClickBool?: boolean;
};

export const SearchButton: VFC<Props> = (props) => {
  const { onClickSearch } = props;
  return (
    <div className="items-center">
      <button
        className="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-400 focus:outline-none w-12 h-12 flex items-center justify-center"
        onClick={onClickSearch}
        title="検索"
      >
        <AiOutlineSearch />
      </button>
    </div>
  );
};
