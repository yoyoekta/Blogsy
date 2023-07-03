import connectDB from "@/utils/db";
import Post from "@/models/Post";
import { NextResponse } from "next/server";

export const GET = async(request) => {

    const url = new URL(request.url);
    const username = url.searchParams.get("username");
    console.log(username);

    try{
        await connectDB();
        const posts = await Post.find(username && {username});
        return new NextResponse(JSON.stringify(posts), {status: 200});
    }
    catch(err){
        return NextResponse.error(err);
    }
  }

  
  export const POST = async (req) => {

    try{

        await connectDB();
        const { title, desc, content, username } = await req.json();

        const post = new Post({ 
            title: title, 
            desc: desc, 
            content: content, 
            username: username});

        await post.save();

        return new NextResponse('Post Created Successfully', {status: 201});

    }
    catch(err){
        return new NextResponse(err.message, {status: 500})
    }
}
