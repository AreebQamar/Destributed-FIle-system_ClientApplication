// files.jsx
import { useEffect, useState } from "react";
import axios from "axios";
import { defaultStyles, FileIcon } from "react-file-icon";
import DeleteButton from "./deleteButton";

export default function Files({ filter }) {
  const [filesData, setFilesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/fileNames");
        setFilesData(response.data.files);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    console.log("bool changed");
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  async function handleDownload(filename) {
    try {
      const response = await fetch(
        `http://localhost:4000/getfile?fileName=${filename}`
      );
      if (!response.ok) {
        alert("Sorry can download this file!");
        return;
      }
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = filename; // This attribute will prompt the "Save As" dialog
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading file", error);
    }
  }
  function getExtension(filename) {
    return filename.slice(((filename.lastIndexOf(".") - 1) >>> 0) + 2);
  }

  async function downloadHelper(fileName) {
    await handleDownload(fileName);
  }

  return (
    <div className="grid grid-cols-3 m-[5%] gap-40 place-items-center p-20">
      {
        filesData.map((filename, index) => {
          if (filename.toLowerCase().includes(filter.toLowerCase())) {
            const extension = getExtension(filename);
            return (
              <div>
                <div
                  key={index}
                  onClick={() => downloadHelper(filename)}
                  className="flex flex-col items-center h-40 w-52 py-4 hover:bg-slate-400 rounded-lg"
                >
                  <FileIcon extension={extension} {...defaultStyles[extension]} />

                  <p className="cursor-pointer mb-4 text-2xl font-bold">
                    {filename}
                  </p>

                </div>
                  <DeleteButton fileName={filename} />
              </div>
            );
          }

          return null;
        })
      }
    </div>
  );

  // return (
  //   <div className="m-4 p-2 border-2 border-gray-500 h-4/5 overflow-y-scroll">
  //     {filesData
  //       .filter((filename) =>
  //         filename.toLowerCase().includes(filter.toLowerCase())
  //       )
  //       .map((filename, index) => (
  //         <div key={index} className="">
  //           <button
  //             onClick={() => handleDownload(filename)}
  //             className="text-2xl cursor-pointer hover:bg-white flex flex-col p-4 rounded-md"
  //           >
  //             {filename}
  //           </button>
  //           <svg height="20">
  //             <line x1="0" y1="10" x2="200" y2="10" stroke="white" />
  //           </svg>
  //         </div>
  //       ))}
  //   </div>
  // );
}
