import React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
// import { useForm } from "react-hook-form";
import OneSignal from "react-onesignal";

import { closebtn, mascotfull } from "../assets";
import { textVariant, buttonVariants } from "../animations";

export const CustomForm = () => {
  const [ShowvalidateBtn, setvalidateBtn] = useState(true);
  const [ShowSubmitbBtn, setShowSubmitbBtn] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const [emailValue, setemailValue] = useState("")
  const [nameValue, setnameValue] = useState("")

  // const setMailFunction = ()=> {
  //  let email = e.target.value.email
  //  console.log(email)
  //   setemailValue(email)
  // }

  const doNothing = () => {

  }

  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm({
  //   defaultValues: {
  //     fullName: "",
  //     email: "",
  //   },
  // });

  // const sendOptions = async () => {
  //   let data = "testing@gmail.com"
  //   try {

  //     // const timedResponse = setTimeout
  //     let email = data.email;
  //   await OneSignal.init({
  //     appId: "01bb2897-f6e0-4c1e-8991-7c5dbdbff32a",
  //   }).then(() => {
  //     console.log(data);
  //     OneSignal.setEmail(data).then(function () {
  //       OneSignal.sendTag("last_name", "tester1").then((response) => {
  //         return setShowModal(true);
  //       });
  //     });
  //   });
  //   await OneSignal.setEmail(data.email).then(function (emailId) {
  //     // Callback called when email have finished sending
  //     console.log("emailId: ", emailId);
  //   });
  //   } catch (error) {
  //     console.log(error)
  //   }
    
  // };

  // const checkOnesignal = async (data) => {
  //   fetch("https://onesignal.com/api/v1/notifications", {
  //     method: "POST",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       app_id: "01bb2897-f6e0-4c1e-8991-7c5dbdbff32a",
  //       tags: {
  //         first_name: data.fullName,
  //       },
  //     }),
  //   })
  //     .then((response) => response.json())
  //     .then((response) => {
  //       console.log(response);
  //     });
  // };

  async function runOneSignal() {
    let data = nameValue
    console.log("data",data);
   await OneSignal.init({
      appId: "01bb2897-f6e0-4c1e-8991-7c5dbdbff32a",
      // allowLocalhostAsSecureOrigin:true
    });
    OneSignal.showSlidedownPrompt()
    // .then(async () => {
    // await  OneSignal.sendTag("first_name", nameValue).then(() => {
    //     return setShowModal(true);
    //   });
    // });
  }


  const onHandleTag = (data) => {
    console.log('Tagging');
    setShowModal(true)
    OneSignal.sendTag("last_name", data).then(() => {
      console.log("Sent tag: " + data);
    });
  }

  const onSubmit = async (data) => {
    // return await onHandleTag()
    return await onHandleTag(data);
    // clearTimeout()
    // return await sendOptions();
  };

  const handleView = async () => {
    setvalidateBtn(false);
    setShowSubmitbBtn(true);
  };

  // modal popup
  const Modal = ({ showModal, setShowModal }) => {
    return (
      <>
        {showModal && (
          <div onClick={() => setShowModal(false)} className="backdrop">
            <div className="modal">
              <img
                className="closebtn"
                src={closebtn}
                alt="close modal button"
                onClick={() => setShowModal(false)}
              />
              <div className="modalText">
                <div className="modalImageContainer">
                  <img src={mascotfull} alt="" />
                </div>
                <h3>Thank you for joining our waitlist!</h3>
                <p>
                  Thank you again for your interest and trust in us. We can’t
                  wait to welcome you to our community!
                </p>
              </div>
            </div>
          </div>
        )}
      </>
    );
  };

  useEffect(() => {
    OneSignal.init({
      appId: "01bb2897-f6e0-4c1e-8991-7c5dbdbff32a"
    });
  }, []);
  
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
           onSubmit={e => e.preventDefault()}
        >
          <input
            onChange={(e)=> setnameValue(e.target.value)}
            type="text"
            placeholder="full Name"
            autoComplete="on"
           
          />
          <input
            onChange={(e)=> setemailValue(e.target.value)}
            type="email"
            autoComplete="on"
            placeholder="Enter your email address"
            style={{ display: ShowSubmitbBtn ? "block" : "none" }}
            />
      {/* <button onClick={onSubmit}>check</button> */}
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

              onClick={()=>onHandleTag(nameValue)}
            />
          )}
          {/* {errors.email && <span>This field is required</span>} */}
        </form>
      </motion.div>
    </div>
  );
};

export default CustomForm;
