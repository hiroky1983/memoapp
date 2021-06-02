import "tailwindcss/tailwind.css";
import EditText from "../components/EditText";
import Header from "../components/Header";
import { firebaseConfig } from "../firebase/Config";
import { useTheme } from "../hooks/useTheme"

firebaseConfig;
useTheme;

export default function edit_theme(props) {
  const {
    themes,
    content,
    handleContentChange
  } = props;
     
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
