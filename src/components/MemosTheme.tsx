import React from "react";
import ListItem from "../components/ListItem";

import "tailwindcss/tailwind.css";

export default function MemosTheme(props) {
  const { themes, onClickDelete } = props;
  return (
    <div className="max-w-screen-xl">
      <ul>
        {themes.map((theme: string, index: number) => {
          return (
            <ListItem
              theme={theme}
              index={index}
              onClickDelete={onClickDelete}
            />
          );
        })}
      </ul>
    </div>
  );
}
