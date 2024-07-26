"use client"

import React, { Suspense } from 'react'
import Navbar from './component/Navbar';
import Sidebarr from './component/Sidebar';
import { Poppins } from 'next/font/google';
import Spotfix from './component/Spot/Spotfix';
import Skill from './component/Skill/Skill';
import Project from './component/Project';
import { ThemeProvider } from './themes/ThemeContext'
import { useState,useEffect } from 'react';



const poppins = Poppins({
  subsets : ["latin"],
  weight : ['300']
})





const Home = () => {
  const[tema,setTema]=useState(false)
  const[loading,setLoading]=useState(false)


    const toggleTema =()=> {
      setTema(!tema)
    }



  return (
      <ThemeProvider>
        {loading && <h1>SEDANG LOADING</h1>}
    <div  className= {`${tema ? "bg-white" : "bg-black"} transition-all delay-100 overflow-hidden`}>
      <Sidebarr  />
      <div className={`flex flex-col ml-[300px] ${tema? "bg-none text-black" : "bg-black text-white"} w-[79vw] h-[3000px] transition-all overflow-hidden`} >
      <Navbar ubah={toggleTema} />
      <Spotfix />
      <div className={poppins.className}>
      <h1 className='mt-[400px] ml-10 border-b border-white w-32 p-1'>Lets Meet &#10022;	</h1>
      <h1 className='text-[60px]  p-10 mt-[-25px] '>I'm Shafiq Alifiruna</h1>
      <h1 className='text-[60px] pl-10 mt-[-50px] '>FullStack Web Developer</h1>
      <div className='flex flex-row ml-10 w-[330px] justify-between h-20 text-white mt-3'>
        <button className={` ${tema ? "bg-white text-black border border-black" : "bg-black border border-white"} w-40 h-8 rounded-md transition-all hover:bg-white  hover:text-black`}>Download CV</button>
        <button className={` ${tema ? "bg-white text-black border border-black" : "bg-black border border-white"} w-40 h-8 rounded-md transition-all hover:bg-white  hover:text-black`}>See Work</button>
      </div>
      </div>
    
      <div id='tools' className="w-full border-b border-gray-700"></div>
      <Skill />
      <div id='project' className="w-full border-b border-gray-700"></div>
      <Project />
      </div>
  
    </div>
    </ThemeProvider>

  )
}

export default Home;