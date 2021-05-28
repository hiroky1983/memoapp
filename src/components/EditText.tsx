import "tailwindcss/tailwind.css";
import TextareaAutosize from "react-textarea-autosize";
import { TextareaHTMLAttributes, useState } from "react";

export default function EditText() {
  const [content, setContent] = useState("");
  
  const handleContentChange: TextareaHTMLAttributes<HTMLTextAreaElement>["onChange"] =
    (e) => {
      setContent(e.currentTarget.value);
    };

  return (
    <div className="m-3">

      <label htmlFor="memo" className="flex-1 pb-20 cursor-text m-8">
        <TextareaAutosize
          id="memo"
          className="w-full text-lg outline-none resize-none sm:text-2xl"
          value={content}
          onChange={handleContentChange}
          placeholder="メモを入力する"
        />
      </label>
    </div>
  );
}
