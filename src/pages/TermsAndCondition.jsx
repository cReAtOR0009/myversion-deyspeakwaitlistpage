import React from "react";
import Navbar from "../components/navbar";
import { NavLink } from "react-router-dom";
import { mascot,deyspeaktext,avatar1,avatar2,avatar3,linkdnicon,instagramicon,twittericon,mobilescreen1,mobilescreen2,mobilescreen3, } from '../assets'


export default function TermsAndCondition() {
  return (
    <div className="privacyContainer">
      <div className="privacyLeft">
        <div className="termsConditionActive">
          <NavLink to="/policy/terms-and-condition">Terms and Conditions</NavLink>
        </div>
        <div className="privacyPolicyLink">
          <NavLink to="/policy/privacy">Privacy Policy</NavLink>
        </div>
      </div>

      <div className="privacyRight">
        <div className="termsCondition">
          <h2>Terms and Conditions</h2>
          <p>
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
          </p>{" "}
          <p>
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
          </p>{" "}
          <p>
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
          </p>
        </div>
      </div>
      <div className="socialMedia">
    <div className="socialIcons">
     <a href=""> <img src={twittericon} alt="deyspeak twitter icon" /></a>
     <a href=""><img src={instagramicon} alt="deyspeak instagram icon" /></a> 
      <a href=""><img src={linkdnicon} alt="deyspeak linkdn icon"/></a>
    </div>
      <p>2023.Deyspeak</p>
    </div>
    </div>
  );
}
