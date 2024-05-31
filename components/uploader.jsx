import { useEffect, useRef, useState } from "react";
import { MdFileUpload } from "react-icons/md";
import LoadingSpinner from "./loading-spinner";
export default function FileUploader() {
  const [file, setFile] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    console.log("File selected");
  };

  useEffect(() => {
    if (file != "") {
      uploadFile();
      setFile("");
    }
  }, [file]);

  const uploadFile = async () => {
    const formData = new FormData();
    formData.append("file", file);
    console.log(formData);
    try {
      const response = await fetch("http://localhost:4000/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Upload failed");
      }

      const result = await response.json();
      console.log("Upload successful:", result);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
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
        id="fileInput"
        type="file"
        className="hidden"
        onChange={handleFileChange}
      />
    </div>
  );
}
