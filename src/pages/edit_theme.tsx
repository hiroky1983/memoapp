import "tailwindcss/tailwind.css";
import EditText from "../components/EditText";
import Header from "../components/Header";

export default function Home() {
  // const {
  //   inputText,
  //   themes,
  //   onChangeInputText,
  //   onClickAdd,
  //   keyDown,
  //   onClickDelete,
  // } = props;
  return (
    <div>
      <Header />
      <EditText />
    </div>
  );
}
