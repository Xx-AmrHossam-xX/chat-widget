import { Message } from "../ChatWindow/ChatWindow";
import "./Message.css";

const MessageComponent = ({ user, type, message }: Message) => {
  switch (type) {
    case "text":
      return <p dir="auto">{message}</p>;
    case "audio":
      return <audio src={message} controls />;
    case "image":
      return <img className="image-message" src={message} alt="" />;

    default:
      throw new Error("Un recognized type");
  }
};
export default MessageComponent;
