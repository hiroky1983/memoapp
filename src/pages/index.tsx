import Head from "next/head";
import "tailwindcss/tailwind.css";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import React, { TextareaHTMLAttributes, useState, useCallback } from "react";
import { db, firebaseConfig } from "../../Config";

import Header from "../components/Header";
import InputForms, { useInputActions } from "../components/InputForm";
import MemosTheme from "../components/MemosTheme";
import { useCreateTheme } from "../components/ListItem";
import InfiniteScroll from "react-infinite-scroller";
import {} from "next";
import { useEffect } from "react";

// import firebase from "firebase/app";

firebaseConfig;


export default function Home(props) {
  const { keyword,onClickSearch,onChangeInputText,onChangeSearchText,onClickAdd,keyDown,onClickBool,inputText } = useInputActions();
  const { content , handleContentChange} = useCreateTheme();
  // const [inputText, setInputText] = useState("");
  // const [content, setContent] = useState("");
  const [themes, setThemes] = useState([]);
  const newThemes = [...themes, inputText];

  // const onChangeInputText = useCallback(
  //   (e) => setInputText(e.target.value),
  //   []
  // );

  // const handleContentChange: TextareaHTMLAttributes<HTMLTextAreaElement>["onChange"] =
  //   (e) => {
  //     setContent(e.currentTarget.value);
  //   };

  // const onClickAdd = () => {
  //   if (inputText === "") return;
  //   if (themes.some((item) => item === inputText)) {
  //     alert("同じ題名があります");
  //     return inputText;
  //   }
  //   if (inputText.length === 0) {
  //     alert("題名を入力して下さい");
  //     return inputText;
  //   }
  //   setThemes((prev) => {
  //     return [...prev, inputText];
  //   });
  //   setInputText("");
  // };

  // const keyDown = (e) => {
  //   if (e.keyCode === 13) {
  //     // const newThemes = [...themes, inputText];
  //     if (themes.some((item) => item === inputText)) {
  //       alert("同じ題名があります");
  //       return inputText;
  //     }
  //     if (inputText.length === 0) {
  //       alert("題名を入力して下さい");
  //       return inputText;
  //     }
  //     setThemes((prev) => {
  //       return [...prev, inputText];
  //     });
  //     setInputText("");
  //   }
  // };

  const onClickSave = async () => {
    try {
      await db.collection("memo").add({
        // id: theme,
        theme: newThemes,
        content: content,
      });
    } catch (error) {
      console.error("Error adding docment", error);
    }
  };
  const onClickDelete = async (index: number) => {
    const newThemes = [...themes];
    try {
      await db.collection("memo").doc().delete();
    } catch (error) {
      console.error("Error deleting docment", error);
    }
    newThemes.splice(index, 1);
    setThemes(newThemes);
  };

  // const loadMore = (index) => {
  //   if (themes.length > 5) {
  //     setThemes([...themes, index]);
  //   }
  // };
  // const loader = () => {
  //   loadMore.length > 5 && (
  //     <div className="loader" key={0}>
  //       Loading ...
  //     </div>
  //   );
  // };

  return (
    <div>
      <Head>
        <title>MemoApp</title>
      </Head>
      {/* <InfiniteScroll loadMore={loadMore} hasMore={true} loader={loader}> */}
      <Header />
      <InputForms
        inputText={inputText}
        onChange={onClickBool ? onChangeInputText : onChangeSearchText}
        onClickAdd={onClickAdd}
        pushEnter={(e) => keyDown(e)}
        value={onClickBool ? inputText:keyword}
        onClickSeach={onClickSearch}
        onClickBool={onClickBool}
        keyDown
      />
      <MemosTheme
        themes={themes}
        onClickDelete={onClickDelete}
        handleContentChange={handleContentChange}
        onClickSave={onClickSave}
        content={content}
      />
      {/* </InfiniteScroll> */}
    </div>
  );
}
