import filesData from "./tempFileData";

export default function Files({ filter }) {

    return (
        <div className="m-4 p-2 border-2 border-gray-500 h-4/5 overflow-y-scroll">
            {
                filesData.map((filename, index) => (
                    filename.toLowerCase().includes(filter.toLowerCase()) &&
                    <div key={index} className="">
                        <div className="text-2xl">
                            {filename}
                        </div>
                        <svg  height="20">
                            <line x1="0" y1="10" x2="200" y2="10" stroke="white" />
                        </svg>
                    </div>
                ))
            }
        </div>
    )
}