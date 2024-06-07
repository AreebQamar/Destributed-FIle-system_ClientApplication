
import { useState } from "react";
import FileUploader from "./uploader";
import NewFileUploader from "./newFileUploader";


export default function Header({filterString, setfilterString}) {

    return (
        <div className="flex justify-center items-center space-x-3 mt-4">
            <input
                type="text"
                placeholder="Search..."
                id="search"
                value={filterString}
                onChange={(e) => (setfilterString(e.target.value))}
                className="p-2 border rounded-md placeholder-gray-500 text-black"
            />
            <FileUploader />
            {/* <NewFileUploader/> */}
        </div>
    )
}