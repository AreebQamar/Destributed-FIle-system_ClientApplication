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
      uploadFile();
      // console.log(file)
    }
  }, [file]);

  const uploadFile = async () => {
   
    try {
      const formData = new FormData();
      formData.append('file', file);
      // formData.set("file", file);
      const response = await fetch(`http://localhost:4000/upload`,
      { 
        method:"POST",
        body:formData, 
      });
      
      // const response = await axios.post('/api/uploadFile',
      //   formData,
      // );

      // if (response.status !== 200) {
      //   throw new Error("Upload failed");
      // }

      console.log(response);
      alert("File uploaded successfully");
    } catch (error) {
      console.log(error);
      alert("Error uploading file");
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
