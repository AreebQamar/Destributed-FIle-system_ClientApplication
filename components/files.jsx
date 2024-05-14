import filesData from "./tempFileData";

export default function Files({filter}) {
    
    return (
        <div>
            {
                filesData.map((filename, index) => (
                    filename.toLowerCase().includes(filter.toLowerCase()) &&
                    <div key={index}>{filename}</div>
                ))
            }
        </div>
    )
}