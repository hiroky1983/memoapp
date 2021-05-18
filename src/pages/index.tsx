import Head from "next/head";
import { useState } from "react";

import "tailwindcss/tailwind.css";
import Header from "../components/Header";
import InputForms from "../components/InputForm";
import MemosTheme from "../components/MemosTheme";

export default function Home() {
  const [inputText, setInputText] = useState("");
  const [themes, setThemes] = useState([]);

  const onChangeInputText = (event) => setInputText(event.target.value);

  const onClickAdd = () => {
    if (inputText === "") return;
    const newThemes = [...themes, inputText];
    setThemes(newThemes);
    setInputText("");
  };

  const keyDown = (e) => {
    if (e.keyCode === 13) {
      const newThemes = [...themes, inputText];
      setThemes(newThemes);
      setInputText("");
    }
  };

  const onclickDelete = (index) => {
    const newThemes = [...themes];
    newThemes.splice(index, 1);
    setThemes(newThemes);
  };

  return (
    <div>
      <Head>
        <title>MemoApp</title>
      </Head>
      <Header />
      <InputForms
        inputText={inputText}
        onChange={onChangeInputText}
        onClick={onClickAdd}
        pushEnter={(e) => keyDown(e)}
      />
      <MemosTheme
        themes={themes}
        onClickDelete={onclickDelete}
      />
    </div>
  );
}
