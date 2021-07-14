import React, {
  TextareaHTMLAttributes,
  InputHTMLAttributes,
  useState,
  useCallback,
  useEffect,
} from "react";
import Head from "next/head";
import "tailwindcss/tailwind.css";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

import { db, firebaseConfig } from "../../Config";
import { Header } from "../components/Header";
import {InputForms} from "../components/InputForm";
import { MemosTheme } from "../components/MemosTheme";
// import { useMemo } from "react";

firebaseConfig;

export default function Home():JSX.Element {
  const [inputText, setInputText] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [contents, setContents] = useState([]);
  const [themes, setThemes] = useState([]);
  const newThemes = [...themes];
  const newContents = [...contents];
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [onClickBool, setOnClickBool] = useState(false);
  const [keyword, setKeyword] = useState("");

  const getPosts = useCallback(async () => {
    //firebaseからデータを取得する
    const postsRef = db.collection("memo");
    const querySnapshot = await postsRef.get();
    const posts = querySnapshot.docs.map((doc) => doc.data());
    setPosts(posts);
    setLoading(false);
    console.log(posts);
  }, []);

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  const onChangeInputText: InputHTMLAttributes<HTMLInputElement>["onChange"] =
    useCallback((e) => setInputText(e.target.value), [setInputText]);

  const handleContentChange: TextareaHTMLAttributes<HTMLTextAreaElement>["onChange"] =
    useCallback(
      (e) => {
        setContent(e.currentTarget.value);
      },
      [setContent]
    );
    const onClickSearch = () => {
      // setKeyword(e.target.value);
      setOnClickBool(!onClickBool);
    };

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
    try {
      await db.collection("memo").add({
        // themes one of theme
        theme: newThemes,
        content: content,
      });
    } catch (error) {
      console.error("Error adding docment", error);
    }
  };

  const onClickDelete = async (index) => {
    const newThemes = [...themes];
    try {
      const querySnapshot = await db.collection("memo").get();
      querySnapshot.docs.map((postDoc) => postDoc.id);
      querySnapshot.forEach((postDoc) => {
        console.log(postDoc.id, " => ", JSON.stringify(postDoc.data()));
      });
      await db.app.delete();
    } catch (error) {
      console.error("Error deleting docment", error);
    }
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
        onChangeInputText={onChangeInputText}
        onClickAdd={onClickAdd}
        pushEnter={(e) => keyDown(e)}
        // value={inputText}
        onClickSearch={onClickSearch}
        onClickBool={onClickBool}
      />
      {posts.map((post) => {
        return (
          <MemosTheme
            key={post.theme}
            themes={themes}
            onClickDelete={onClickDelete}
            handleContentChange={handleContentChange}
            onClickSave={onClickSave}
            content={content}
          />
        );
      })}
    </div>
  );
}
