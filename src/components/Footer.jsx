import React from "react";
import { motion } from "framer-motion";

import {
  socialIconContainer,
  socialContainerContent,
  termsAnimate,
} from "../animations";
import { NavLink, Outlet } from "react-router-dom";
import {
  linkdnicon,
  instagramicon,
  twittericon,
  mobilescreen1,
  mobilescreen2,
  mobilescreen3,
} from "../assets";
import { imageContainer, screenImage } from "../animations";

export default function Footer() {
  return (
    <footer>
      <div className="socialMedia">
        <motion.div
          className="socialIcons"
          variants={socialIconContainer()}
          initial="hidden"
          animate="show"
        >
          <motion.a
            href="https://twitter.com/DeySpeakApp?t=SPJ3YsRNDD2IjlSJLBuxyw&s=09"
            variants={socialContainerContent()}
            whileHover={{
              scale: [1, 2.2, 1.2, 1.1, 1, 2.2, 1.2, 1.3, 1],
              transition: {
                ease: "easeInOut",
                duration: 1.2,
                // yoyo:Infinity
              },
            }}
          >
            {" "}
            <img src={twittericon} alt="deyspeak twitter icon" />
          </motion.a>
          <motion.a
            href="https://instagram.com/deyspeak?igshid=ZDc4ODBmNjlmNQ=="
            variants={socialContainerContent()}
            whileHover={{
              scale: [1, 2.2, 1.2, 1.1, 1, 2.2, 1.2, 1.3, 1],
              transition: {
                ease: "easeInOut",
                duration: 1.2,
                yoyo: Infinity,
              },
            }}
          >
            <img src={instagramicon} alt="deyspeak instagram icon" />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/company/jumoh/"
            variants={socialContainerContent()}
            whileHover={{
              scale: [1, 2.2, 1.2, 1.1, 1, 2.2, 1.2, 1.3, 1],
              transition: {
                ease: "easeInOut",
                duration: 1.2,
                yoyo: Infinity,
              },
            }}
          >
            <img src={linkdnicon} alt="deyspeak linkdn icon" />
          </motion.a>
        </motion.div>
        <motion.p
          variants={socialContainerContent()}
          initial="hidden"
          animate="show"
        >
          2023.Deyspeak
        </motion.p>
      </div>
      <section className="appScreens">
        <div className="background-gradient">
          <motion.div
            className="appScreenContainer"
            variants={imageContainer}
            initial="hidden"
            animate="show"
          >
            <motion.div
              variants={screenImage(-400, -400)}
              initial="hidden"
              animate="show"
              exit="exit"
              className="appScreen"
            >
              <img src={mobilescreen1} alt="deyspeak mobilescreen1" />
            </motion.div>
            <motion.div className="appScreen">
              <img src={mobilescreen2} alt="deyspeak mobilescreen2" />
            </motion.div>
            <motion.div
              className="appScreen"
              variants={screenImage(400, -400)}
              initial="hidden"
              animate="show"
              exit="exit"
            >
              <img src={mobilescreen3} alt="deyspeak mobilescreen3" />
            </motion.div>
          </motion.div>
        </div>
      </section>
      <motion.div
        className="privacy"
        variants={{ socialIconContainer }}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={socialContainerContent()}>
          <NavLink to="/policy/terms-and-condition">
            Terms and conditions
          </NavLink>
        </motion.div>

        <motion.div variants={socialContainerContent()}>
          <NavLink to="/policy/privacy">privacy policy</NavLink>
        </motion.div>
      </motion.div>
      <Outlet />
    </footer>
  );
}
