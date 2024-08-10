import { NextRequest, NextResponse } from "next/server"
import client from "@/db";

export async function GET() {
  return Response.json({name: "smith clark", email: "smith@gmail.com"})
}

export async function POST (req: NextRequest) {
  try {
    const body = await req.json();
  
    await client.user.create({
      data: {
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
        password: body.password
      }
    });

    return NextResponse.json({
      message: "Logged in successfully!"
    });
  } catch (e) {
    return NextResponse.json({
      message: "Error while sign up",
    }, {
      status: 411
    });
  }
};
