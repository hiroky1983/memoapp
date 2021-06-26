import { title } from "process";
import React, {
  Fragment,
  TextareaHTMLAttributes,
  useRef,
  useState,
} from "react";
import { Dialog, Transition } from "@headlessui/react";
import TextareaAutosize from "react-textarea-autosize";

import "tailwindcss/tailwind.css";
import DeleteButton from "./button/DeleteButton";
import SaveButton from "./button/SaveButton";

export default function MemosTheme(props) {
  const { themes, onClickDelete  } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState("");

  const cancelButtonRef = useRef(null);
  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const handleContentChange: TextareaHTMLAttributes<HTMLTextAreaElement>["onChange"] =
    (e) => {
      setContent(e.currentTarget.value);
    };

  return (
    <div className="max-w-screen-xl">
      <ul>
        {themes.map((theme: string, index: number ) => {         
          return (
            <div key={theme}>
              <li>
                <div className="bg-white p-6 shadow-lg rounded-lg flex justify-between items-center mx-6 my-1">
                  <div className="flex">
                    <div className="ml-5">
                      <button
                        className="text-gray-600 outline-none"
                        onClick={openModal}
                      >
                        {theme}
                      </button>
                      <Transition.Root show={isOpen} as={Fragment}>
                        <Dialog
                          as="div"
                          static
                          className="fixed z-10 inset-0 overflow-y-auto"
                          initialFocus={cancelButtonRef}
                          open={isOpen}
                          onClose={setIsOpen}
                        >
                          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                            
                            <Transition.Child
                              as={Fragment}
                              enter="ease-out duration-300"
                              enterFrom="opacity-0"
                              enterTo="opacity-100"
                              leave="ease-in duration-200"
                              leaveFrom="opacity-100"
                              leaveTo="opacity-0"
                            >
                              <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                            </Transition.Child>

                            {/* This element is to trick the browser into centering the modal contents. */}
                            <span
                              className="hidden sm:inline-block sm:align-middle sm:h-screen"
                              aria-hidden="true"
                            >
                              &#8203;
                            </span>
                            <Transition.Child
                              as={Fragment}
                              enter="ease-out duration-300"
                              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                              enterTo="opacity-100 translate-y-0 sm:scale-100"
                              leave="ease-in duration-200"
                              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            >
                              <div className="inline-block align-bottom  bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all  sm:align-middle sm:max-w-lg sm:w-full">
                                <div className="bg-white  px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                  <Dialog.Title
                                    as="h3"
                                    className="text-lg leading-6 font-medium text-gray-600"
                                  >
                                    {theme}
                                  </Dialog.Title>
                                  <TextareaAutosize
                                    id="memo"
                                    className="w-full text-lg outline-none resize-none sm:text-2xl"
                                    maxRows={4}
                                    aria-label="maximum height"
                                    value={content}
                                    onChange={handleContentChange}
                                    placeholder="メモを入力する"
                                  >
                                    {content}
                                  </TextareaAutosize>
                                </div>
                                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                  <button type="button" onClick={closeModal} ref={cancelButtonRef}>
                                    <SaveButton />
                                  </button>
                                </div>
                              </div>
                            </Transition.Child>
                          </div>
                        </Dialog>
                      </Transition.Root>
                    </div>
                  </div>
                  <div>
                    <DeleteButton
                      onClick={() => onClickDelete(index)}
                      title={title}
                    />
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
