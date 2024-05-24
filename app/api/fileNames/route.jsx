import { NextResponse } from "next/server";

export async function GET(){
    const filename = ["abc.txt", "cdf.png", "jhi.csv"];


    return NextResponse.json(filename);
}