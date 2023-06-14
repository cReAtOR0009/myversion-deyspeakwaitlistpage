import React from 'react'
import Footer from '../components/Footer'

import {useState, useEffect, useRef} from 'react'
import { motion } from 'framer-motion'
import { Link, Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { mascot,deyspeaktext,avatar1,avatar2,avatar3,linkdnicon,instagramicon,twittericon,mobilescreen1,mobilescreen2,mobilescreen3, } from '../assets'
import { textVariant, buttonVariants, animateImage, containerVariant,} from '../animations';


export default function HomeLayouts() {
  return (
    <div>
       <Navbar />
       <Outlet />
    </div>
  )
}
