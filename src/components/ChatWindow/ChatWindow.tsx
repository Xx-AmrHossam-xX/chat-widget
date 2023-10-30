import React, { useState } from "react";
import "./ChatWindow.css";
import Header from "../Header/Header";
import MessagesList from "../MessagesList/MessagesList";
import Footer from "../Footer/Footer";
import { User, backendMessages } from "../../backend";

interface ChatWindowProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
type Inputs = "text" | "audio" | "image";
export interface Message {
  user: User;
  type: Inputs;
  message: string;
}
const ChatWindow = ({ setIsOpen }: ChatWindowProps) => {
  const [messages, setMessages] = useState<Message[]>(backendMessages);
  const addNewMessage = (message: Message) => {
    setMessages([...messages, message]);
  };
  return (
    <div className="chat-window">
      <Header setIsOpen={setIsOpen} />
      <MessagesList messages={messages} />
      <Footer addNewMessage={addNewMessage} />
    </div>
  );
};
export default ChatWindow;
