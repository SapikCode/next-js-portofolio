

import React, { use } from 'react'
import { Syne } from 'next/font/google';
import { useTheme } from '../themes/ThemeContext';

const syne = Syne({
    subsets : ['latin'],
    weight : ['500','400']
})

const Sidebarr = () => {
 const {darkMode} = useTheme()

  return (
    <div className={syne.className} >
    <div className={`fixed w-[300px] h-auto pb-10 ${darkMode? 'bg-none text-black' : 'bg-none text-white'} text-white left-0 top-16 flex flex-col items-center border-r border-gray-700 rounded-xl z-10 backdrop-blur-sm  `}>
        <h1 className={`${darkMode? "text-black" : "text-white"} text-2xl mt-5`}>Shafiq Alifiruna</h1>
        <img src='logo.svg' className='w-[220px] h-[220px]' />
        <div className={`ml-[-40px] mt-10 ${darkMode ? "text-black" : "text-white"} `}>
        <h2 className='text-md'>Skill:</h2>
        <h1 className='text-xl'>UI Designer</h1>
        <h1 className='text-xl'>Full Stack Developer</h1>
        </div>
        <div className={`ml-[-30px] mt-10  ${darkMode ? "text-black" : "text-white"}`}>
        <h2 className='text-md'>Based In:</h2>
        <h1 className='text-xl'>Balikpapan,Indonesia</h1>
        </div>
        <ul className='flex flex-row gap-2 mt-7'>
        <li><img src='instagram.png' className='w-10 h-10 border border-white p-2 rounded-2xl transition-transform ease-in hover:translate-y-1' /></li>
        <li><img src='linkedin.png' className='w-10 h-10 border border-white p-2 rounded-2xl  transition-transform ease-in hover:translate-y-1' /></li>
        <li><img src='whatsapp.png' className='w-10 h-10 border border-white p-2 rounded-2xl  transition-transform ease-in hover:translate-y-1' /></li>
        <li><img src='github.png' className='w-10 h-10 border border-white p-2 rounded-2xl  transition-transform ease-in hover:translate-y-1' /></li>
       
        </ul>
        <h1 className={`text-2xl mt-5  ${darkMode ? "text-black border border-black" : "text-white border border-white"} p-2 rounded-2xl w-56 text-center h-15`}>Mari Berteman</h1>


      
    </div>
    </div>
  )
}



export default Sidebarr;