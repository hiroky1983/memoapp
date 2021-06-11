import { TextareaHTMLAttributes, useState } from "react";
import "tailwindcss/tailwind.css";
import EditText from "../components/EditText";
import Header from "../components/Header";
import { db } from "../firebase/Config";

export default function edit_theme(props) {
  const { themes,theme, onClickSave} = props;
  const [content, setContent] = useState("");

  // const onClickSave= () => {
  //   db.collection("memo").add({
  //     themes:theme,
  //     content: content
  //   })
  // }

  const handleContentChange: TextareaHTMLAttributes<HTMLTextAreaElement>["onChange"] =
    (e) => {
      setContent(e.currentTarget.value);
    };
    
  return (
    <div>
      <Header isButtonShow={true} onClick={onClickSave}/>
      <div className="block text-center  text-4xl p-4 pb-8">
        <p>{themes}</p>
      </div>
      <EditText content={content} handleContentChange={handleContentChange} theme={theme} />
    </div>
  );
}
