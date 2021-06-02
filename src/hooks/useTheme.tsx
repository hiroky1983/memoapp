import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { useState } from "react";

export const useTheme = () => {
  const [inputText, setInputText] = useState("");
  const [themes, setThemes] = useState([]);
  const newThemes = [...themes, inputText];
  const db = firebase.firestore();

  const onChangeInputText = (e) => setInputText(e.target.value);

  const onClickAdd = async () => {
    if (inputText === "") return;
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
    newThemes,
    setThemes,
    onChangeInputText,
    onClickAdd,
    keyDown,
    onClickDelete,
  };
};
