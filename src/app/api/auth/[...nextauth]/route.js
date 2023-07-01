import User from "@/models/User";
import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"
import connectDB from "@/utils/db";
import { NextResponse } from "next/server";

const handle =  NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    CredentialsProvider({
      id: 'credentials',
      name: 'Sign in with Email and Password',
      async authorize(credentials) {

        await connectDB();

        try{
          console.log("Finding user")
          const user = await User.findOne({email: credentials.email});
          if(user){
            const isMatch = await bcrypt.compare(credentials.password, user.password);
            if(isMatch){
              console.log("Found user")
              return user;
            }
            else{
              throw new Error('Invalid Credentials');
            }
          }
          else{
            throw new Error('No user found!');
          }
        }
        catch(err){
          return new NextResponse(err.message, {status: 500})
        }
      },
    }),
  ],
  callbacks: {
    jwt: async ({ token, user }) => {
        user && (token.user = user)
        return token
    },
    session: async ({ session, token }) => {
        session.user = token.user
        return session
    }
  }
})

export {handle as GET, handle as POST} 