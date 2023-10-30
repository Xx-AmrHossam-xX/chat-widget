import React from "react";
import { users } from "../../backend";
import profilePic from "../../Media/AhmedMansour.jpg";
import { AiOutlineClose } from "react-icons/ai";
import "./Header.css";

interface HeaderProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const Header = ({ setIsOpen }: HeaderProps) => {
  return (
    <header className="window-header">
      {users.length === 1 ? (
        <div className="profilepic-name">
          <img src={users[0].profilePic} className="profile-picture" />
          <span>{users[0].name}</span>
        </div>
      ) : null}

      <button
        type="button"
        className="close-chat-window"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <AiOutlineClose />
      </button>
    </header>
  );
};
export default Header;
