import React from 'react'
import { motion } from 'framer-motion'
import { textVariant } from '../animations'
import CustomForm from './Form'
import {avatar1,avatar2,avatar3} from '../assets'


export default function Main() {
  return (
    <motion.main
    >
      <div className="container">
        <div className="mainText">
        <motion.h2
        variants={textVariant(.3)}
        initial="hidden"
        animate="show"
        >Bridging Cultures, One Word at a Time.</motion.h2>
        <motion.p
         variants={textVariant(.5)}
         initial="hidden"
         animate="show"
        >
        Join our exclusive waitlist and be among the first to experience a revolutionary language learning app designed to break barriers, connect cultures and empower you to communicate fluently in multiple languages. Start your linguistic journey today!
        </motion.p>
        </div>
       <CustomForm />

        <motion.div   
        variants={textVariant(.9)}
        initial="hidden"
        animate="show"
        className="subscribers">
          <div className="subscribersImage">
            <img src={avatar1} alt="avatar1" />
            <img src={avatar2} alt="avatar2" />
            <img src={avatar3} alt="avatar3" />
          </div>
          <div className="subscribersText">
            <h3>+1000</h3>
            <span>Subscribed</span>
          </div>
        </motion.div>
        
      </div>
    </motion.main>
  )
}
