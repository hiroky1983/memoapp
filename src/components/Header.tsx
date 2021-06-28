import Link from "next/link";
import "tailwindcss/tailwind.css";
import SaveButton from "./button/SaveButton";

export default function Header(props) {
  const { title, onClickSave } = props;

  return (
    <div className="items-center mx-2">
      <div className="flex items-center">
        <Link href="/">
          <img
            src="https://it-kingdom.com/_next/image?url=%2Fimg%2Flogo.png&w=220&q=75"
            className="p-5 cursor-pointer flex"
          />
        </Link>
      </div>

      <div className="border"></div>
    </div>
  );
}
