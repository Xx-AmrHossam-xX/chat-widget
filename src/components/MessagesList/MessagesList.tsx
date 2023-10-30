import React from "react";
import "./MessagesList.css";
import { Message } from "../ChatWindow/ChatWindow";
import MessageComponent from "../Message/Message";
import { users } from "../../backend";

interface MessagesListProps {
  messages: Message[];
}

const MessagesList = ({ messages }: MessagesListProps) => {
  return (
    <div className="messages-list">
      {messages.map(({ user, type, message }: Message, key) => (
        <div
          className={`user-message-container ${
            user.isCurrentUser ? "current-user" : ""
          }`}
          key={`message-${key}`}
        >
          {!user.isCurrentUser ? (
            <img src={user.profilePic} className="profile-picture" />
          ) : null}
          <div
            className={`message-container ${
              type !== "text" ? "media-messages" : ""
            }`}
          >
            <MessageComponent user={user} type={type} message={message} />
          </div>
        </div>
      ))}
    </div>
  );
};
export default MessagesList;
