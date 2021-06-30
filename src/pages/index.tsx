import Head from "next/head";
import "tailwindcss/tailwind.css";

import Header from "../components/Header";
import InputForms from "../components/InputForm";
import MemosTheme from "../components/MemosTheme";
import InfiniteScroll from "react-infinite-scroller";

// import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import { TextareaHTMLAttributes, useState } from "react";
import { db, firebaseConfig } from "../../Config";

firebaseConfig;

export default function Home(props) {
  const theme = props;
  const { onClickSearch, onClickBoolean } = props;
  const [inputText, setInputText] = useState("");
  const [themes, setThemes] = useState([]);
  const [content, setContent] = useState("");
  const newThemes = [...themes, inputText];

  const onChangeInputText = (e) => setInputText(e.target.value);

  const handleContentChange: TextareaHTMLAttributes<HTMLTextAreaElement>["onChange"] =
    (e) => {
      setContent(e.currentTarget.value);
    };

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
    setThemes((prev) => {
      return [...prev, inputText];
    });
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
      setThemes((prev) => {
        return [...prev, inputText];
      });
      setInputText("");
    }
  };

  const onClickSave = async () => {
    // console.log("Saved");
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
    //  try {
    //    await db.collection("memo").doc().delete()
    //   } catch (error) {
    //     console.error("Error deleting docment", error)
    //   }
    newThemes.splice(index, 1);
    setThemes(newThemes);
  };

  //   const loadMore = (page) => {
  //   setThemes([...themes, page])
  // }
  //   const loader =<div className="loader" key={0}>Loading ...</div>;

  return (
    <div>
      <Head>
        <title>MemoApp</title>
      </Head>
      <InfiniteScroll
        // loadMore={loadMore}
        hasMore={true}
        // loader={loader}
      >
        <Header />
        <InputForms
          inputText={inputText}
          onChange={onChangeInputText}
          onClickAdd={onClickAdd}
          pushEnter={(e) => keyDown(e)}
          value={inputText}
          onClickSeach={onClickSearch}
          onClickBoolean={onClickBoolean}
        />
        <MemosTheme
          themes={themes}
          onClickDelete={onClickDelete}
          handleContentChange={handleContentChange}
          onClickSave={onClickSave}
          content={content}
        />
      </InfiniteScroll>
    </div>
  );
}
