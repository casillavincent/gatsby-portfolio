import React from "react";
// Icons
import { FaGithubAlt, FaLinkedinIn } from "react-icons/fa";
import { CgTwitter } from "react-icons/cg";
import { IconContext } from "react-icons";
const Footer = () => {
   return (
      <footer className="site-footer" id="site-footer">
         <p>Connect with me</p>
         <div className="footer-social-icons">
            <IconContext.Provider value={{ color: "white", size: "1.5em" }}>
               <a href="#0" title="Github">
                  <FaGithubAlt />
               </a>
               <a href="#0" title="Linkedin">
                  <FaLinkedinIn />
               </a>
               <a href="#0" title="Twitter">
                  <CgTwitter />
               </a>
            </IconContext.Provider>
         </div>
         <p className="copyright">&copy; Vincent Casilla 2021</p>
      </footer>
   );
};

export default Footer;
