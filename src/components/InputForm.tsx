import "tailwindcss/tailwind.css";
import CreateButton from "./button/CreateButton";
import SearchButton from "./button/SearchButton";

export default function InputForms(props) {
  const { inputText, onChange, onClick, pushEnter } = props;

  return (
    <div className="p-6 m-1">
      <div className="bg-white flex items-center rounded-full shadow-xl ">
        <input
          className="rounded-l-full w-full py-2 px-6 text-gray-700 leading-tight focus:outline-none"
          id="search"
          type="text"
          placeholder="題名を入力"
          value={inputText}
          onChange={onChange}
          onKeyDown={pushEnter}
        />
        <div className="p-4 flex ">
          <CreateButton onClick={onClick} />
          <SearchButton />
        </div>
      </div>
    </div>
  );
}