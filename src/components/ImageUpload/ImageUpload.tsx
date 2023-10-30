import { BsFillImageFill } from "react-icons/bs";
import "./ImageUpload.css";

interface ImageUploadProps {
  setImage: React.Dispatch<React.SetStateAction<string>>;
}
const ImageUpload = ({ setImage }: ImageUploadProps) => {
  const selectImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = event.target.files as FileList;

    setImage(URL.createObjectURL(selectedFiles?.[0]));
  };

  return (
    <div>
      <label className="image-label-input">
        <BsFillImageFill className="image-icon" />
        <input type="file" accept="image/*" onChange={selectImage} />
      </label>
    </div>
  );
};

export default ImageUpload;
