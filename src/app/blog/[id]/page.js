import Image from 'next/image'
import React from 'react'
import { notFound } from 'next/navigation'

async function getPost(id) {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`, {cache: 'no-cache'});
  if(!res.ok) {
    return notFound();
  }
  return res.json();
}

const BlogPost = async({params}) => {
  const data = await getPost(params.id);
  return (
    <div className='flex flex-col m-5 p-5'>
      <div className='flex justify-between'>
        <div className=' basis-2/3 flex flex-col justify-between space-y-3 items-start'>
          <h1 className='font-black text-2xl'>{data.title}</h1>
          <p className='leading-5 text-lg'>{data.desc}</p>
          <div className='flex items-center space-x-2'>
            {/* <Image src=avatar alt='random' width={40} height={40} className='rounded-full' /> */}
            <p className='text-base'>{data.username}</p>
          </div>
        </div>
        <div className='relative basis-1/3 flex justify-end'>
          <Image src={data.img} alt='random' width={250} height={200} className='rounded-t-lg object-contain' />
        </div>
      </div>
      <div>
        <p className='my-5 text-justify'>{data.content}
        </p>
      </div>
    </div>
  )
}

export default BlogPost