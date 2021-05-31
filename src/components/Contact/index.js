import React from "react";
import { FaTelegramPlane } from "react-icons/fa";

const Contact = () => {
   return (
      <section className="contact">
         <p className="email-contact">Like my work?</p>
         <a
            href="mailto:webdeveloper@vcasilla.com?subject=Hello Vincent!"
            rel="noopener noreferrer"
         >
            <FaTelegramPlane />
            Contact me Here
         </a>
      </section>
   );
};

export default Contact;
