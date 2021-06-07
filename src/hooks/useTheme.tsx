import "firebase/auth";
import firebase from "firebase/app";
import "firebase/firestore";
import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { db } from "../firebase/Config";

export const useTheme = () => {
  const [inputText, setInputText] = useState("");
  const [themes, setThemes] = useState([]);
  const docRef = addDoc(collection(db, "memo"), {
    theme: themes,
  });

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
    await docRef;
    setThemes(newThemes);
    setInputText("");
  };

  const keyDown = async (e) => {
    if (e.keyCode === 13) {
      if (themes.some((item) => item === inputText)) {
        alert("同じ題名があります");
        return inputText;
      }
      const newThemes = [...themes, inputText];
      if (inputText.length === 0) {
        alert("題名を入力して下さい");
        return inputText;
      }
      await docRef;
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
