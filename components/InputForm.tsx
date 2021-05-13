import "tailwindcss/tailwind.css";

export default function InputForms(props) {
  const { inputText, onChange, onClick,onKeyPress } = props;
  return (
    <div className="p-6 m-1">
      <div className="bg-white flex items-center rounded-full shadow-xl ">
        <input
          className="rounded-l-full w-full py-2 px-6 text-gray-700 leading-tight focus:outline-none "
          id="search"
          type="text"
          placeholder="題名を入力"
          value={inputText}
          onChange={onChange}
          onKeyPress={onKeyPress}
        />
        <div className="p-4">
          <button
            className="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-400 focus:outline-none w-12 h-12 flex items-center justify-center"
            onClick={onClick}
          >
            追加
          </button>
        </div>
      </div>
    </div>
  );
}
