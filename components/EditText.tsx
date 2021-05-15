import { Query } from "@google-cloud/firestore";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import "tailwindcss/tailwind.css";
import TextareaAutosize from "react-textarea-autosize";
import { TextareaHTMLAttributes, useState } from "react";


export default function EditText() {
  
  const [content, setContent] = useState("");

  
  const handleContentChange: TextareaHTMLAttributes<HTMLTextAreaElement>["onChange"] = (event) => {
    setContent(event.currentTarget.value);
  };
  return (
    <div className="m-3">
      <p>a</p>
      {/* <div className="h-screen relative	">
        <div className="overflow-hidden invisible whitespace-pre-wrap break-words"></div>
        <textarea
          className="w-full text-sm outline-none resize-none m-5 p-10 absolute"
          placeholder="メモを入力する"
          
        ></textarea>
      </div> */}

<label htmlFor="memo" className="flex-1 pb-20 cursor-text m-8">
            <TextareaAutosize
              id="memo"
              // style={{ caretColor: "#3B82F6" }}
              className="w-full text-lg outline-none resize-none sm:text-2xl"
              value={content}
              onChange={handleContentChange}
              placeholder="メモを入力する"
            />
          </label>

    </div>
  );
}
