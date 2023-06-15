import {useState, useEffect, useRef} from 'react'
import { motion } from 'framer-motion'
import { mascot,deyspeaktext,avatar1,avatar2,avatar3,linkdnicon,instagramicon,twittericon,mobilescreen1,mobilescreen2,mobilescreen3, } from '../assets'
import { textVariant, buttonVariants, animateImage, containerVariant,} from '../animations';


export default function Navbar() {
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
          clearInterval(interval)
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
    
    <motion.nav
    initial={{ y: -250 }}
    animate={{ y: -10 }}
    transition={{ delay: 1, duration: 1, type: "spring", stiffness: 120 }}
   >
     <div className='container' id='navHome'>
       <div className="mascot">
         <img src={mascot} alt="" className="mascotImage" />
         <img src={deyspeaktext} alt="despeak logo text" className="mascotTextImage" />
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
  )
}
