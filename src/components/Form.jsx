import React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import OneSignal from 'react-onesignal';


import {closebtn, mascotfull } from '../assets'
import { textVariant, buttonVariants } from "../animations";

export const CustomForm = () => {
  const [ShowvalidateBtn, setvalidateBtn] = useState(true);
  const [ShowSubmitbBtn, setShowSubmitbBtn] = useState(false);
  const [showModal, setShowModal] = useState(false);



  async function runOneSignal(tag) {
   console.log("onsignal function start running");
   await OneSignal.sendTag("tech", tag).then(() => {
    console.log("onsignal function finished running")
   })
  }
  

  const { register, handleSubmit, formState: { errors }, } = useForm({
    defaultValues: {
    fullName: "",
    email: "",
    },
  });

  const onSubmit =async (data) => {
      setShowModal(true)
     await runOneSignal(data)
    return console.log( data);
  };

  const handleView = async () => {
    setvalidateBtn(false);
    setShowSubmitbBtn(true);
  };

// modal popup
  const Modal = ({showModal, setShowModal}) => {
    return <>
    {showModal && <div onClick={()=>setShowModal(false)} className="backdrop">
      <div className="modal">
       <img className="closebtn" src={closebtn} alt="close modal button" onClick={()=>setShowModal(false)} />
       <div className="modalText">
        <div className="modalImageContainer">
          <img src={mascotfull} alt="" />
        </div>
        <h3>Thank you for joining our waitlist!</h3>
        <p>Thank you again for your interest and trust in us. We can’t wait to welcome you to our community!</p>
       </div>
      </div>
    </div>}
    </>
  }
  useEffect(() => {
    OneSignal.init({
      appId: "01bb2897-f6e0-4c1e-8991-7c5dbdbff32a"
    });
  });

  return (
    <div className="formContainer">
      <Modal showModal={showModal} setShowModal={setShowModal} />
      <motion.div
        variants={textVariant(0.7)}
        initial="hidden"
        animate="show"
        className="formContainer"
      >
        <form
          action=""
          method="post"
          onSubmit={handleSubmit(onSubmit)}
          // onSuccess={() => setShowModal(true)} 
          onError={() => console.log("error")} // error response
        >
          <input
            {...register("fullName", { required: true, maxLength: 100 })}
            type="text"
            placeholder="full Name"
            style={{ display: ShowSubmitbBtn ? "block" : "none" }}
          />
          <input
            {...register("email", {
              pattern: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
              required: true,
              maxLength: 40,
            })}
            type="email"
            placeholder="Enter your email address"
          />

          {ShowvalidateBtn && (
            <motion.input
              variants={buttonVariants}
              initial="hidden"
              animate="show"
              whileHover="hover"
              onClick={handleView}
              type="button"
              value="join waitlist"
              className="subscribeBtn"
            />
          )}
          {ShowSubmitbBtn && (
            <motion.input
              variants={buttonVariants}
              initial="hidden"
              animate="show"
              whileHover="hover"
              label="subscribe"
              type="submit"
              value="join waitlist"
              className="subscribeBtn"
            />
          )}
          {/* {errors.email && <span>This field is required</span>} */}
        </form>
      </motion.div>
    </div>
  );
};

export default CustomForm;
