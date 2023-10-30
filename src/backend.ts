import AhmedMansour from "./Media/AhmedMansour.jpg";
import Aly from "./Media/Aly.jpg";
import dummyPhoto1 from "./Media/dummyPhoto1.jpg";
import dummyPhoto3 from "./Media/dummyPhoto3.avif";
import { Message } from "./components/ChatWindow/ChatWindow";

export interface User {
  name: string;
  profilePic: string;
  isCurrentUser: boolean;
}

export const currentUser: User = {
  name: "Aly",
  profilePic: Aly,
  isCurrentUser: true,
};
export const users: Array<User> = [
  {
    name: "Ahmed Mansour",
    profilePic: AhmedMansour,
    isCurrentUser: false,
  },
];
export const backendMessages: Message[] = [
  {
    type: "text",
    user: {
      name: "Ahmed Mansour",
      profilePic: AhmedMansour,
      isCurrentUser: false,
    },
    message: "First Messsage",
  },
  {
    type: "text",
    user: currentUser,
    message: "First Messsage from current user",
  },
  {
    type: "text",
    user: {
      name: "Ahmed Mansour",
      profilePic: AhmedMansour,
      isCurrentUser: false,
    },
    message: "Second Messsage",
  },
  {
    type: "text",
    user: currentUser,
    message:
      "Second Messsage from current user. asdsad asd sa dsad asd asd asdasd asdsadsa sadsadsad",
  },
  {
    type: "image",
    user: {
      name: "Ahmed Mansour",
      profilePic: AhmedMansour,
      isCurrentUser: false,
    },
    message: dummyPhoto1,
  },
  {
    type: "image",
    user: {
      name: "Ahmed Mansour",
      profilePic: AhmedMansour,
      isCurrentUser: false,
    },
    message: dummyPhoto3,
  },
  {
    type: "text",
    user: {
      name: "Ahmed Mansour",
      profilePic: AhmedMansour,
      isCurrentUser: false,
    },
    message: "هذا التطبيق يسنطيع التعامل مع اللغة العربية أيضا",
  },
];
