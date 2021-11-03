import React, { InputHTMLAttributes, VFC } from "react";
import "tailwindcss/tailwind.css";
import { CreateButton } from "./button/CreateButton";
import { SearchButton } from "./button/SearchButton";

type Props = {
  inputText: string;
  onChangeInputText: InputHTMLAttributes<HTMLInputElement>["onChange"];
  onClickAdd: () => Promise<string>;
  pushEnter: (e: { keyCode: number }) => Promise<string>;
  title?: string;
  onClickBool: boolean;
  onClickSearch: () => void;
};

export const InputForms: VFC<Props> = (props) => {
  const {
    inputText,
    onChangeInputText,
    onClickAdd,
    pushEnter,
    title,
    onClickBool,
    onClickSearch,
  } = props;

  return (
    <div className="p-6 m-1 max-w-screen-xl	">
      <div className="bg-white flex items-center rounded-full shadow-xl ">
        {onClickBool ? (
          <input
            className="rounded-l-full w-full py-2 px-6 text-gray-700 leading-tight focus:outline-none"
            id="search"
            type="text"
            placeholder="検索する言葉を入力"
            value={inputText}
            onChange={onChangeInputText}
            onKeyDown={pushEnter}
          />
        ) : (
          <input
            className="rounded-l-full w-full py-2 px-6 text-gray-700 leading-tight focus:outline-none"
            id="add"
            type="text"
            placeholder="題名を入力"
            value={inputText}
            onChange={onChangeInputText}
            onKeyDown={pushEnter}
          />
        )}
        <div className="p-4 flex gap-3 mr-6">
          <CreateButton onClickAdd={onClickAdd} title={title} />
          <SearchButton
            onClickSearch={onClickSearch}
            title={title}
            onClickBool={onClickBool}
          />
        </div>
      </div>
    </div>
  );
};
