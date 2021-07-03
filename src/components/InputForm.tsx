import React, { InputHTMLAttributes, useCallback, useState } from "react";
import "tailwindcss/tailwind.css";
import CreateButton from "./button/CreateButton";
import SearchButton from "./button/SearchButton";

export const useInputActions = () =>{
  const [onClickBool, setOnClickBool] = useState(false);
  const [inputText, setInputText] = useState("");
  const [keyword, setKeyword] = useState("");
  const [themes, setThemes] = useState([]);
  
  const onClickSearch = () => {
    setOnClickBool(!onClickBool);
  };
  const onChangeInputText: InputHTMLAttributes<HTMLInputElement>["onChange"] =
    useCallback((e) => {
      setInputText(e.target.value);
    }, []);
  
  const onChangeSearchText: InputHTMLAttributes<HTMLInputElement>["onChange"] =
    useCallback((e) => {
      setKeyword(e.target.value);
    }, []);
  
  const onClickAdd = () => {
    if (inputText === "") return;
    if (themes.some((item) => item === inputText)) {
      alert("同じ題名があります");
      return inputText;
    }
    if (inputText.length === 0) {
      alert("題名を入力して下さい");
      return inputText;
    }
    setThemes((prev) => {
      return [...prev, inputText];
    });
    setInputText("");
  };
  
  const keyDown = (e) => {
    if (e.keyCode === 13) {
      if (themes.some((item) => item === inputText)) {
        alert("同じ題名があります");
        return inputText;
      }
      if (inputText.length === 0) {
        alert("題名を入力して下さい");
        return inputText;
      }
      setThemes((prev) => {
        return [...prev, inputText];
      });
      setInputText("");
      // onClickAdd();
    }
  };
return { keyword,onClickSearch,onChangeInputText,onChangeSearchText,onClickAdd,keyDown,onClickBool,inputText}
}

export default function InputForms(props) {
  const { title , pushEnter} = props;
  const { keyword,onClickSearch,onChangeInputText,onChangeSearchText,onClickAdd,keyDown,onClickBool,inputText } = useInputActions();

  return (
    <div className="p-6 m-1 max-w-screen-xl	">
      <div className="bg-white flex items-center rounded-full shadow-xl ">
        {onClickBool ? (
          <input
            className="rounded-l-full w-full py-2 px-6 text-gray-700 leading-tight focus:outline-none"
            id="search"
            type="text"
            placeholder="検索する言葉を入力"
            value={keyword}
            onChange={onChangeSearchText}
            // onKeyDown={pushEnter}
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
        <div className="p-4 flex">
          <CreateButton
            onClick={onClickAdd}
            title={title}
            pushEnter={(e) => keyDown(e)}
            onClickBool={onClickBool}
          />
          <SearchButton
            onClick={onClickSearch}
            title={title}
            onClickBool={onClickBool}
            pushEnter={(e) => keyDown(e)}
          />
        </div>
      </div>
    </div>
  );
}
