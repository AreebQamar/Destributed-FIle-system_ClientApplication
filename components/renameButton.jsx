

import axios from "axios";




export default function RenameButton({ fileName }) {

    const deleteFileHandler = async () => {
        try {
            const response = await axios.delete("http://localhost:3000/api/renameFile", {
                data: { fileName: fileName }, // Correct way to send data in a DELETE request
            });
            // console.log(response.data); // Ensure to access the data property of the response
        } catch (error) {
            console.error("Error deleting file:", error);
        }
    }

    return(
        // <div className="text-center px-3 rounded border-2 border-white text-white hover:bg-gray-100 hover:border-gray-600 hover:text-gray-600 hover:cursor-pointer"
        <div className="text-center px-3 rounded border-2 bg-gray-300 border-gray-500 text-gray-500 "
        // onClick={deleteFileHandler}
        >
            Rename
        </div>
    );
}