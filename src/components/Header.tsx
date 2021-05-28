import Link from "next/link";
import "tailwindcss/tailwind.css";
import  SaveButton from "./button/SaveButton";

interface MyComponentProps{
  isButtonShow: Boolean;
}

export default function Header({isButtonShow}:MyComponentProps , props) {
  const title = props;
  return (
    <div className="items-center flex ">
      <Link href="/">
        <img
          src="https://it-kingdom.com/_next/image?url=%2Fimg%2Flogo.png&w=220&q=75"
          className="p-5 cursor-pointer flex"
        />
      </Link>
      {isButtonShow && <SaveButton title={title}/>}

      <div className="border"></div>
    </div>
  );
}
