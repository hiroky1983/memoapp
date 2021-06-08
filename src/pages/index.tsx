import Head from "next/head";
import "tailwindcss/tailwind.css";

import Header from "../components/Header";
import InputForms from "../components/InputForm";
import MemosTheme from "../components/MemosTheme";

// import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "@firebase/app";
import { db, firebaseapp } from "../firebase/Config";

db;
firebaseapp;

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
