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

import { db } from "../../Config";
import { Header } from "../components/Header";
import { InputForms } from "../components/InputForm";
import { MemosTheme } from "../components/MemosTheme";

export default function Home(): JSX.Element {
  const [inputText, setInputText] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [themes, setThemes] = useState([]);
  const newThemes = [...themes];
  const [posts, setPosts] = useState([
    {
      id: "",
      theme: "",
      content: "",
      timestamp: null,
    },
  ]);
  const [loading, setLoading] = useState<boolean>(false);
  const [onClickBool, setOnClickBool] = useState(false);
  // const [keyword, setKeyword] = useState("");

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

  useEffect(() => {
    const initialPosts = db.collection("memo").onSnapshot((snapshot) =>
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          theme: doc.data().theme,
          content: doc.data().content,
          timestamp: doc.data().timestamp,
        }))
      )
    );
    return () => {
      initialPosts();
    };
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
    }
  };

  const onClickSave = async () => {
    try {
      await db.collection("memo").add({
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
        onClickSearch={onClickSearch}
        onClickBool={onClickBool}
      />
      {posts[0]?.id && (
        <>
          {posts.map((post) => (
            <MemosTheme
              key={post.id}
              themes={themes}
              onClickDelete={onClickDelete}
              handleContentChange={handleContentChange}
              onClickSave={onClickSave}
              content={content}
            />
          ))}
        </>
      )}
    </div>
  );
}
