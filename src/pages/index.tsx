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
import { log } from "console";

type memosProps = {
  id: string;
  theme: string;
  content: string;
};

export default function Home(): JSX.Element {
  const [inputText, setInputText] = useState("");
  const [content, setContent] = useState("");
  const [themes, setThemes] = useState([]);
  const [memos, setMemos] = useState<memosProps[]>([
    {
      id: "",
      theme: "",
      content: "",
    },
  ]);
  // console.log(memos);

  const [onClickBool, setOnClickBool] = useState(false);

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
    const fetchData = async () => {
      const snapshot = await db.collection("memo").get();
      const data = snapshot.docs.map((doc) => doc.data()) as memosProps[];
      setMemos(data);
      setThemes(data.map((item) => item.theme));
    };
    fetchData();
  }, []);

  const onClickAdd = async () => {
    if (inputText === "") {
      alert("題名を入力して下さい");
      return inputText;
    }
    if (themes.some((item) => item === inputText)) {
      alert("同じ題名があります");
      return inputText;
    }
    setThemes((prev) => {
      return [...prev, inputText];
    });
    const docData = {
      theme: inputText,
      id: "",
      content: "",
    };
    const newDoc = await db.collection("memo").doc();
    await newDoc.set({ ...docData, id: newDoc.id });
    setInputText("");
  };

  const keyDown = async (e: { keyCode: number }) => {
    if (e.keyCode === 13) {
      if (inputText === "") {
        alert("題名を入力して下さい");
        return inputText;
      }
      if (themes.some((item) => item === inputText)) {
        alert("同じ題名があります");
        return inputText;
      }
      setThemes((prev) => {
        return [...prev, { theme: inputText }];
      });
      const docData = {
        theme: inputText,
        id: "",
        content: "",
      };
      const newDoc = await db.collection("memo").doc();
      await newDoc.set({ ...docData, id: newDoc.id });
      setInputText("");
    }
  };

  const onClickSave = async (i) => {
    const memo = memos.map((theme, i) => memos[i].theme);
    console.log(memo);
    console.log(themes);
    // const a = memo[2]
    // const b = themes[2]
    // console.log(a);
    // console.log(b);

    //MemosThemeに表示されてるthemeのvalueを検知して、そのvalueを持つmemoを検索する
    const findMemo = memo.find((item) => item === themes[i]);
    console.log(findMemo);
    

    return;
  };

  const onClickDelete = async (index: number) => {
    const newThemes = [...themes];
    const memosId = memos.map((id) => id.id);
    //memosコレクションのドキュメントデータを取得
    const docData = await db.collection("memo").get();
    //memosコレクションのドキュメントデータからidを取得
    const docId = docData.docs.map((doc) => doc.id);
    //docIdとmemosIdの中身が一致しているものをオブジェクトとして取得
    const findId = docId.find((id) => memosId.includes(id));
    console.log(findId);

    const docRef = db.collection("memo").doc(docId);
    const doc = await docRef.get();
    if (!doc.exists) {
      alert("データがありません");
      return;
    }
    await doc.ref.delete();
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
        pushEnter={async (e) => keyDown(e)}
        onClickSearch={onClickSearch}
        onClickBool={onClickBool}
      />
      <MemosTheme
        themes={themes}
        onClickDelete={onClickDelete}
        handleContentChange={handleContentChange}
        onClickSave={onClickSave}
        content={content}
      />
    </div>
  );
}
