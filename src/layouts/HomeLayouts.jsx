import React, { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion'
import { Outlet } from 'react-router-dom'

import Navbar from '../components/Navbar'
import {navAnimation, loadercontainer, loadercontent} from '../animations';


export default function HomeLayouts() {

  const [loading, setloading] = useState(false)

  const [letterA, setLetterA] =useState('')
  const [letterB, setLetterB] =useState('')
  const [letterC, setLetterC] =useState('')
  const [letterD, setLetterD] =useState('')
  const [letterE, setLetterE] =useState('')
  const [letterF, setLetterF] =useState('')
  const [letterG, setLetterG] =useState('')
  const [letterH, setLetterH] =useState('')
  const [letterI, setLetterI] =useState('')
  const [letterJ, setLetterJ] =useState('')
  const [letterK, setLetterK] =useState('')
  const [letterL, setLetterL] =useState('')
  const [letterM, setLetterM] =useState('')
  const [letterN, setLetterN] =useState('')
  const [letterO, setLetterO] =useState('')
  const [letterP, setLetterP] =useState('')
  const [letterQ, setLetterQ] =useState('')
  const [letterR, setLetterR] =useState('')
  const [letterS, setLetterS] =useState('')
  const [letterT, setLetterT] =useState('')
  const [letterU, setLetterU] =useState('')
  const [letterV, setLetterV] =useState('')
  const [letterW, setLetterW] =useState('')
  const [letterX, setLetterX] =useState('')
  const [letterY, setLetterY] =useState('')
  const [letterZ, setLetterZ] =useState('')

  const [time, setTime] = useState(600);
  let interval = useRef();

 const alphabet = [
 "a",
 "α",
 "b",
 "ɓ",
 "c",
 "c̠",
 "d",
 "d̠",
 "ɖ",
 "ɗ",
 "ð",
 ",",
 "e",
 "ɛ",
 "ǝ",
 "f",
 "ƒ",
 "ɡ",
 "ɣ",
 "h",
 "h̠",
 "i",
 "ɪ",
 "j",
 "k",
 "ƙ",
 "l",
 "m",
 "n",
 "ŋ",
 "o",
 "ɔ",
 "p",
 "q",
 ",",
 "q̠",
 "r",
 "ɍ",
 "s",
 "s̠",
 "ʃ",
 "t",
 "t̠",
 "ƭ",
 "ʈ",
 "ө",
 "u",
 "ʒ",
 "ᴜ",
 "v",
 "ʋ",
 "w",
 "x",
 "x̠",
 "y",
 "ƴ",
 "z",
 "z̠",]

  // let interval = useRef();
  const setLoading = ()=>{
   let  timeloading =  setTimeout(() => {
      setloading(true)
    return  clearTimeout(timeloading)
    }, 3000);
  }

   
  const pickRandom = (array) => {
    setInterval(() => {
 setInterval((setLetterA(array[(Math.floor(Math.random() * alphabet.length))])),time - 600);
 setInterval((setLetterB(array[(Math.floor(Math.random() * alphabet.length))])),time - 600);
 setInterval((setLetterC(array[(Math.floor(Math.random() * alphabet.length))])),time - 600);
 setInterval((setLetterD(array[(Math.floor(Math.random() * alphabet.length))])),time - 600);
 setInterval((setLetterE(array[(Math.floor(Math.random() * alphabet.length))])),time - 600);
 setInterval((setLetterF(array[(Math.floor(Math.random() * alphabet.length))])),time - 600);
 setInterval((setLetterG(array[(Math.floor(Math.random() * alphabet.length))])),time - 600);
 setInterval((setLetterH(array[(Math.floor(Math.random() * alphabet.length))])),time - 600);
 setInterval((setLetterI(array[(Math.floor(Math.random() * alphabet.length))])),time - 600);
 setInterval((setLetterJ(array[(Math.floor(Math.random() * alphabet.length))])),time - 600);
 setInterval((setLetterK(array[(Math.floor(Math.random() * alphabet.length))])),time - 600);
 setInterval((setLetterL(array[(Math.floor(Math.random() * alphabet.length))])),time - 600);
 setInterval((setLetterM(array[(Math.floor(Math.random() * alphabet.length))])),time - 600);
 setInterval((setLetterN(array[(Math.floor(Math.random() * alphabet.length))])),time - 600);
 setInterval((setLetterO(array[(Math.floor(Math.random() * alphabet.length))])),time - 600);
 setInterval((setLetterP(array[(Math.floor(Math.random() * alphabet.length))])),time - 600);
 setInterval((setLetterQ(array[(Math.floor(Math.random() * alphabet.length))])),time - 600);
 setInterval((setLetterR(array[(Math.floor(Math.random() * alphabet.length))])),time - 600);
 setInterval((setLetterS(array[(Math.floor(Math.random() * alphabet.length))])),time - 600);
 setInterval((setLetterT(array[(Math.floor(Math.random() * alphabet.length))])),time - 600);
 setInterval((setLetterU(array[(Math.floor(Math.random() * alphabet.length))])),time - 600);
 setInterval((setLetterV(array[(Math.floor(Math.random() * alphabet.length))])),time - 600);
 setInterval((setLetterW(array[(Math.floor(Math.random() * alphabet.length))])),time - 600);
 setInterval((setLetterX(array[(Math.floor(Math.random() * alphabet.length))])),time - 600);
 setInterval((setLetterY(array[(Math.floor(Math.random() * alphabet.length))])),time - 600);
 setInterval((setLetterZ(array[(Math.floor(Math.random() * alphabet.length))])),time - 600);
    }, time - 400);
    }



  useEffect(()=>{
    interval.current = time
     setLoading();
     pickRandom(alphabet)
     return () => {
      clearInterval(interval.current)
     }
  }, [time]);

  return (
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
<table>
<tr className = "tablerow"><td>{letterM}</td><td>{letterU}</td><td>{letterS}</td><td>{letterG}</td><td>{letterF}</td><td>{letterS}</td><td>{letterQ}</td><td>{letterA}</td><td>{letterB}</td><td>{letterL}</td><td>{letterM}</td><td>{letterL}</td><td>{letterU}</td><td>{letterB}</td><td>{letterH}</td><td>{letterD}</td><td>{letterF}</td><td>{letterP}</td><td>{letterF}</td><td>{letterL}</td><td>{letterK}</td><td>{letterI}</td><td>{letterO}</td><td>{letterB}</td><td>{letterM}</td><td>{letterL}</td><td>{letterF}</td></tr>
<tr className = "tablerow"><td>{letterB}</td><td>{letterO}</td><td>{letterT}</td><td>{letterO}</td><td>{letterY}</td><td>{letterM}</td><td>{letterY}</td><td>{letterN}</td><td>{letterY}</td><td>{letterX}</td><td>{letterY}</td><td>{letterA}</td><td>{letterU}</td><td>{letterX}</td><td>{letterH}</td><td>{letterX}</td><td>{letterW}</td><td>{letterF}</td><td>{letterF}</td><td>{letterF}</td><td>{letterV}</td><td>{letterI}</td><td>{letterX}</td><td>{letterQ}</td><td>{letterO}</td><td>{letterU}</td><td>{letterY}</td></tr>
<tr className = "tablerow"><td>{letterY}</td><td>{letterJ}</td><td>{letterW}</td><td>{letterX}</td><td>{letterO}</td><td>{letterO}</td><td>{letterQ}</td><td>{letterU}</td><td>{letterU}</td><td>{letterQ}</td><td>{letterE}</td><td>{letterC}</td><td>{letterA}</td><td>{letterV}</td><td>{letterA}</td><td>{letterY}</td><td>{letterB}</td><td>{letterG}</td><td>{letterR}</td><td>{letterF}</td><td>{letterD}</td><td>{letterI}</td><td>{letterJ}</td><td>{letterM}</td><td>{letterY}</td><td>{letterT}</td><td>{letterT}</td></tr>
<tr className = "tablerow"><td>{letterI}</td><td>{letterI}</td><td>{letterY}</td><td>{letterO}</td><td>{letterO}</td><td>{letterF}</td><td>{letterX}</td><td>{letterJ}</td><td>{letterT}</td><td>{letterT}</td><td>{letterK}</td><td>{letterW}</td><td>{letterA}</td><td>{letterV}</td><td>{letterF}</td><td>{letterY}</td><td>{letterR}</td><td>{letterN}</td><td>{letterY}</td><td>{letterI}</td><td>{letterX}</td><td>{letterE}</td><td>{letterF}</td><td>{letterR}</td><td>{letterY}</td><td>{letterF}</td><td>{letterX}</td></tr>
<tr className = "tablerow"><td>{letterX}</td><td>{letterB}</td><td>{letterY}</td><td>{letterW}</td><td>{letterQ}</td><td>{letterD}</td><td>{letterI}</td><td>{letterT}</td><td>{letterH}</td><td>{letterC}</td><td>{letterV}</td><td>{letterR}</td><td>{letterV}</td><td>{letterF}</td><td>{letterN}</td><td>{letterS}</td><td>{letterB}</td><td>{letterW}</td><td>{letterN}</td><td>{letterS}</td><td>{letterP}</td><td>{letterW}</td><td>{letterF}</td><td>{letterF}</td><td>{letterL}</td><td>{letterM}</td><td>{letterE}</td></tr>
<tr className = "tablerow"><td>{letterD}</td><td>{letterT}</td><td>{letterO}</td><td>{letterL}</td><td>{letterK}</td><td>{letterL}</td><td>{letterV}</td><td>{letterR}</td><td>{letterE}</td><td>{letterK}</td><td>{letterQ}</td><td>{letterQ}</td><td>{letterL}</td><td>{letterU}</td><td>{letterK}</td><td>{letterH}</td><td>{letterE}</td><td>{letterN}</td><td>{letterI}</td><td>{letterJ}</td><td>{letterE}</td><td>{letterW}</td><td>{letterV}</td><td>{letterW}</td><td>{letterD}</td><td>{letterU}</td><td>{letterR}</td></tr>
<tr className = "tablerow"><td>{letterM}</td><td>{letterG}</td><td>{letterT}</td><td>{letterA}</td><td>{letterT}</td><td>{letterS}</td><td>{letterY}</td><td>{letterO}</td><td>{letterL}</td><td>{letterX}</td><td>{letterI}</td><td>{letterA}</td><td>{letterL}</td><td>{letterD}</td><td>{letterM}</td><td>{letterD}</td><td>{letterQ}</td><td>{letterB}</td><td>{letterH}</td><td>{letterG}</td><td>{letterI}</td><td>{letterT}</td><td>{letterO}</td><td>{letterN}</td><td>{letterA}</td><td>{letterM}</td><td>{letterN}</td></tr>
<tr className = "tablerow"><td>{letterI}</td><td>{letterV}</td><td>{letterT}</td><td>{letterF}</td><td>{letterD}</td><td>{letterK}</td><td>{letterG}</td><td>{letterG}</td><td>{letterS}</td><td>{letterA}</td><td>{letterP}</td><td>{letterI}</td><td>{letterN}</td><td>{letterN}</td><td>{letterM}</td><td>{letterX}</td><td>{letterU}</td><td>{letterH}</td><td>{letterE}</td><td>{letterK}</td><td>{letterF}</td><td>{letterL}</td><td>{letterB}</td><td>{letterT}</td><td>{letterU}</td><td>{letterK}</td><td>{letterR}</td></tr>
<tr className = "tablerow"><td>{letterT}</td><td>{letterJ}</td><td>{letterC}</td><td>{letterF}</td><td>{letterL}</td><td>{letterV}</td><td>{letterN}</td><td>{letterP}</td><td>{letterA}</td><td>{letterK}</td><td>{letterO}</td><td>{letterE}</td><td>{letterR}</td><td>{letterP}</td><td>{letterY}</td><td>{letterX}</td><td>{letterF}</td><td>{letterA}</td><td>{letterS}</td><td>{letterV}</td><td>{letterO}</td><td>{letterR}</td><td>{letterR}</td><td>{letterI}</td><td>{letterB}</td><td>{letterT}</td><td>{letterM}</td></tr>
<tr className = "tablerow"><td>{letterC}</td><td>{letterQ}</td><td>{letterF}</td><td>{letterW}</td><td>{letterD}</td><td>{letterH}</td><td>{letterN}</td><td>{letterU}</td><td>{letterI}</td><td>{letterK}</td><td>{letterM}</td><td>{letterR}</td><td>{letterC}</td><td>{letterT}</td><td>{letterY}</td><td>{letterI}</td><td>{letterB}</td><td>{letterV}</td><td>{letterD}</td><td>{letterV}</td><td>{letterE}</td><td>{letterX}</td><td>{letterF}</td><td>{letterR}</td><td>{letterS}</td><td>{letterU}</td><td>{letterQ}</td></tr>
<tr className = "tablerow"><td>{letterD}</td><td>{letterE}</td><td>{letterL}</td><td>{letterL}</td><td>{letterT}</td><td>{letterF}</td><td>{letterF}</td><td>{letterW}</td><td>{letterY}</td><td>{letterX}</td><td>{letterX}</td><td>{letterM}</td><td>{letterL}</td><td>{letterP}</td><td>{letterI}</td><td>{letterQ}</td><td>{letterH}</td><td>{letterI}</td><td>{letterI}</td><td>{letterM}</td><td>{letterW}</td><td>{letterG}</td><td>{letterV}</td><td>{letterF}</td><td>{letterG}</td><td>{letterW}</td><td>{letterN}</td></tr>
<tr className = "tablerow"><td>{letterE}</td><td>{letterO}</td><td>{letterP}</td><td>{letterQ}</td><td>{letterU}</td><td>{letterW}</td><td>{letterU}</td><td>{letterX}</td><td>{letterS}</td><td>{letterN}</td><td>{letterT}</td><td>{letterR}</td><td>{letterY}</td><td>{letterV}</td><td>{letterV}</td><td>{letterN}</td><td>{letterP}</td><td>{letterL}</td><td>{letterS}</td><td>{letterY}</td><td>{letterI}</td><td>{letterA}</td><td>{letterY}</td><td>{letterY}</td><td>{letterE}</td><td>{letterG}</td><td>{letterJ}</td></tr>
<tr className = "tablerow"><td>{letterW}</td><td>{letterC}</td><td>{letterE}</td><td>{letterC}</td><td>{letterS}</td><td>{letterH}</td><td>{letterU}</td><td>{letterK}</td><td>{letterJ}</td><td>{letterO}</td><td>{letterG}</td><td>{letterP}</td><td>{letterJ}</td><td>{letterF}</td><td>{letterB}</td><td>{letterY}</td><td>{letterU}</td><td>{letterO}</td><td>{letterX}</td><td>{letterA}</td><td>{letterK}</td><td>{letterB}</td><td>{letterO}</td><td>{letterT}</td><td>{letterP}</td><td>{letterY}</td><td>{letterK}</td></tr>
<tr className = "tablerow"><td>{letterQ}</td><td>{letterK}</td><td>{letterM}</td><td>{letterI}</td><td>{letterD}</td><td>{letterC}</td><td>{letterO}</td><td>{letterV}</td><td>{letterX}</td><td>{letterX}</td><td>{letterV}</td><td>{letterO}</td><td>{letterG}</td><td>{letterU}</td><td>{letterK}</td><td>{letterN}</td><td>{letterL}</td><td>{letterC}</td><td>{letterN}</td><td>{letterT}</td><td>{letterY}</td><td>{letterT}</td><td>{letterP}</td><td>{letterA}</td><td>{letterT}</td><td>{letterE}</td><td>{letterD}</td></tr>
<tr className = "tablerow"><td>{letterX}</td><td>{letterQ}</td><td>{letterF}</td><td>{letterW}</td><td>{letterW}</td><td>{letterG}</td><td>{letterS}</td><td>{letterT}</td><td>{letterD}</td><td>{letterU}</td><td>{letterK}</td><td>{letterO}</td><td>{letterF}</td><td>{letterQ}</td><td>{letterF}</td><td>{letterK}</td><td>{letterJ}</td><td>{letterH}</td><td>{letterE}</td><td>{letterB}</td><td>{letterB}</td><td>{letterC}</td><td>{letterU}</td><td>{letterP}</td><td>{letterX}</td><td>{letterY}</td><td>{letterU}</td></tr>
<tr className = "tablerow"><td>{letterA}</td><td>{letterN}</td><td>{letterQ}</td><td>{letterN}</td><td>{letterO}</td><td>{letterC}</td><td>{letterT}</td><td>{letterY}</td><td>{letterQ}</td><td>{letterX}</td><td>{letterI}</td><td>{letterU}</td><td>{letterH}</td><td>{letterL}</td><td>{letterQ}</td><td>{letterI}</td><td>{letterX}</td><td>{letterG}</td><td>{letterX}</td><td>{letterJ}</td><td>{letterF}</td><td>{letterP}</td><td>{letterQ}</td><td>{letterO}</td><td>{letterU}</td><td>{letterY}</td><td>{letterU}</td></tr>
<tr className = "tablerow"><td>{letterB}</td><td>{letterW}</td><td>{letterR}</td><td>{letterN}</td><td>{letterP}</td><td>{letterU}</td><td>{letterV}</td><td>{letterL}</td><td>{letterL}</td><td>{letterJ}</td><td>{letterA}</td><td>{letterK}</td><td>{letterF}</td><td>{letterJ}</td><td>{letterT}</td><td>{letterL}</td><td>{letterB}</td><td>{letterH}</td><td>{letterS}</td><td>{letterP}</td><td>{letterW}</td><td>{letterW}</td><td>{letterQ}</td><td>{letterC}</td><td>{letterR}</td><td>{letterF}</td><td>{letterU}</td></tr>
<tr className = "tablerow"><td>{letterD}</td><td>{letterY}</td><td>{letterW}</td><td>{letterW}</td><td>{letterT}</td><td>{letterL}</td><td>{letterV}</td><td>{letterS}</td><td>{letterO}</td><td>{letterS}</td><td>{letterD}</td><td>{letterD}</td><td>{letterQ}</td><td>{letterR}</td><td>{letterH}</td><td>{letterE}</td><td>{letterG}</td><td>{letterH}</td><td>{letterT}</td><td>{letterO}</td><td>{letterT}</td><td>{letterI}</td><td>{letterD}</td><td>{letterH}</td><td>{letterP}</td><td>{letterH}</td><td>{letterK}</td></tr>
<tr className = "tablerow"><td>{letterE}</td><td>{letterF}</td><td>{letterC}</td><td>{letterX}</td><td>{letterI}</td><td>{letterH}</td><td>{letterI}</td><td>{letterI}</td><td>{letterE}</td><td>{letterI}</td><td>{letterR}</td><td>{letterL}</td><td>{letterM}</td><td>{letterV}</td><td>{letterM}</td><td>{letterG}</td><td>{letterA}</td><td>{letterQ}</td><td>{letterJ}</td><td>{letterK}</td><td>{letterU}</td><td>{letterE}</td><td>{letterV}</td><td>{letterB}</td><td>{letterK}</td><td>{letterG}</td><td>{letterN}</td></tr>
<tr className = "tablerow"><td>{letterE}</td><td>{letterE}</td><td>{letterJ}</td><td>{letterV}</td><td>{letterI}</td><td>{letterH}</td><td>{letterT}</td><td>{letterF}</td><td>{letterP}</td><td>{letterC}</td><td>{letterB}</td><td>{letterB}</td><td>{letterR}</td><td>{letterF}</td><td>{letterX}</td><td>{letterN}</td><td>{letterT}</td><td>{letterO}</td><td>{letterV}</td><td>{letterG}</td><td>{letterB}</td><td>{letterN}</td><td>{letterV}</td><td>{letterR}</td><td>{letterF}</td><td>{letterN}</td><td>{letterI}</td></tr>
<tr className = "tablerow"><td>{letterX}</td><td>{letterX}</td><td>{letterF}</td><td>{letterA}</td><td>{letterX}</td><td>{letterS}</td><td>{letterH}</td><td>{letterV}</td><td>{letterL}</td><td>{letterU}</td><td>{letterB}</td><td>{letterH}</td><td>{letterG}</td><td>{letterB}</td><td>{letterC}</td><td>{letterO}</td><td>{letterQ}</td><td>{letterE}</td><td>{letterS}</td><td>{letterS}</td><td>{letterC}</td><td>{letterV}</td><td>{letterQ}</td><td>{letterY}</td><td>{letterF}</td><td>{letterP}</td><td>{letterN}</td></tr>
</table>
        <motion.div
          className="loaderMaintext"
          key="loader"
          variants={loadercontainer()}
          initial="hidden"
          animate="show"
          exit="exit">
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
        </motion.div>
        

      </motion.div>)
      }
      </AnimatePresence>
  )
}
