import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

async function getPosts() {
  const res = await fetch('http://localhost:3000/api/posts', {cache: 'no-cache'});

  if(!res.ok) {
    throw new Error(res.statusText);
  }

  return res.json();
}

const Blog = async() => {
  const data = await getPosts();
  return (
    <div className='max-w-7xl'>
      <h1 className="font-black text-[50px] text-center leading-11 mb-2 bg-clip-text text-transparent bg-gradient-to-b from-blue-900 to-[#668FEC] dark:bg-gradient-to-b dark:from-[#668FEC] dark:to-blue-100 ">
        Curated Blogs for you
      </h1>

      {data.map((post) => (
        <Link href={`/blog/${post._id}`} key={post._id}>
          <div className='max-w-8xl flex flex-wrap items-center justify-center'>
            <div className='p-2 flex justify-center'>
              <div className='p-6'>
                <h2 className='font-bold text-xl mb-2'>{post.title}</h2>
                <p className='text-gray-700 dark:text-gray-400 text-base'>{post.desc}</p>
              </div>
              <div className='bg-white rounded-lg shadow-lg'>
                <Image src={post.img} alt='random' width={250} height={200} className='rounded-t-lg' />
              </div>
            </div>
          </div>
        </Link>
      ))}
      </div>
    
  )
}

export default Blog