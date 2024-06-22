// files.jsx
import { useEffect, useState } from "react";
import axios from "axios";
import { defaultStyles, FileIcon } from "react-file-icon";
import { AiTwotoneFileUnknown } from "react-icons/ai";
import Menu from "./menu";

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
    <div>
      {
        filesData.length === 0 ?
            <div className="h-screen flex flex-col justify-center items-center text-center text-9xl">

              <AiTwotoneFileUnknown />
            <div className="text-3xl">
              No file available
            </div>
            </div>
          :
          <div className="grid grid-cols-3 m-[5%] gap-40 place-items-center p-20">
            {
              filesData.map((filename, index) => {
                if (filename.toLowerCase().includes(filter.toLowerCase())) {
                  const extension = getExtension(filename);
                  return (
                    <div key={index}>

                      <Menu className={"flex justify-end"}
                        fileName={filename}
                      />

                      <div
                        onClick={() => downloadHelper(filename)}
                        className="flex flex-col items-center h-40 w-52 py-4 hover:bg-slate-400 rounded-lg"
                      >
                        <FileIcon extension={extension} {...defaultStyles[extension]} />

                        <p className="cursor-pointer mb-4 text-2xl font-bold">
                          {filename}
                        </p>

                      </div>
                    </div>
                  );
                }

                return null;
              })
            }
          </div>
      }
    </div>
  );
}
