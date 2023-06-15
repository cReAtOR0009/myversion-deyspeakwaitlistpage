import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion'
import { Outlet } from 'react-router-dom'

import Navbar from '../components/Navbar'
import {navAnimation, loadercontainer, loadercontent} from '../animations';


export default function HomeLayouts() {

  const [loading, setloading] = useState(true)
  
  const setLoading = ()=>{
   let  timeloading =  setTimeout(() => {
      setloading(true)
    return  clearTimeout(timeloading)
    }, 3500);
  }

  useEffect(()=>{
     setLoading();
  });

  return (
    // <AnimateSharedLayout>
    <AnimatePresence>
      {loading ?  
     ( <div>
      <Navbar />
      <Outlet />
    </div>)
      
      :
      
    (  <motion.div className='loaderContainer'
        key="loader"
      variants={loadercontainer()}
      initial="hidden"
      animate="show"
      exit="exit"
      >
         <motion.span className="letter"
          variants={loadercontent()}
         >D</motion.span>
         <motion.span className="letter"
          variants={loadercontent()}
         >e</motion.span>
         <motion.span className="letter"
          variants={loadercontent()}
         >y</motion.span>
         <motion.span className="letter"
          variants={loadercontent()}
         >S</motion.span>
         <motion.span className="letter"
          variants={loadercontent()}
         >p</motion.span>
         <motion.span className="letter"
          variants={loadercontent()}
         >e</motion.span>
         <motion.span className="letter"
          variants={loadercontent()}
         >a</motion.span>
         <motion.span className="letter"
          variants={loadercontent()}

         >k</motion.span>
      </motion.div>)
      }
      </AnimatePresence>
      // </AnimateSharedLayout> 
  )
}
