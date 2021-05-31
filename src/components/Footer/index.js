import React from "react";
const Footer = () => {
   return (
      <footer className="site-footer" id="site-footer">
         <p className="copyright">&copy; Vincent Casilla 2021</p>

         <div className="social">
            <p>connect with me</p>
            <div className="social-links">
               <a
                  rel="noreferrer"
                  href="https://twitter.com/casillavincent"
                  className="twitter-link"
                  title="Twitter"
                  id="twitter"
                  target="_blank"
               >
                  Twitter
               </a>
               <a
                  rel="noreferrer"
                  href="https://github.com/casillavincent"
                  className="github-link"
                  title="Github"
                  id="github"
                  target="_blank"
               >
                  Github
               </a>
               <a
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/vcasilla/"
                  className="linkedin-link"
                  title="Linkedin"
                  id="linkedin"
                  target="_blank"
               >
                  Linkedin
               </a>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
