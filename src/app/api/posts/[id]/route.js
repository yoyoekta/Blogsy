import connectDB from "@/utils/db";
import Post from "@/models/Post";
import { NextResponse } from "next/server";

export const GET = async(request, {params}) => {
    const {id} = params;
    try{
        await connectDB();
        const post = await Post.findById(id);
        return new NextResponse(JSON.stringify(post), {status: 200});
    }
    catch(err){
        return new NextResponse(err, {status: 500});
    }
  }

export const DELETE = async(request, {params}) => {
    const {id} = params;
    try{
        await connectDB();
        await Post.findByIdAndDelete(id);
        return new NextResponse("Post Deleted", {status: 200});
    }
    catch(err){
        return new NextResponse(err, {status: 500});
    }
  }
