import React, { DOMAttributes } from "react";
import ListItem from "../components/ListItem";

import "tailwindcss/tailwind.css";
import { TextareaHTMLAttributes } from "react";

export default function MemosTheme(props): JSX.Element {
  const { themes, onClickDelete, onClickSave, content, handleContentChange } =
    props;

  return (
    <div className="max-w-screen-xl">
      <ul>
        {themes.map((theme: string, index: number) => {
          return (
            <ListItem
              key={theme}
              theme={theme}
              index={index}
              onClickDelete={onClickDelete}
              onClickSave={onClickSave}
              content={content}
              handleContentChange={handleContentChange}
            />
          );
        })}
      </ul>
    </div>
  );
}
