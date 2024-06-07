
import axios from 'axios';
import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const response = await axios.get('http://localhost:4000/filenames');
        const filenames = response.data;
        return NextResponse.json(filenames);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch filenames' }, { status: 500 });
    }
}
