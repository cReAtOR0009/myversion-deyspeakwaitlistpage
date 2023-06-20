import React from "react";
import { linkdnicon, instagramicon, twittericon } from "../assets";
import { activeTab, mainContainer2, textVariant2 } from "../animations";

import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import Footer from "../components/Footer";

export default function Privacy() {
  return (
    <motion.div className="privacyContainer">
      <motion.div
        className="privacyLeft"
        variants={mainContainer2()}
        initial="hidden"
        animate="show"
      >
        <motion.div className="termsconditionLink" variants={textVariant2()}>
          <NavLink to="/policy/terms-and-condition">
            Terms and Conditions
          </NavLink>
        </motion.div>
        <motion.div className="privacyActive" variants={activeTab()}>
          <NavLink to="/policy/privacy">Privacy Policy</NavLink>
        </motion.div>
      </motion.div>

      <div className="privacyRight">
        <motion.div
          className="privacyPolicy"
          variants={mainContainer2()}
          initial="hidden"
          animate="show"
        >
          <motion.h2 variants={textVariant2()}>
            Privacy Policy.
          </motion.h2>

          <motion.div
            className="privacyPolicy"
            variants={mainContainer2()}
            initial="hidden"
            animate="show"
          >
            <motion.h4 variants={textVariant2()}>DeySpeak Privacy Policy.</motion.h4>
            <motion.p variants={textVariant2()}>
              This Privacy Policy describes how DeySpeak collects, uses, and
              discloses your personal information when you visit, use our
              services. For purposes of this Privacy Policy, "you" and "your"
              means you as the user of the Services, whether you are a customer,
              website visitor, or another individual whose information we have
              collected pursuant to this Privacy Policy. Please read this Privacy
              Policy carefully. By using and accessing any of the Services, you
              agree to the collection, use, and disclosure of your information as
              described in this Privacy Policy. If you do not agree to this
              Privacy Policy, please do not use or access any of the Services.
            </motion.p>{" "}
          </motion.div>

          <motion.div
            className="privacyPolicy"
            variants={mainContainer2()}
            initial="hidden"
            animate="show">
            <motion.h4 variants={textVariant2()}>Changes to This Privacy Policy</motion.h4>
            <motion.p variants={textVariant2()}>
              We may update this Privacy Policy from time to time, including to
              reflect changes to our practices or for other operational, legal,
              or regulatory reasons. We will post the revised Privacy Policy on
              the Site, update the "Last updated" date and take any other steps
              required by applicable law.
            </motion.p>
          </motion.div>


          <motion.div
            className="privacyPolicy"
            variants={mainContainer2()}
            initial="hidden"
            animate="show">
            <motion.h4 variants={textVariant2()}>How We Collect and Use Your Personal Information</motion.h4>
            <motion.p variants={textVariant2()}>
            In addition to the specific uses set out below, we may use information we collect about you to communicate with you, provide the Services, comply with any applicable legal obligations, enforce any applicable terms of service, and to protect or defend the Services, our rights, and the rights of our users or others.
            </motion.p>
          </motion.div>

          
          <motion.div
            className="privacyPolicy"
            variants={mainContainer2()}
            initial="hidden"
            animate="show">
            <motion.h4 variants={textVariant2()}>What Personal Information We Collect</motion.h4>
            <motion.p variants={textVariant2()}>
            The types of personal information we obtain about you depends on how you interact with our app and use our Services. When we use the term "personal information", we are referring to information that identifies, relates to, describes or can be associated with you, such as your name, address, phone number, email, payment confirmation, password, security questions, feedbacks
            </motion.p>
          </motion.div>

           
          <motion.div
            className="privacyPolicy"
            variants={mainContainer2()}
            initial="hidden"
            animate="show">
            <motion.h4 variants={textVariant2()}>How We Use Your Personal Information</motion.h4>
            <motion.p variants={textVariant2()}>
            - Marketing and Advertising. We use your personal information for marketing and promotional purposes, such as to send marketing, advertising and promotional communications by email, text message or postal mail, and to show you advertisements for products or services. This may include using your personal information to better tailor the Services and advertising on our app
            </motion.p>
          </motion.div>

          <motion.div
            className="privacyPolicy"
            variants={mainContainer2()}
            initial="hidden"
            animate="show">
            <motion.h4 variants={textVariant2()}>Link to Other Websites</motion.h4>
            <motion.p variants={textVariant2()}>
            Our app may provide links to websites or other online platforms operated by third parties. If you follow links to sites not affiliated or controlled by us, you should review their privacy and security policies and other terms and conditions. We do not guarantee and are not responsible for the privacy or security of such sites, including the accuracy, completeness, or reliability of information found on this app. 
            </motion.p>
          </motion.div>

          <motion.div
            className="privacyPolicy"
            variants={mainContainer2()}
            initial="hidden"
            animate="show">
            <motion.h4 variants={textVariant2()}>Complaints</motion.h4>
            <motion.p variants={textVariant2()}>
            If you have complaints about how we process your personal information, please contact us using the contact details provided below.
            </motion.p>
          </motion.div>

          
          <motion.div
            className="privacyPolicy"
            variants={mainContainer2()}
            initial="hidden"
            animate="show">
            <motion.h4 variants={textVariant2()}>Contact</motion.h4>
            <motion.p variants={textVariant2()}>
            Should you have any questions about our privacy practices or this Privacy Policy, or if you would like to exercise any of the rights available to you, email us at <NavLink  to= "mailto:hello@deyspeak.com" >hello@deyspeak.com</NavLink>
            </motion.p>
          </motion.div>
          
          <motion.p variants={textVariant2()}>
          </motion.p>
        </motion.div>
      </div>
      <Footer />
    </motion.div>
  );
}
