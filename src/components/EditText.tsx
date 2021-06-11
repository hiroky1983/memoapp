import "tailwindcss/tailwind.css";
import TextareaAutosize from "react-textarea-autosize";

export default function EditText(props) {
  const { content, handleContentChange,theme } = props;

  return (
    <div className="m-3">
      <label htmlFor="memo" className="flex-1 pb-20 cursor-text m-8">
        <p>{theme}</p>
        <TextareaAutosize
          id="memo"
          className="w-full text-lg outline-none resize-none sm:text-2xl"
          value={content}
          onChange={handleContentChange}
          placeholder="メモを入力する"
        />
        {/* <Interweave
  // content="This contains a URL, https://github.com/milesj/interweave, and a hashtag, #interweave, that will be converted to an anchor link!"
  matchers={[new UrlMatcher('url'), new HashtagMatcher('hashtag')]}
/>      */}
      </label>
    </div>
  );
}
