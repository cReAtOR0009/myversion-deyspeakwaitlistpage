import React from 'react'
import {useState, useEffect, useRef} from 'react'
import { motion } from 'framer-motion'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { mascot,deyspeaktext,avatar1,avatar2,avatar3,linkdnicon,instagramicon,twittericon,mobilescreen1,mobilescreen2,mobilescreen3, } from '../assets'
import { textVariant, buttonVariants, animateImage, containerVariant,} from '../animations';


export default function Footer() {
  return (
    <footer>
    <div className="socialMedia">
    <div className="socialIcons">
     <a href=""> <img src={twittericon} alt="deyspeak twitter icon" /></a>
     <a href=""><img src={instagramicon} alt="deyspeak instagram icon" /></a> 
      <a href=""><img src={linkdnicon} alt="deyspeak linkdn icon"/></a>
    </div>
      <p>2023.Deyspeak</p>
    </div>
    <section className="appScreens">
      <div className='appScreenContainer'>
        <motion.div
        className="appScreen">
          <img src={mobilescreen1} alt="deyspeak mobilescreen1" />
        </motion.div>
        <div className="appScreen">
          <img src={mobilescreen2} alt="deyspeak mobilescreen2" />
        </div>
        <div className="appScreen">
          <img src={mobilescreen3} alt="deyspeak mobilescreen3" />
        </div>
      </div>
     </section>
    <div className="privacy">
      <NavLink to="/policy/terms-and-condition">Terms and conditions</NavLink>
      <NavLink to="/policy/privacy">privacy policy</NavLink>
    </div>
    <Outlet />
  </footer>
 
  )
}
