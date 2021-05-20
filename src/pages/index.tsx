import Head from "next/head";
import { useCallback, useState } from "react";
import * as firebase from 'firebase'

import "tailwindcss/tailwind.css";
import Header from "../components/Header";
import InputForms from "../components/InputForm";
import MemosTheme from "../components/MemosTheme";



export default function Home() {
  const [inputText, setInputText] = useState("");
  const [themes, setThemes] = useState([]);

  const onChangeInputText = (e) => setInputText(e.target.value);

  const onClickAdd = () => {
    if (inputText === "") return;
    const newThemes = [...themes, inputText];
    if (themes.some((item) => item === inputText)) {
      alert("同じ題名があります");
      return inputText;
    }
    if (inputText.length === 0) {
      alert("題名を入力して下さい");
      return inputText;
    }
    setThemes(newThemes);
    setInputText("");
  };

  const keyDown = (e) => {
    if (e.keyCode === 13) {
      const newThemes = [...themes, inputText];
      if (themes.some((item) => item === inputText)) {
        alert("同じ題名があります");
        return inputText;
      }
      if (inputText.length === 0) {
        alert("題名を入力して下さい");
        return inputText;
      }
      setThemes(newThemes);
      setInputText("");
    }
  };

  const onClickDelete = (index) => {
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
      <MemosTheme themes={themes} onClickDelete={onClickDelete} />
    </div>
  );
}
