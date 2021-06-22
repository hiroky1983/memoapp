import Head from "next/head";
import "tailwindcss/tailwind.css";

import Header from "../components/Header";
import InputForms from "../components/InputForm";
import MemosTheme from "../components/MemosTheme";

// import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import { useState } from "react";
import { db, firebaseConfig } from "../firebase/Config";

firebaseConfig;

export default function Home(props) {
  const [inputText, setInputText] = useState("");
  const [themes, setThemes] = useState([]);
  const theme = props.themes;
  const newThemes = [...themes, inputText];
  const addMemo = db.collection("memo").add({newThemes});

  const onClickSave = props;

  const onChangeInputText = (e) => setInputText(e.target.value);

  const onClickAdd = async () => {
    if (inputText === "") return;
    // const newThemes = [...themes, inputText];
    if (themes.some((item) => item === inputText)) {
      alert("同じ題名があります");
      return inputText;
    }
    if (inputText.length === 0) {
      alert("題名を入力して下さい");
      return inputText;
    }
    setThemes(newThemes);
    await addMemo;
    setInputText("");
  };

  const keyDown = async (e) => {
    if (e.keyCode === 13) {
      // const newThemes = [...themes, inputText];
      if (themes.some((item) => item === inputText)) {
        alert("同じ題名があります");
        return inputText;
      }
      if (inputText.length === 0) {
        alert("題名を入力して下さい");
        return inputText;
      }
      await addMemo;
      setThemes(newThemes);
      setInputText("");
    }
  };

  const onClickDelete = (index : number) => {
    const newThemes = [...themes];
    newThemes.splice(index, 1);
    setThemes(newThemes);
  };
  return (
    <div>
      <Head>
        <title>MemoApp</title>
      </Head>
      <Header isButtonShow={false} onClick={onClickSave} />
      <InputForms
        inputText={inputText}
        onChange={onChangeInputText}
        onClickAdd={onClickAdd}
        pushEnter={(e) => keyDown(e)}
      />
      <MemosTheme themes={themes} onClickDelete={onClickDelete} />
    </div>
  );
}
