import { useEffect, useState } from "react";
import { MdFileUpload } from "react-icons/md";
import axios from 'axios';

export default function FileUploader() {
  const [file, setFile] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    console.log("File selected");
  };

  useEffect(() => {
    if (file) {
      handleUpload();
    }
  }, [file]);

  const handleUpload = async () => {
    if (!file) {
      alert('Please select a file first.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('/api/uploadFile', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        alert('File uploaded successfully');
      } else {
        alert('File upload failed');
      }
    } catch (error) {
      alert('Error uploading file: ' + error.message);
    }
    setFile("");
  };

  return (
    <div className="">
      {/* File upload icon */}
      <label
        htmlFor="fileInput"
        className="w-16 cursor-pointer flex items-center justify-center"
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
