import User from "@/models/User";
import connectDB from "@/utils/db";
import { NextResponse } from "next/server";
import bcrypt from 'bcrypt';

export const POST = async (req) => {
    const { username, email, password } = await req.json();
    
    await connectDB();

    const hashedPassword = await bcrypt.hash(password, 5);

    const user = new User({
        username: username,
        email: email,
        password: hashedPassword
    })
    
    try{
        await user.save();
        return new NextResponse('Account Created Successfully', {status: 201})
    }
    catch(err){
        return new NextResponse(err.message, {status: 500})
    }
}
