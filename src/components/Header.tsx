import Link from "next/link";
import "tailwindcss/tailwind.css";

export default function Header() {
  return (
    <div className="items-center ">
      <Link href="/">
        <img
          src="https://it-kingdom.com/_next/image?url=%2Fimg%2Flogo.png&w=220&q=75"
          className="p-5 cursor-pointer flex"
        />
      </Link>

      <div className="border"></div>
    </div>
  );
}
