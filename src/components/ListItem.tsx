import { title } from "process";
import React, { TextareaHTMLAttributes, useState, VFC } from "react";

import TextareaAutosize from "@mui/material/TextareaAutosize";
import { DeleteButton } from "./button/DeleteButton";
import { SaveButton } from "./button/SaveButton";
import { styled, Box } from "@mui/system";
import ModalUnstyled from "@mui/core/ModalUnstyled";

const StyledModal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Backdrop = styled("div")`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const style = {
  width: 800,
  height: 500,
  bgcolor: "#FFF",
  p: 2,
  px: 4,
  pb: 3,
  borderRadius: 6,
};

type Props = {
  themes?: string[];
  theme?: string;
  index?: number;
  onClickDelete: (index: number) => Promise<void>;
  onClickSave: () => Promise<void>;
  content: string;
  handleContentChange: TextareaHTMLAttributes<HTMLTextAreaElement>["onChange"];
  title?: string;
  id: string;
  defaultValue?: string;
};

export const ListItem: VFC<Props> = (props) => {
  const { onClickDelete, onClickSave, theme, handleContentChange, content, defaultValue , id} =
    props;
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <div key={id} className="max-w-screen-xl">
      <li>
        <div className="bg-white p-6 shadow-lg rounded-lg flex justify-between items-center mx-6 my-1">
          <div className="flex ml-6">
            <button className="text-gray-600 outline-none" onClick={openModal}>
              {theme}
            </button>
          </div>
          <div className="mr-5">
            <DeleteButton onClickDelete={onClickDelete} title={title} />
          </div>
        </div>
        <div>
          <StyledModal
            aria-labelledby="unstyled-modal-title"
            aria-describedby="unstyled-modal-description"
            open={isOpen}
            onClose={closeModal}
            BackdropComponent={Backdrop}
          >
            <Box sx={style}>
              <h1 className="text-2xl p-4">{theme}</h1>
              <TextareaAutosize
                aria-label="maximum height"
                minRows={10}
                maxRows={10}
                placeholder="メモを入力"
                style={{
                  justifyContent: "center",
                  width: "100%",
                  fontSize: "1.2rem",
                  padding: "1rem",
                  resize: "none",
                }}
                value={content}
                defaultValue={defaultValue}
                onChange={handleContentChange}
              />
              <div className="px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <SaveButton onClickSave={onClickSave} />
              </div>
            </Box>
          </StyledModal>
        </div>
      </li>
    </div>
  );
};
