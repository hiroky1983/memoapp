import Link from "next/link";
import "tailwindcss/tailwind.css";
import  SaveButton from "./button/SaveButton";

interface MyComponentProps{
  isButtonShow: Boolean;
}

export default function Header({isButtonShow}:MyComponentProps , props) {
  const title = props;
  return (
    <div className="items-center mx-2">
      <div className="flex items-center" >
      <Link href="/">
        <img
          src="https://it-kingdom.com/_next/image?url=%2Fimg%2Flogo.png&w=220&q=75"
          className="p-5 cursor-pointer flex"
        />
      </Link>
      <div className="flex ml-auto">
      {isButtonShow && <SaveButton title={title}/>}

      </div>

      </div>

      <div className="border"></div>
    </div>
  );
}
