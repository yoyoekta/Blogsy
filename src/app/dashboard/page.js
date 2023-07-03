"use client"
import { useSession } from 'next-auth/react'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react'
import { FaTrashCan } from 'react-icons/fa6';
import useSWR from "swr"

const Dashboard = () => {

  const router = useRouter();
  const session = useSession();

  const username = session?.data?.user?.username;

  const fetcher = (...args) => fetch(...args).then(res => res.json())

  const { data, mutate, error, isLoading } = useSWR(`/api/posts?username=${username}`, fetcher)

  
  console.log(data)
  

  if(session.status === "loading") return (
    <div>Loading...</div>
  )

  if (session.status === "unauthenticated") {
    router?.push("/dashboard/login");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const title = e.target[0].value;
    const desc = e.target[1].value;
    const content = e.target[2].value;

    try{
      const res = await fetch('/api/posts', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({title, desc, content, username})
      })
      mutate();
      e.target.reset();
      res.status === 201 && router.push('/dashboard?success=Post Saved Successfully')
    }
    catch(err){
      console.log(err);
    }
  }

  const handleDelete = async (id) => {
    try {
      const del = await fetch(`/api/posts/${id}`, {
        method: "DELETE",
      });
      mutate();
    } 
    catch (err) {
      console.log(err);
    }
  }

  if(session.status === "authenticated") {
    return (
      <div className='w-[75vw] flex space-x-8 justify-evenly'>
        <div className='flex-1 flex flex-col space-y-8 justify-start'>
          <h1 className="font-black text-[50px] text-center leading-11 mb-2 bg-clip-text text-transparent bg-gradient-to-b from-blue-900 to-[#668FEC] dark:bg-gradient-to-b dark:from-[#668FEC] dark:to-blue-100 ">
            Your Posts
          </h1>
          {console.log(isLoading)}
          
          {isLoading ? "Loading" : (data.length === 0 ? <div className='font-black text-center text-blue-500 text-xl'>Add new post to show up here</div> : data.map((post) => (
            <div className='flex space-x-4' key={post._id}>
              <div className='basis-1/4 flex justify-center'>
                <Image src="/aboutpage.jpg" width={300} height={300} />
              </div>
              <div className='basis-1/2 flex flex-col'>
                <h3 className='font-black text-2xl mb-2 text-blue-800'>{post.title}</h3>
                <p className='text-xl leading-6'>{post.desc}</p>
              </div>            
              <div className=' basis-1/4 flex justify-center items-center cursor-pointer' onClick={() => handleDelete(post._id)}>
                <FaTrashCan className='text-2xl cursor-pointer'/>
              </div>
            </div>
          )))
          } 
        </div>

        <div className='flex-1 flex flex-col space-y-8 justify-center'>
          <h1 className="font-black text-[50px] text-center leading-11 mb-2 bg-clip-text text-transparent bg-gradient-to-b from-blue-900 to-[#668FEC] dark:bg-gradient-to-b dark:from-[#668FEC] dark:to-blue-100 ">
            Create a Post
          </h1>
          <form className="flex flex-col space-y-4 min-w-full" onSubmit={handleSubmit}>
            <div className="flex flex-col space-y-2">
              <input type='text' className="border-2 border-slate-400 rounded-lg p-2 bg-inherit" placeholder='Title' required/>
            </div>
            <div className="flex flex-col space-y-2">
              <input type='text' className="border-2 border-slate-400 rounded-lg p-2 bg-inherit" placeholder='Short Description' required/>
            </div>
            {/* <div className="flex flex-col space-y-2">
              <input type='file' accept='.jpg, .png, .jpeg' className="border-2 border-slate-400 rounded-lg p-2 bg-inherit" placeholder='Image' required/>
            </div> */}
            <div className="flex flex-col space-y-2">
              <textarea type='text' className="border-2 border-slate-400 rounded-lg p-2 bg-inherit" placeholder='Content' cols={30} rows={10} required/>
            </div>
            <button type='submit' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" >
              Submit
            </button>
          </form>

        </div>
      </div>
    )
  }
}

export default Dashboard