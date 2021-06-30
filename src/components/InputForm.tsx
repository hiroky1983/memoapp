import { useState } from "react";
import "tailwindcss/tailwind.css";
import CreateButton from "./button/CreateButton";
import SearchButton from "./button/SearchButton";

export default function InputForms(props) {
  const { inputText, onChange, onClickAdd, pushEnter, title } = props;
  const [onClickBool, setOnClickBool] = useState(false);
  const [keyword, setKeyword] = useState("");

  const onClickSearch = (e) => {
    setKeyword(e.target.value);
    setOnClickBool(!onClickBool);
  };
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
            onChange={onChange}
            onKeyDown={pushEnter}
          />
        ) : (
          <input
            className="rounded-l-full w-full py-2 px-6 text-gray-700 leading-tight focus:outline-none"
            id="add"
            type="text"
            placeholder="題名を入力"
            value={inputText}
            onChange={onChange}
            onKeyDown={pushEnter}
          />
        )}
        <div className="p-4 flex">
          <CreateButton onClick={onClickAdd} title={title} />
          <SearchButton
            onClick={onClickSearch}
            title={title}
            onClickBoolean={onClickBool}
          />
        </div>
      </div>
    </div>
  );
}
