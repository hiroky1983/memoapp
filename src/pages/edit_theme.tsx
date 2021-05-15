import { useState } from "react";
import "tailwindcss/tailwind.css";
import EditText from "../components/EditText";
import Header from "../components/Header";

export default function Home(props) {
  const [markdown, setMarkdown] = useState();

  const setData = (e: any) => {
    e.preventDefault();

    setMarkdown(e.target.value);
  };
  return (
    <div>
      <Header />

      <EditText />
    </div>
  );
}
