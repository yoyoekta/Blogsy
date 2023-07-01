"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React from 'react'

const Register = () => {

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const username = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;

        try{
            const res = await fetch('/api/auth/register', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({username, email, password})
            })
            
            res.status === 201 && router.push('/dashboard/login?success=Account Created Successfully')
        }
        catch(err){
            console.log(err);
        }
    }

    

    return (
        <div className='flex flex-col space-y-2'>
            <h1 className="font-black text-[50px] text-center leading-11 mb-2 bg-clip-text text-transparent bg-gradient-to-b from-blue-900 to-[#668FEC] dark:bg-gradient-to-b dark:from-[#668FEC] dark:to-blue-100 ">
                Register
            </h1>
            <form className="flex flex-col space-y-4 min-w-full" onSubmit={handleSubmit}>
                <div className="flex flex-col space-y-2">
                <input type='text' className="border-2 border-slate-400 rounded-lg p-2 bg-inherit" placeholder='Username' required/>
                </div>
                <div className="flex flex-col space-y-2">
                <input type='email' className="border-2 border-slate-400 rounded-lg p-2 bg-inherit" placeholder='Email Address' required/>
                </div>
                <div className="flex flex-col space-y-2">
                <input type='password' className="border-2 border-slate-400 rounded-lg p-2 bg-inherit" placeholder='Password' required/>
                </div>
                <button type='submit' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Register
                </button> 
            </form>
            <Link href="/dashboard/login" className='text-slate-400 text-center space-y-2'>Login with an existing account</Link>
        </div>
    )
}

export default Register