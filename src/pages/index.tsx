import Head from "next/head";
import { useCallback, useState } from "react";
import "tailwindcss/tailwind.css";

import Header from "../components/Header";
import InputForms from "../components/InputForm";
import MemosTheme from "../components/MemosTheme";

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import "firebase/functions";
import { firebaseConfig } from "../firebase/Config";

firebaseConfig;

const useTheme = () => {
  const [inputText, setInputText] = useState("");
  const [themes, setThemes] = useState([]);
  const db = firebase.firestore();

  const onChangeInputText = (e) => setInputText(e.target.value);

  const onClickAdd = async () => {
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
    await db.collection("memo").add({
      theme: newThemes,
    });
    setThemes(newThemes);
    setInputText("");
  };

  const keyDown = async (e) => {
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
      await db.collection("memo").add({
        theme: newThemes,
      });
      setThemes(newThemes);
      setInputText("");
    }
  };

  const onClickDelete = async (index) => {
    const newThemes = [...themes];
    newThemes.splice(index, 1);
    setThemes(newThemes);
  };

  return {
    inputText,
    setInputText,
    themes,
    setThemes,
    onChangeInputText,
    onClickAdd,
    keyDown,
    onClickDelete,
  };
};

export default function Home() {
  const {
    inputText,
    themes,
    onChangeInputText,
    onClickAdd,
    keyDown,
    onClickDelete,
  } = useTheme();

  const auth = firebase.auth();
  const storage = firebase.storage();
  const functions = firebase.functions();
  const FirebaseTimestamp = firebase.firestore.Timestamp;

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
