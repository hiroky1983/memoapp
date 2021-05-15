import Head from "next/head";
import { useState } from "react";

// import styles from "../styles/Home.module.css";
import "tailwindcss/tailwind.css";
import Header from "../components/Header";
import InputForms from "../components/InputForm";
import Panel from "../components/Panel";

export default function Home() {
  const [inputText, setInputText] = useState("");
  const [themes, setThemes] = useState([]);

 
  const onChangeInputText = (event) => setInputText(event.target.value);

  const onClickAdd = () => {
    if (inputText === "") return;
    const newThemes = [...themes, inputText];
    setThemes(newThemes);
    setInputText("");
  };


  const onclickDelete = (index) => {
    const newThemes = [...themes];
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
        onChange={onChangeInputText}
        onClick={onClickAdd}

      />
      <Panel
        themes={themes}
        onClickDelete={onclickDelete}
        // disabled={e.onClickComplete}
      />
    </div>
  );
}
