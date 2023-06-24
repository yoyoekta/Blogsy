import connectDB from "@/utils/db";
import Post from "@/models/Post";
import { NextResponse } from "next/server";

export const GET = async(request) => {
    try{
        await connectDB();
        const posts = await Post.find();
        return new NextResponse(JSON.stringify(posts), {status: 200});
    }
    catch(err){
        return NextResponse.error(err);
    }
  }
