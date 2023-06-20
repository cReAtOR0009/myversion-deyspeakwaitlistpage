import {useState, useEffect, useRef} from 'react'
import { ScrollRestoration } from 'react-router-dom';
import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom';
import { mascot,deyspeaktext} from '../assets'
import {navAnimation,} from '../animations';


export default function Navbar () {


    const [daysLeft, setdaysLeft] = useState("00");
    const [hoursLeft, sethoursLeft] = useState("00");
    const [minutesLeft, setminutesLeft] = useState("00");
    const [secLeft, setsecLeft] = useState("00");
  
    let interval = useRef();
  
    const startTimer = ()=>{
      const countDownDate = new Date('july 2, 2023 20:7:00').getTime();
      interval = setInterval(()=> {
        const now = new Date().getTime()
        const distance = countDownDate - now
        const days = Math.floor(distance / (1000 * 60 * 60 * 24))
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)))
        const minutes = Math.floor((distance % (1000 * 60 * 60) / (1000 * 60)))
        const seconds = Math.floor((distance % (1000 * 60) / (1000)))
  
        if(distance < 0){
          clearInterval(interval.current)
        }
        else{
          setdaysLeft(days);
          sethoursLeft(hours);
          setminutesLeft(minutes);
          setsecLeft(seconds);
        }
      }, 1000)
    };
    useEffect(() => {
      startTimer();
      return ()=> {
        clearInterval(interval.current)
      }
    })
  return (
    <>
    <ScrollRestoration />
    <motion.nav
    initial={{ opacity:0,
      y:-50,
      x:0,
      scale:0}}
    animate={{
      opacity:1,
      y:0,
      x:0,
      scale:[1, 1.5, 6, 1],
      transition:{
          type:"spring",
          stiffness: 120,
          duration:.5,
          ease:[0.6, 0.01, -0.05, 0.95],
          delay:1
      }
    }}
    // initial={{ y: -250 }}
    // animate={{ y: -10 }}
    // transition={{ delay: 1, duration: 1, type: "spring", stiffness: 120 }}
   >
     <div className='container' id='navHome'>
       <div className="mascot">
       <NavLink to="/">
           <img src={mascot} alt="" className="mascotImage" />
           <img src={deyspeaktext} alt="despeak logo text" className="mascotTextImage" />
         </NavLink>
       </div>
       <div className="launchTimeSection">
         <div className="launchtext">Launch Timer</div>
         <div className="launchTime">
           <section className="launchDay">
             <span className="number">{daysLeft}</span>
             <span className="text">Days</span>
           </section>
           <section className="launchHour">
           <span className="number">{hoursLeft}</span>
             <span className="text">Hours</span>
           </section>
           <section className="launchMinutes">
           <span className="number">{minutesLeft}</span>
             <span className="text">Minutes</span>
           </section>
         </div>
       </div>
     </div>
   </motion.nav>
   </>
  )
}
