import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const About = () => {
  return (
    <div className="max-w-7xl flex flex-col items-center justify-between space-y-12">
      <div className='w-full h-[50vh] relative'>
        <Image src="/aboutpage.jpg" alt="About Image" fill className='object-cover'></Image>
        <div className='absolute bottom-8 left-8 bg-blue-400 px-4 py-2 rounded-md'>
          <h1 className='font-black text-3xl'>Building future</h1>
          <h2 className='font-500 text-lg'>Providing space for you to share your learnings.</h2>
        </div>
        
      </div>
      
      <div className='flex mx-4 justify-between space-x-20'>
        <div className='flex-1'>
          <h1 className='font-black text-2xl mb-4'>Who are We?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quae dolor, optio voluptatibus magnam iure esse tempora beatae. A
            suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
            eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ducimus quae dolor, optio voluptatibus magnam iure esse tempora
            beatae, a suscipit eos. Animi quibusdam cum omnis officiis
            <br></br><br></br>
            Animi quibusdam cum omnis officiis voluptatum quo ea
            eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ducimus quae dolor, optio voluptatibus magnam iure esse tempora
            beatae, a suscipit eos. Animi quibusdam cum omnis officiis
          </p>
        </div>

        <div className='flex-1 flex flex-col justify-start'>
          <h1 className='font-black text-2xl mb-4'>What we do?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quae dolor, optio voluptatibus magnam iure esse tempora beatae. A
            suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
            eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ducimus quae dolor, optio voluptatibus magnam iure esse tempora
            beatae, a suscipit eos. Animi quibusdam cum omnis officiis
          </p>
          <Link href='/contact'>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-40 mt-4">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default About