import axios from "axios";
import { NextResponse } from "next/server";

export async function DELETE(request) {

    const {fileName} = await request.json();
    
    //testing.
    // console.log("delete file API:");
    // console.log("file Name: ", fileName);
    // return NextResponse.json({ message: 'file deleted successfully' }, { status: 200 });

    try {
        // Make a request to the backend delete file API
        const response = await axios.delete(`http://localhost:4000/deletefile`, {
            params: { fileName: fileName },
        });

        // Check if the response indicates success
        if (response.status === 200) {
            return NextResponse.json({ message: 'File deleted successfully' }, { status: 200 });
        } else {
            return NextResponse.json({ message: 'Error deleting file' }, { status: response.status });
        }
    } catch (error) {
        console.error('Error deleting file:', error);
        return NextResponse.json({ message: 'Error deleting file: ' + error.message }, { status: 500 });
    }
}