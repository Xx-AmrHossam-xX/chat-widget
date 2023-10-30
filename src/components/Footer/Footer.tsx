import { useReactMediaRecorder } from "react-media-recorder";
import { useTranslation } from "react-i18next";
import { debounce } from "lodash";
import {
  BsFillMicFill,
  BsPauseFill,
  BsFillPlusCircleFill,
} from "react-icons/bs";
import { AiOutlineSend, AiOutlineClose } from "react-icons/ai";
import "./Footer.css";
import { Message } from "../ChatWindow/ChatWindow";
import { useEffect, useMemo, useState } from "react";
import ImageUpload from "../ImageUpload/ImageUpload";
import DummyVideoComponent from "./DummyVideoComponent";
import { currentUser } from "../../backend";

interface FooterProps {
  addNewMessage: (message: Message) => void;
}
const Footer = ({ addNewMessage }: FooterProps) => {
  const { t, i18n } = useTranslation();

  const [textValue, setTextValue] = useState("");
  const [image, setImage] = useState<string>("");

  const {
    status,
    startRecording,
    stopRecording,
    pauseRecording,
    resumeRecording,
    clearBlobUrl,
    mediaBlobUrl,
  } = useReactMediaRecorder({});

  const send = () => {
    if (textValue.trim()) {
      addNewMessage({
        user: currentUser,
        type: "text",
        message: textValue.trim(),
      });
    } else if (image.length) {
      addNewMessage({ user: currentUser, type: "image", message: image });
    } else if (status === "recording" || status === "paused") {
      stopRecording();
    }
  };
  useEffect(() => {
    if (status === "stopped" && mediaBlobUrl?.length) {
      addNewMessage({
        user: currentUser,
        type: "audio",
        message: mediaBlobUrl,
      });
    }
  }, [status]);

  useEffect(() => {
    setTextValue("");
    setImage("");
    debounce(function () {
      mediaBlobUrl?.length && clearBlobUrl();
    }, 1000);
  }, [addNewMessage]);
  const [showAllInputs, setShowAllInputs] = useState(false);
  const extraInputs: Array<() => JSX.Element> = useMemo(() => {
    return [
      DummyVideoComponent,
      DummyVideoComponent,
      DummyVideoComponent,
      DummyVideoComponent,
      DummyVideoComponent,
      DummyVideoComponent,
      DummyVideoComponent,
      DummyVideoComponent,
    ];
  }, []);
  return (
    <footer>
      <div className="extra-inputs-container">
        {showAllInputs && (
          <ul>
            {extraInputs.map((Input: () => JSX.Element) => {
              return (
                <li>
                  <Input />
                </li>
              );
            })}
          </ul>
        )}
        <button
          type="button"
          onClick={() => setShowAllInputs((prev) => !prev)}
          className="show-all-inputs"
        >
          {showAllInputs ? <AiOutlineClose /> : <BsFillPlusCircleFill />}
        </button>
      </div>

      <ImageUpload setImage={setImage} />
      <button
        onClick={
          status === "idle" || status === "stopped"
            ? startRecording
            : status === "paused"
            ? resumeRecording
            : pauseRecording
        }
        type="button"
        className="voice-input"
      >
        {status === "idle" || status === "stopped" ? (
          <BsFillMicFill />
        ) : status === "paused" ? (
          <AiOutlineSend className="resume-icon" />
        ) : (
          <BsPauseFill />
        )}
      </button>
      <div className="image-preview-text-container">
        {image.length ? (
          <div className="image-preview-container">
            <button
              type="button"
              onClick={() => setImage("")}
              className="clear-image"
            >
              <AiOutlineClose />
            </button>
            <img src={image} alt="preview" className="image-preview" />
          </div>
        ) : (
          <textarea
            draggable="false"
            placeholder={t("text_placeholder")}
            value={textValue}
            onChange={(e) => setTextValue(e.target.value)}
          />
        )}
      </div>

      <button type="button" onClick={() => send()} className="send">
        <AiOutlineSend />
      </button>
    </footer>
  );
};
export default Footer;
