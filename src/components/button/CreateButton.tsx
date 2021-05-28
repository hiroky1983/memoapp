import "tailwindcss/tailwind.css";
import { AiFillEdit } from "react-icons/ai";

export default function CreateButton(props) {
  const { onClick } = props;
  return (
    <div className="items-center">
      <button
        className="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-400 focus:outline-none w-12 h-12 flex items-center justify-center"
        onClick={onClick}
        title="追加"
      >
        <AiFillEdit />
      </button>
    </div>
  );
}
