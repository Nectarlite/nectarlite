import connectMongoDb from "@/libs/mongodb";
import NeedHelps from "@/models/needhelp";
import { NextResponse } from "next/server";


export async function PUT(request, { params }) {
    const { id } = params;
    const { newFname: fname, newEmail: email } = await request.json();
    await connectMongoDb();
    await NeedHelps.findByIdAndUpdate(id, { fname, email});
    return NextResponse.json({message: "Request updated"}, {status: 200});
}