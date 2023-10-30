import { useState } from "react";
import ChatButton from "./components/ChatButton/ChatButton";
import ChatWindow from "./components/ChatWindow/ChatWindow";
import { useTranslation } from "react-i18next";
import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const onClickLanguageChange = (e: any) => {
    const language = e.target.value;
    i18n.changeLanguage(language); //change the language
  };
  return (
    <div className="wrapper" dir={i18n.dir()}>
      <div>
        <select
          className="custom-select"
          style={{ width: 200 }}
          onChange={onClickLanguageChange}
        >
          <option value="en">English</option>
          <option value="ar">عربى</option>
        </select>
      </div>
      {!isOpen ? (
        <ChatButton setIsOpen={setIsOpen} />
      ) : (
        <ChatWindow setIsOpen={setIsOpen} />
      )}
    </div>
  );
}

export default App;
