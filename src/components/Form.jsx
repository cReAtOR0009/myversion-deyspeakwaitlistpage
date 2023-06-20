import React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
// import { useForm } from "react-hook-form";
import OneSignal from "react-onesignal";

import { closebtn, mascotfull } from "../assets";
import { textVariant, buttonVariants, buttonVariants2, textVariant2 } from "../animations";

export const CustomForm = () => {
  const [ShowvalidateBtn, setvalidateBtn] = useState(true);
  const [ShowSubmitbBtn, setShowSubmitbBtn] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalError, setmodalError] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [errorContent, setErrorContent] = useState("")

  const [emailValue, setemailValue] = useState("");
  const [fullNameInput, setfullNameInput] = useState("");
  const [modalName, setModalName] = useState("")



  const url = new URL(
    "https://api.sender.net/v2/subscribers"
);
  let headers = {
      "Authorization": `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiZTNiM2Q0YWM0MDdlMjA2MjM5M2QzNWFlYTgzOTIxYTgxNjYyM2RkOGI3YTM3MWEyMzU4ZjVjYWNmY2ZjYWFiOTQ2N2E3NDczYjBjODI2MjIiLCJpYXQiOiIxNjg3MTMwMTg4LjkxNjkxMiIsIm5iZiI6IjE2ODcxMzAxODguOTE2OTE2IiwiZXhwIjoiNDg0MDczMDE4OC45MTM4MTUiLCJzdWIiOiI3MzcxNzgiLCJzY29wZXMiOltdfQ.sRL7i6UelzwR8UMyP_xfAm8WkviPW1MUi1H_3ZZszEcKLD874SzK5Bh0isGa0sPegN_BSvpX0zexWUelBJevZw`,
      "Content-Type": "application/json",
      "Accept": "application/json",
  };


const onSubmit =async () => {
  let formFullname =fullNameInput.split(' ')
  const firstName =formFullname[0];
  const lastName = formFullname[formFullname.length - 1];

  let data = {
    "email":`${emailValue}`,
    "firstname": `${firstName}`,
    "lastname": `${lastName}`,
    "waitlist": `waitlist`,
    "trigger_automation": false
  };
    fetch(url, {
      method: "POST",
      headers,body: JSON.stringify(data)
    }).then(async (response) => {
 
      if (!response.ok) {
        const text = await response.text()
        throw new Error(text)
      }
      
      setModalName(firstName)
      setmodalError(false)
      setShowModal(true)
      setModalContent(firstName)

    })
    .catch((error) => {

      try {
      setModalName();
      setmodalError(true);
      setErrorContent(`${JSON.parse(error.toString().slice(6)).message}`)
      setShowModal(true);
      setModalContent();
      // setErrorContent(`${JSON.parse(error.toString().slice(6)).message}`)
        // console.log(JSON.parse(error.toString().slice(6)).message)
        // console.log(JSON.parse(error.toString().slice(6)))
      } catch (err) {
        setmodalError(true);
        setShowModal(true);
        setErrorContent(`unidentified error, pls try again ${err}`)
      }
      return

    })
}


  const showEmailField = async () => {
    setvalidateBtn(false);
    setShowSubmitbBtn(true);
  };

  // modal popup
  const Modal = ({ }) => {
    return (
      <>
        {showModal && (
          <div onClick={() => setShowModal(false)} className="backdrop">
            <div className="modal">
              {modalError==true ?( <div className="error">
                  <p>{errorContent}</p>
              </div>):
                (<>
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
                    <h3>Thank you {modalContent} for joining our waitlist!</h3>
                    <p>
                      Thank you again for your interest and trust in us. We can’t
                      wait to welcome you to our community!
                    </p>
                  </div>
                </>)
              }
            
            </div>
          </div>
        )}
      </>
    );
  };

  return (
    <div className="formContainer">
      <Modal showModal={showModal} setShowModal={setShowModal} modalContent={modalName} />
      <motion.div
        variants={textVariant(0.7)}
        initial="hidden"
        animate="show"
        className="formContainer"
      >
        <form 
           onSubmit={e => {e.preventDefault(); return onSubmit()}}
        >
          <input
            onChange={(e)=> {setfullNameInput(e.target.value); showEmailField()} }
            type="text"
            placeholder="Full Name"
            autoComplete="on"
            required
          />
          <motion.input
            onChange={(e)=> setemailValue(e.target.value)}
            initial={{ y: -150 }}
            animate={{ y: 0,
              transition:{ delay: 2, duration: 2, type: "spring", stiffness: 120 }
            }}

            type="email"
            autoComplete="on"
            placeholder="Enter your email address"
            required
            style={{ display: ShowSubmitbBtn ? "block" : "none" }}
          />
          {ShowvalidateBtn && (
            <motion.input
              variants={buttonVariants}
              initial="hidden"
              animate="show"
              whileHover="hover"
              onClick={showEmailField}
              type="button"
              value="Join Waitlist"
              className="subscribeBtn"
            />
          )}
          {ShowSubmitbBtn && (
            <motion.input
              variants={buttonVariants2}
              initial="hidden"
              animate="show"
              whileHover="hover"
              label="subscribe"
              type="submit"
              value="Join Waitlist"
              className="subscribeBtn"

              // onClick={()=>onSubmit()}
            />
          )}
        </form>
      </motion.div>
    </div>
  );
};

export default CustomForm;
