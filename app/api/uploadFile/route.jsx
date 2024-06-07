
import axios from 'axios';
import { NextResponse } from 'next/server';
import formidable from 'formidable';

export const config = {
    api: {
      bodyParser: false, // Disable Next.js default bodyParser
    },
  };
  


export async function POST(req) {
    const form = new formidable.IncomingForm();

  form.parse(req, (err, fields, files) => {
    if (err) {
      console.error('Error parsing the files', err);
      return res.status(500).json({ error: 'Failed to parse file' });
    }

    const file = files.file;

    // Log file details
    console.log('File received:', file);

    // Forward the file to your backend server
    const formData = new FormData();
    formData.append('file', file);

    axios.post('http://localhost:4000/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    .then(response => {
      if (response.status !== 200) {
        throw new Error('Upload failed');
      }
      return res.status(200).json({ message: 'File uploaded successfully' });
    })
    .catch(error => {
      console.error(error);
      return res.status(500).json({ error: 'Failed to upload file' });
    });
  });
}
