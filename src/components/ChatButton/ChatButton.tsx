import React from "react";
import "./ChatButton.css";

interface ChatButtonProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const ChatButton = ({ setIsOpen }: ChatButtonProps) => {
  return (
    <button
      type="button"
      className="chat-button"
      onClick={() => setIsOpen((prev) => !prev)}
    ></button>
  );
};
export default ChatButton;
