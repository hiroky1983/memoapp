import { useState } from "react";
import "tailwindcss/tailwind.css";
import EditText from "../components/EditText";
import Header from "../components/Header";
import MemosTheme from "../components/MemosTheme";

export default function Home() {
  return (
    <div>
      <Header />
      <EditText />
    </div>
  );
}
