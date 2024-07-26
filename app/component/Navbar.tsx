'use client'

import { Syne } from 'next/font/google';
import { useTheme } from '../themes/ThemeContext';
import { useEffect } from 'react';

const syne = Syne({
    subsets : ['latin'],
    weight : ['600'],
})

const Navbar = ({ubah} : any) => {
  const {darkMode,toggleTheme} = useTheme()

  useEffect(()=> {
    console.log(darkMode)
  },[darkMode])

  const handleSmoothScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <div className={syne.className} >
    <div className={`fixed w-[78vw] h-20 bg-none justify-between flex ${darkMode ? "text-black" : "text-white"} items-center backdrop-blur-sm z-10`}>
    <ul className='gap-8 flex flex-row text-xl ml-10'>
      <li><a  className='p-2 hover:scale-105 transition-all hover:border-b border-white'>Home</a></li>
      <li><a href='#' onClick={() => handleSmoothScroll('tools')} className='p-2 hover:scale-105 transition-all hover:border-b border-white'>Portofolio</a></li>
      <li><a className='p-2 hover:scale-105 transition-all hover:border-b border-white'>Project</a></li>
      <li><a className='p-2 hover:scale-105 transition-all hover:border-b border-white'>About Me</a></li>
    </ul>
    <button onClick={()=>{toggleTheme();ubah()}} className='border border-white p-2 mr-5'>
        Change Mode
    </button>
    </div>
    </div>
    
  )
}

export default Navbar;