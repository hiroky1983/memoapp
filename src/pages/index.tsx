import Head from "next/head";
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

export default function Home(props) {
  const {
    inputText,
    themes,
    onChangeInputText,
    onClickAdd,
    keyDown,
    onClickDelete,
  } = props;

  const auth = firebase.auth();
  const storage = firebase.storage();
  const functions = firebase.functions();
  const FirebaseTimestamp = firebase.firestore.Timestamp;

  return (
    <div>
      <Head>
        <title>MemoApp</title>
      </Head>
      <Header isButtonShow={false}/>
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
