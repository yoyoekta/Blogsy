import User from "@/models/User";
import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"
import connectDB from "@/utils/db";
import bcrypt from "bcrypt";

const handle =  NextAuth({
  providers: [
    CredentialsProvider({
      id: 'credentials',
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "email", placeholder: "Email" },
        password: { label: "Password", type: "password", placeholder: "Password" }
      },
      async authorize(credentials) {

        await connectDB();

        try{
          console.log("Finding user")
          const user = await User.findOne({email: credentials.email});
          if(user){
            const isMatch = await bcrypt.compare(credentials.password, user.password);
            if(isMatch){
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
          throw new Error(err)
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      session.user = token.user;
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.user = user;
      }
      return token;
    },
  },
})

export {handle as GET, handle as POST} 