import React from "react";
import {linkdnicon,instagramicon,twittericon,} from '../assets'
import { activeTab, mainContainer2, textVariant2 } from "../animations";

import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import Footer from "../components/Footer";


export default function Privacy() {
  return (
    <motion.div className="privacyContainer">
      <motion.div className="privacyLeft"
      variants={mainContainer2()}
      initial="hidden"
      animate="show">
        <motion.div className="termsconditionLink"
          variants={textVariant2()}
          >
          <NavLink to="/policy/terms-and-condition">Terms and Conditions</NavLink>
        </motion.div>
        <motion.div className="privacyActive"
          variants={activeTab()}
        >
          <NavLink to="/policy/privacy">Privacy Policy</NavLink>
        </motion.div>
      </motion.div>

      <div className="privacyRight">
         <motion.div className="privacyPolicy"
         variants={mainContainer2()}
         initial="hidden"
         animate="show"
         >
          <motion.h2
          variants={textVariant2()}
          >Privacy Policy</motion.h2>
          <motion.p
          variants={textVariant2()}
          >
            Korem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit sed risus. Maecenas eget condimentum velit, sit amet
            feugiat lectus. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus
            enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex.
            Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum
            lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in
            elementum tellus.
          </motion.p>{" "}
          <motion.p
          variants={textVariant2()}
          >
            Korem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit sed risus. Maecenas eget condimentum velit, sit amet
            feugiat lectus. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus
            enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex.
            Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum
            lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in
            elementum tellus.
          </motion.p>{" "}
          <motion.p
          variants={textVariant2()}
          >
            Korem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit sed risus. Maecenas eget condimentum velit, sit amet
            feugiat lectus. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus
            enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex.
            Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum
            lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in
            elementum tellus.
          </motion.p>
        </motion.div>
      </div>
      <Footer />
    </motion.div>
  );
}
