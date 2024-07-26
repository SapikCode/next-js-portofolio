"use client"

import { Spotlight } from '../ui/Spotlight'
import { useState,useEffect } from 'react'


import React from 'react'

const Spotfix = () => {
    const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowComponent(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []); 

  return (
   <>{showComponent && <Spotlight
    className="left-[400px] top-[180px] overflow-hidden"
    fill="blue"
  />}
    
   </>
  )
}

export default Spotfix