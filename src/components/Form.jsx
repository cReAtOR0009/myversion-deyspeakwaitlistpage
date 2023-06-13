import React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";

import {closebtn, mascotfull } from '../assets'
import { textVariant, buttonVariants } from "../animations";

export const CustomForm = () => {
  const [ShowvalidateBtn, setvalidateBtn] = useState(true);
  const [ShowSubmitbBtn, setShowSubmitbBtn] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const { register, handleSubmit, formState: { errors }, } = useForm({
    defaultValues: {
    fullName: "",
    email: "",
    },
  });

  const onSubmit = (data) => {
      setShowModal(true)
    return console.log("onsubmit clicked", data);
  };

  const handleView = async () => {
    console.log("validate btn clicked");
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
          onSuccess={() => setShowModal(true)} // valid response
          onError={() => console.log("error")} // error response
        >
          <input
            {...register("full Name", { required: true, maxLength: 100 })}
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
