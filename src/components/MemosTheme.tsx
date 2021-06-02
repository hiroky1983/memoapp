import Link from "next/link";
import { title } from "process";

import "tailwindcss/tailwind.css";
import DeleteButton from "./button/DeleteButton";


export default function MemosTheme(props) {
  const { themes, onClickDelete  } = props;    

  return (
    <div className="max-w-screen-xl">
      <ul>
        {themes.map((theme: string, index: number, props) => {
          return (
            <div key={theme}>
              <li>
                <div className="bg-white p-6 shadow-lg rounded-lg flex justify-between items-center mx-6 my-1">
                  <div className="flex">
                    <div className="ml-5">
                      <Link href="/edit_theme">
                        <a className="text-gray-600 ">{theme}</a>
                      </Link>
                    </div>
                  </div>
                  <div>
                    <DeleteButton onClick={() => onClickDelete(index)} title={title} />
                  </div>
                </div>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
