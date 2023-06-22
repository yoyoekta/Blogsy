"use client"

import React, { useEffect, useState } from 'react'
import { FaMoon, FaSun } from "react-icons/fa6";
import { useTheme } from 'next-themes';

const DarkMode = () => {

  const [mounted, setMounted] = useState(false)
  const {theme, setTheme} = useTheme()
  useEffect(() => setMounted(true), [])

  if(mounted){
    return theme === "dark" ? (
      <div className='relative flex space-x-1 items-center border-2  rounded-2xl p-1 cursor-pointer' onClick={() => setTheme('light')}>
          <div><FaMoon/></div>
          <div className='text-sm'><FaSun/></div>
          {console.log(theme)}
          <div className='absolute rounded-full bg-blue-500 w-4 h-4' style={theme === 'light' ? {left: "0px"} : {right:"4px"}}></div>
      </div>
    ) : 
      <div className='relative flex space-x-1 items-center border-2 border-black rounded-2xl p-1 cursor-pointer' onClick={()=>setTheme('dark')}>
      <div><FaMoon/></div>
      <div className='text-sm'><FaSun/></div>
      {console.log(theme)}
      <div className='absolute rounded-full bg-blue-500 w-4 h-4' style={theme === 'light' ? {left: "0px"} : {right:"4px"}}></div>
</div>
  } else {
    return null
  }
}

export default DarkMode