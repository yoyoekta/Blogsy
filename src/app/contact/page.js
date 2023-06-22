import React from 'react'
import Image from 'next/image'

const Contact = () => {
  return (
    <div className='max-w-7xl'>
      <h1 className="font-black text-[50px] text-center leading-11 mb-2 bg-clip-text text-transparent bg-gradient-to-b from-blue-900 to-[#668FEC] dark:bg-gradient-to-b dark:from-[#668FEC] dark:to-blue-100 ">
        Any Queries?
      </h1>

      <div className="flex flex-row justify-around items-center">
        <div className="flex-1 flex justify-end">
          <Image
            src="/contact.svg"
            alt="Homepage Img"
            width={700}
            height={700}
            className='object-cover animate-[move_1.5s_infinite_cubic-bezier(.46,.41,.47,.43)_alternate]'
          />
        </div>
        <div className="flex-1 mx-6 flex flex-col justify-between space-y-8">
          <form className="flex flex-col space-y-4">
            <div className="flex flex-col space-y-2">
              <label className="text-slate-400 text-[18px]">Name</label>
              <input className="border-2 border-slate-400 rounded-lg p-2 bg-inherit" />
            </div>
            <div className="flex flex-col space-y-2">
              <label className="text-slate-400 text-[18px]">Email</label>
              <input className="border-2 border-slate-400 rounded-lg p-2 bg-inherit"/>
            </div>
            <div className="flex flex-col space-y-2">
              <label className="text-slate-400 text-[18px]">Message</label>
              <textarea className="border-2 border-slate-400 rounded-lg p-2 bg-inherit h-[13vh]"/>
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-40">
              Submit
            </button>
          </form>
        
          
        </div>
      </div>
    </div>
    
  )
}

export default Contact