import connectMongoDb from "@/libs/mongodb";
import NeedHelps from "@/models/needhelp";
import mongoose from "mongoose";
import { NextResponse } from "next/server";


export async function POST(response){
    const { fname, email, desc } = await response.json();
    await connectMongoDb();
    await NeedHelps.create({ fname, email, desc });
    return NextResponse.json({message: "Request Sent"}, {status: 201});
}

export async function GET() {
    await connectMongoDb();
    const needhelps = await NeedHelps.find();
    return NextResponse.json({needhelps});
}

export async function DELETE(request){
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDb();
    await NeedHelps.findByIdAndDelete(id);
    return NextResponse.json({message: "Request Deleted"}, {statues: 200});
}