import filesData from "./tempFileData";

export default function Files({filter}) {
    
    return (
        <div className="m-4 p-2 border-2 border-gray-500 h-4/5 overflow-y-scroll">
            {
                filesData.map((filename, index) => (
                    filename.toLowerCase().includes(filter.toLowerCase()) &&
                    <div key={index}>{filename}</div>
                ))
            }
        </div>
    )
}