import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
    return NextResponse.json({ message: "Hello" });
}   
export function POST(request: NextRequest) {
    return NextResponse.json({ message: "Test post" });
}   