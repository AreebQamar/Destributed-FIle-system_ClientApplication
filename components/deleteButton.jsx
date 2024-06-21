

import axios from "axios";


import { MdDelete } from "react-icons/md";

export default function DeleteButton({ fileName }) {

    const deleteFileHandler = async () => {
        try {
            const response = await axios.delete("http://localhost:3000/api/deleteFile", {
                data: { fileName: fileName }, // Correct way to send data in a DELETE request
            });
            // console.log(response.data); // Ensure to access the data property of the response
        } catch (error) {
            console.error("Error deleting file:", error);
        }
    }

    return(
        <div 
        onClick={deleteFileHandler}
        >
            <MdDelete />
        </div>
    );
}