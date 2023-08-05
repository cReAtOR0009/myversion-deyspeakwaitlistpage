import React from 'react'
import { motion } from 'framer-motion'
import { textVariant } from '../animations'
import CustomForm from './Form'
import {avatar1,avatar2,avatar3} from '../assets'


export default function Main() {
  // console.log("MIN RERENDERED")
  const url = new URL("https://api.sender.net/v2/subscribers");
  let headers = {
    Authorization: `Bearer ${import.meta.env.VITE_APP_TOKER}`,
    "Content-Type": "application/json",
    Accept: "application/json",
  };
  const onSubmit = async (
    fullNameInput,
    emailValue,
    setModalName,
    setmodalError,
    setErrorContent,
    setShowModal,
    setModalContent,
    clearFields,
  ) => {
    let trimmedName = fullNameInput.trim();
    let formFullname = trimmedName.split(" ");
    const firstName = formFullname[0];
    const lastName = formFullname[formFullname.length - 1];

    let data = {
      email: `${emailValue}`,
      firstname: `${firstName}`,
      lastname: `${lastName}`,
      waitlist: `waitlist`,
      trigger_automation: false,
    };
    fetch(url, {
      method: "POST",
      headers,
      body: JSON.stringify(data),
    })
      .then(async (response) => {
        if (!response.ok) {
          const text = await response.text();
          throw new Error(text);
        }

        setModalName(firstName);
        setmodalError(false);
        setShowModal(true);
        setModalContent(firstName);
        clearFields();
      })
      .catch((error) => {
        try {
          setModalName();
          setmodalError(true);
          setErrorContent(`${JSON.parse(error.toString().slice(6)).message}`);
          setShowModal(true);
          setModalContent();
        } catch (err) {
          setmodalError(true);
          setShowModal(true);
          setErrorContent(`unidentified error, pls try again ${err}`);
        }
        return;
      });
  };
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
       <CustomForm onSubmit={onSubmit} />

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
