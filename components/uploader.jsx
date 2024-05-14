import { MdFileUpload } from "react-icons/md";

export default function FileUploader(){


    return(
        <div className="">
        {/* File upload icon */}
        <label htmlFor="fileInput" className="w-16  cursor-pointer flex items-center justify-center">
            <MdFileUpload className="w-8 h-8 " />
        </label>
        {/* Hidden file input */}
        <input
            id="fileInput"
            type="file"
            multiple
            className="hidden"
        />
    </div>
    )
}