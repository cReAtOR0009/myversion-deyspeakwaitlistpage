import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar"
import { activeTab, mainContainer2,textVariant2 } from "../animations";
import { NavLink } from "react-router-dom";

import { socialContainerContent, socialIconContainer, textVariant } from "../animations";
import { mascot,deyspeaktext,avatar1,avatar2,avatar3,linkdnicon,instagramicon,twittericon,mobilescreen1,mobilescreen2,mobilescreen3, } from '../assets'
import Footer from "../components/Footer";


export default function TermsAndCondition() {
  return (
    <div className="privacyContainer">
      <motion.div className="privacyLeft"
      variants={mainContainer2()}
      initial="hidden"
      animate="show"
      >
        <motion.div className="termsConditionActive"
        variants={activeTab()}
        >
          <NavLink to="/policy/terms-and-condition">Terms and Conditions</NavLink>
        </motion.div>
        <motion.div className="privacyPolicyLink">
          <NavLink to="/policy/privacy">Privacy Policy</NavLink>
        </motion.div>
      </motion.div>

      <div className="privacyRight">
        <motion.div className="termsCondition"
        variants={mainContainer2()}
        initial="hidden"
        animate="show"
        >
          <motion.h2
          variants={textVariant2()}
          >Terms and Conditions ("Terms")</motion.h2>

           <motion.div
            className="privacyPolicy"
            variants={mainContainer2()}
            initial="hidden"
            animate="show">
          <motion.p variants={textVariant2()}>Our Terms and Conditions were last updated 2023. Please read these terms and conditions carefully before using Our Service.</motion.p>
          <motion.h4 variants={textVariant2()}>Interpretation and Definitions</motion.h4>
          <motion.h6 variants={textVariant2()}>Interpretation</motion.h6>
           
          <motion.p
          variants={textVariant2()}
          >The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
          </motion.p>{" "}
          </motion.div>

           <motion.div
            className="privacyPolicy"
            variants={mainContainer2()}
            initial="hidden"
            animate="show">
          <motion.h4 variants={textVariant2()}>Definitions</motion.h4>
          <motion.h6 variants={textVariant2()}>For the purposes of these Terms and Conditions:</motion.h6>
           
          <motion.p
          variants={textVariant2()}
          >
            “Account” means a unique account created for You to access our Service or parts of our Service. < br/>
          “Company” refers to DeySpeak < br/>
          “Country” refers to Nigeria < br/>
          “Feedback” means feedback, innovations or suggestions sent by You regarding the attributes, performance or features of our Service. < br/>
          “In-App Purchase” refers to the items you can purchase in the app. < br/>
          “In App Subscription” refers to the fee you pay to access advance features of the app. < br/>
          “Promotions” refer to ads sponsor in the app. < br/>
          “Terms and Conditions” (also referred as "Terms") mean these Terms and Conditions that form the entire agreement between You and the Company regarding the use of the Service. < br/>
          “Website” refers to www.deyspeak.com < br/>
          “You” means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.
          Acknowledgment < br/>
          </motion.p>{" "}
          </motion.div>

           <motion.div
            className="privacyPolicy"
            variants={mainContainer2()}
            initial="hidden"
            animate="show">
          <motion.h4 variants={textVariant2()}>Acknowledgment</motion.h4>
            <motion.p variants={textVariant2()}>
            These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service. By accessing or using the Service You agree to be bound by these Terms and Conditions. If You disagree with any part of these Terms and Conditions then You may not access the Service. Your access to and use of the Service is also conditioned on Your acceptance of and compliance with the Privacy Policy of the Company. 
            </motion.p>
          </motion.div>

           <motion.div
            className="privacyPolicy"
            variants={mainContainer2()}
            initial="hidden"
            animate="show">
            <motion.h4 variants={textVariant2()}>User Accounts</motion.h4>
            <motion.p variants={textVariant2()}>
            When You create an account with Us, You must provide Us information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of Your account on Our Service. You are responsible for safeguarding the password that You use to access the Service and for any activities or actions under Your password, whether Your password is with Our Service or a Third-Party Social Media Service.
            </motion.p>
          </motion.div>

          
           <motion.div
            className="privacyPolicy"
            variants={mainContainer2()}
            initial="hidden"
            animate="show">
            <motion.h4 variants={textVariant2()}>In-App Subscription and PurchasesIn-App Subscription and Purchases</motion.h4>
            <motion.p variants={textVariant2()}>
              Payment can be made through various payment methods we have available, such as Visa, MasterCard, Affinity Card, American Express cards or online payment methods (PayPal, for example).
              Payment cards (credit cards or debit cards) are subject to validation checks and authorization by Your card issuer. 
            </motion.p>
          </motion.div>

           <motion.div
            className="privacyPolicy"
            variants={mainContainer2()}
            initial="hidden"
            animate="show">
            <motion.h4 variants={textVariant2()}>Promotions</motion.h4>
            <motion.p variants={textVariant2()}>
            Any Promotions made available through the Service may be governed by rules that are separate from these Terms.
            
            If You participate in any Promotions, please review the applicable rules as well as our Privacy policy. If the rules for a Promotion conflict with these Terms, the Promotion rules will apply.
           
            </motion.p>
          </motion.div>

           <motion.div
            className="privacyPolicy"
            variants={mainContainer2()}
            initial="hidden"
            animate="show">
            <motion.h4 variants={textVariant2()}> Intellectual Property</motion.h4>
            <motion.p variants={textVariant2()}>
            The Service and its original content (excluding Content provided by You or other users), features and functionality are and will remain the exclusive property of the Company and its licensors.
            
            The Service is protected by copyright, trademark, and other laws of both the Country and foreign countries.
            Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of the Company.

             <motion.div
            className="privacyPolicy"
            variants={mainContainer2()}
            initial="hidden"
            animate="show">
              <motion.h4 variants={textVariant2()}>Your Feedback to Us</motion.h4>
              <motion.p variants={textVariant2()}>You assign all rights, title and interest in any Feedback You provide the Company. If for any reason such assignment is ineffective, You agree to grant the Company a non-exclusive, perpetual, irrevocable, royalty free, worldwide right and license to use, reproduce, disclose, sub-license, distribute, modify and exploit such Feedback without restriction.</motion.p>
            </motion.div>

             <motion.div
            className="privacyPolicy"
            variants={mainContainer2()}
            initial="hidden"
            animate="show">
              <motion.h4 variants={textVariant2()}>Termination</motion.h4>
              <motion.p variants={textVariant2()}>
              We may terminate or suspend Your Account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if You breach these Terms and Conditions.

              Upon termination, Your right to use the Service will cease immediately. If You wish to terminate Your Account, You may simply discontinue using the Service
              </motion.p>
            </motion.div>

             <motion.div
            className="privacyPolicy"
            variants={mainContainer2()}
            initial="hidden"
            animate="show">
              <motion.h4 variants={textVariant2()}>Governing Law</motion.h4>
              <motion.p variants={textVariant2()}>The laws of the Country, excluding its conflicts of law rules, shall govern this Terms and Your use of the Service. Your use of the Application may also be subject to other local, state, national, or international laws.
              </motion.p>
            </motion.div>

            
             <motion.div
            className="privacyPolicy"
            variants={mainContainer2()}
            initial="hidden"
            animate="show">
              <motion.h4 variants={textVariant2()}>Disputes Resolution</motion.h4>
              <motion.p variants={textVariant2()}>If You have any concern or dispute about the Service, You agree to first try to resolve the dispute informally by contacting the Company.
              </motion.p>
            </motion.div>

             <motion.div
            className="privacyPolicy"
            variants={mainContainer2()}
            initial="hidden"
            animate="show">
              <motion.h4 variants={textVariant2()}>Changes to These Terms and Conditions</motion.h4>
              <motion.p variants={textVariant2()}>We reserve the right, at Our sole discretion, to modify or replace these Terms at any time. By continuing to access or use Our Service after those revisions become effective, You agree to be bound by the revised terms. If You do not agree to the new terms, in whole or in part, please stop using the website and the Service.
              </motion.p>
            </motion.div>

             <motion.div
            className="privacyPolicy"
            variants={mainContainer2()}
            initial="hidden"
            animate="show">
              <motion.h4 variants={textVariant2()}>Contact Us</motion.h4>
              <motion.p variants={textVariant2()}>If you have any questions about these Terms and Conditions, You can contact us:
              </motion.p>
              <motion.p variants={textVariant2()}>By visiting this page on our website: <NavLink to= "/">www.deyspeak.com</NavLink></motion.p>
                <motion.p variants={textVariant2()}>By sending us an email: <NavLink  to= "mailto:hello@deyspeak.com" >hello@deyspeak.com</NavLink></motion.p>
              </motion.div>
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
      <Footer />
    </div>
    
  );
}
