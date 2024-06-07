// files.jsx
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Files({ filter }) {
    const [filesData, setFilesData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/api/fileNames');
                setFilesData(response.data.files);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className="m-4 p-2 border-2 border-gray-500 h-4/5 overflow-y-scroll">
            {
                filesData.filter(filename => filename.toLowerCase().includes(filter.toLowerCase()))
                    .map((filename, index) => (
                        <div key={index} className="">
                            <div className="text-2xl">
                                {filename}
                            </div>
                            <svg height="20">
                                <line x1="0" y1="10" x2="200" y2="10" stroke="white" />
                            </svg>
                        </div>
                    ))
            }
        </div>
    );
}
