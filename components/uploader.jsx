import { useEffect, useRef, useState } from "react";
import { MdFileUpload } from "react-icons/md";

export default function FileUploader() {
  const [file, setFile] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    if (file) {
      uploadFile();
    }
  };

  const uploadFile = async () => {
    const formData = new FormData();
    formData.append("file", file);
    console.log(formData);
    fetch("/api/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };

  return (
    <div className="">
      {/* File upload icon */}
      <label
        htmlFor="fileInput"
        className="w-16  cursor-pointer flex items-center justify-center"
      >
        <MdFileUpload className="w-8 h-8 " />
      </label>
      {/* Hidden file input */}
      <input
        // ref={hiddenFileInput}
        id="fileInput"
        type="file"
        className="hidden"
        onChange={handleFileChange}
      />
    </div>
  );
}
