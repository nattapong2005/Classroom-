import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";

interface User {
  email: string;
  password: string;
}


export async function GET() {
  return NextResponse.json({
    message: "Erorr",
  });

}

export async function POST(request: NextRequest) {
  const body: Partial<User> = await request.json();
  const {email, password } = body;

  if (!email || !password) {
    return NextResponse.json({ error: "ตรวจสอบข้อมูลให้ครบถ้วน" }, { status: 400 });
  }

  const hashedPassword = bcrypt.hashSync(password, 10);
  return NextResponse.json({
    email,
    hashedPassword,
  });
}