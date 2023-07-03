"use client"

import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation';

const Login = () => {

  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    const res = await signIn('credentials', {email, password, redirect: false})
    if (res?.error) {
      console.log(res.error);
    } else {
      router?.push("/dashboard");
    }
  }


  return (
    <div className='flex flex-col space-y-2'>
      <h1 className="font-black text-[50px] text-center leading-11 mb-2 bg-clip-text text-transparent bg-gradient-to-b from-blue-900 to-[#668FEC] dark:bg-gradient-to-b dark:from-[#668FEC] dark:to-blue-100 ">
          Login
      </h1>
      <form className="flex flex-col space-y-4 min-w-full" onSubmit={handleSubmit}>
          <div className="flex flex-col space-y-2">
          <input type='email' className="border-2 border-slate-400 rounded-lg p-2 bg-inherit" placeholder='Email Address' required/>
          </div>
          <div className="flex flex-col space-y-2">
          <input type='password' className="border-2 border-slate-400 rounded-lg p-2 bg-inherit" placeholder='Password' required/>
          </div>
          <button type='submit' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" >
          Sign In with Email
          </button> 
      </form>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={()=>signIn("google")}>Login with Google</button>
  </div>
    
  )
}

export default Login