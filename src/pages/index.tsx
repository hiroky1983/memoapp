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
import Header from "../components/Header";
import InputForms from "../components/InputForm";
import ListItem from "../components/ListItem";
import MemosTheme from "../components/MemosTheme";
import InfiniteScroll from "react-infinite-scroller";
// import { useMemo } from "react";

firebaseConfig;

export default function Home(props: {
  onClickSearch: React.MouseEvent<HTMLElement>;
  onClickBoolean: boolean;
}): JSX.Element {
  const { onClickSearch, onClickBoolean } = props;
  const [inputText, setInputText] = useState("");
  const [content, setContent] = useState("");
  const [themes, setThemes] = useState([]);
  const newThemes = [...themes];
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const getPosts = useCallback(async () => {
    // let postRef = await db.collection("memo")
    // .orderBy('theme')
    // .limit(20)
    // const querySnapshot = await postRef.get()
    // return querySnapshot.docs
    // // setPosts()
    // setLoading(false);
    const postsRef = db.collection("memo");
    const querySnapshot = await postsRef.get();
    setPosts(querySnapshot.docs);

    setLoading(false);
  }, [db]);


  useEffect(() => {
    getPosts();
  }, [getPosts]);

  const onChangeInputText: InputHTMLAttributes<HTMLInputElement>["onChange"] =
    useCallback(
      (e) => setInputText(e.target.value), [setInputText]);

  const handleContentChange: TextareaHTMLAttributes<HTMLTextAreaElement>["onChange"] =
    useCallback(
      (e) => {
        setContent(e.currentTarget.value);
      },
      [setContent]
    );

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

  const onClickSave = async (theme , post) => {
    console.log("Saved");
    try {
      await db.collection("memo").add({
        // themes one of theme
        theme: newThemes,
        content: content,
      });
    } catch (error) {
      console.error("Error adding docment", error);
    }
    console.log(theme);
  };

  const onClickDelete = async (index: number) => {
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
      {/* <InfiniteScroll 
      // loadMore={loadMore} 
      hasMore={true} 
      // loader={loader}
      > */}
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
      {/* </InfiniteScroll> */}
    </div>
  );
}
