

import axios from "axios";



export default function DeleteButton({ fileName }) {

    const deleteFileHandler = async () => {
        try {
            const response = await axios.delete("http://localhost:3000/api/deleteFile", {
                data: { fileName: fileName }, // Correct way to send data in a DELETE request
            });
            // console.log(response.data); // Ensure to access the data property of the response
            if (response.status === 200) {
                alert('File Deleted successfully');
              } else {
                alert('Delete operation failed');
              }
        } catch (error) {
            console.error("Error deleting file:", error);
        }
    }

    return(
        <div className="text-center rounded border-2 border-red-500 text-red-500 hover:bg-red-200 hover:border-red-600 hover:text-red-600 hover:cursor-pointer"
        onClick={deleteFileHandler}
        >
            Delete
        </div>
    );
}