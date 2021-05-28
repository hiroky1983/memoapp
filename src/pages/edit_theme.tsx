import "tailwindcss/tailwind.css";
import EditText from "../components/EditText";
import Header from "../components/Header";
import { firebaseConfig } from "../firebase/Config";

firebaseConfig;

export default function edit_theme(props) {
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
      <Header isButtonShow={true}/>
      <div className="block text-center  text-4xl p-4 pb-8">
        <p>{themes}</p>
      </div>
      <EditText />
    </div>
  );
}
