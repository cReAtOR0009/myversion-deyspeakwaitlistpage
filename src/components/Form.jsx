import React from "react";
import { useState, useEffect } from "react";
import { calcLength, motion } from "framer-motion";
import OneSignal from "react-onesignal";

import { closebtn, mascotfull } from "../assets";
import { textVariant, buttonVariants, buttonVariants2 } from "../animations";

export const CustomForm = ( {onSubmit}) => {
  const [ShowvalidateBtn, setvalidateBtn] = useState(true);
  const [ShowSubmitbBtn, setShowSubmitbBtn] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalError, setmodalError] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [errorContent, setErrorContent] = useState("");

  const [emailValue, setemailValue] = useState("");
  const [fullNameInput, setfullNameInput] = useState("");
  const [modalName, setModalName] = useState("");


  const clearFields = () => {
    setemailValue("");
    setfullNameInput("");
  };

  const showEmailField = async () => {
    if (fullNameInput == "") {
      setShowSubmitbBtn(false);
      setvalidateBtn(true);
    } else {
      setvalidateBtn(false);
      setShowSubmitbBtn(true);
    }
  };

    const handleSubmit = () => {
     onSubmit(
      fullNameInput,
      emailValue,
      setModalName,
      setmodalError,
      setErrorContent,
      setShowModal,
      setModalContent,
      clearFields,
      )
    }
  // modal popup
  const Modal = ({}) => {
    return (
      <>
        {showModal && (
          <div onClick={() => setShowModal(false)} className="backdrop">
            <div className="modal">
              {modalError == true ? (
                <div className="error">
                  <p>{errorContent}</p>
                </div>
              ) : (
                <>
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
                      Thank you again for your interest and trust in us. We
                      can’t wait to welcome you to our community!
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </>
    );
  };

  useEffect(() => {
    showEmailField();
  }, [fullNameInput]);

  // console.log("form rerendered")
  return (
    <div className="formContainer">
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        modalContent={modalName}
      />
      <motion.div
        variants={textVariant(0.7)}
        initial="hidden"
        animate="show"
        className="formContainer"
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            return handleSubmit();
          }}
        >
          <input
            onChange={(e) => {
              setfullNameInput(e.target.value);
              showEmailField();
            }}
            type="text"
            value={fullNameInput}
            placeholder="Full Name"
            autoComplete="on"
            required
          />
          <motion.input
            onChange={(e) => setemailValue(e.target.value)}
            initial={{ y: -150 }}
            animate={{
              y: 0,
              transition: {
                delay: 2,
                duration: 2,
                type: "spring",
                stiffness: 120,
              },
            }}
            type="email"
            autoComplete="on"
            placeholder="Enter your email address"
            value={emailValue}
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
              exit="exit"
              label="subscribe"
              type="submit"
              value="Join Waitlist"
              className="subscribeBtn"

            />
          )}
        </form>
      </motion.div>
    </div>
  );
};

export default CustomForm;
