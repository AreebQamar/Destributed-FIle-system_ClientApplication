import { NextResponse } from "next/server";



export async function POST(req, res) {
    try {
      const formData = await req.formData();
      const file = formData.get('file');
  
      if (!file) {
        return NextResponse.json({ error: 'No file received' }, { status: 400 });
      }
  
      const backendResponse = await fetch('http://localhost:4000/upload', {
        method: 'POST',
        body: formData,
      });
  
      if (backendResponse.ok) {
        return NextResponse.json({ message: 'uploaded successfully' }, { status: 200 });
      } else {
        const errorText = await backendResponse.text();
        return NextResponse.json({ error: 'Back end error', errorText }, { status: 500 });
      }
    } catch (error) {
        return NextResponse.json({ error: 'Failed to upload file' }, { status: 500 });

    }
  }
  