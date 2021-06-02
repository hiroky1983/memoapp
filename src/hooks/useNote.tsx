import { TextareaHTMLAttributes, useState } from "react";

export const useNote = () => {
  const [content, setContent] = useState("");

  const handleContentChange: TextareaHTMLAttributes<HTMLTextAreaElement>["onChange"] =
    (e) => {
      setContent(e.currentTarget.value);
    };
  return {
    handleContentChange,
    content,
  };
};
