import { initializeApp } from "@firebase/app";
import { getFirestore } from "@firebase/firestore";
import "tailwindcss/tailwind.css";
import EditText from "../components/EditText";
import Header from "../components/Header";
import { useTheme } from "../hooks/useTheme";

useTheme;
getFirestore;
initializeApp;

export default function edit_theme(props) {
  const { themes, content, handleContentChange } = props;

  return (
    <div>
      <Header isButtonShow={true} />
      <div className="block text-center  text-4xl p-4 pb-8">
        <p>{themes}</p>
      </div>
      <EditText content={content} handleContentChange={handleContentChange} />
    </div>
  );
}
