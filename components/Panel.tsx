import Link from "next/link";

import "tailwindcss/tailwind.css";

export default function Panel(props) {
  const { themes, onClickDelete } = props;
//   const theme = [...Array.keys()].map((val) => {
// return{
//   theme: {theme},
// }
//   })
  return (
    <div>
      <ul>
        {themes.map((theme: string, index: number) => {
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
                    <button
                      className="bg-blue-500 hover:opacity-75 text-white rounded-full px-8 py-2 focus:outline-none"
                      onClick={() => onClickDelete(index)}
                    >
                      削除
                    </button>
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
