import Head from "next/head";
import "tailwindcss/tailwind.css";

import Header from "../components/Header";
import InputForms from "../components/InputForm";
import MemosTheme from "../components/MemosTheme";

// import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
// import "firebase/functions";
import { firebaseConfig } from "../firebase/Config";

firebaseConfig;

type Memo ={
  id: number;
  theme: string;
  contents:string;
}

export default function Home(props) {
  const {
    inputText,
    themes,
    onChangeInputText,
    onClickAdd,
    keyDown,
    onClickDelete,
  } = props;

  return (
    <div>
      <Head>
        <title>MemoApp</title>
      </Head>
      <Header isButtonShow={false} />
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
