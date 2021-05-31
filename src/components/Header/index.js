/* Imports */
import React, { useState, useEffect } from "react";
import { Spin as Hamburger } from "hamburger-react";
import { Link } from "gatsby";
import { StyledHeader, StyledButton, Navigation, Logo } from "./styles";

const Header = ({ theme }) => {
   const [isOpen, setIsOpen] = useState(false);
   useEffect(() => {
      const body = document.querySelector("body");
      if (isOpen) {
         body.setAttribute("style", "overflow-y: hidden");
      } else {
         body.removeAttribute("style");
      }
   }, [isOpen]);

   return (
      <StyledHeader className="site-header">
         {/* Site Branding */}
         <Logo className="logo">
            <Link to="/">Portfolio.</Link>
         </Logo>

         {/* Hamburger icon */}
         <StyledButton className="hamburger-icon">
            <Hamburger size="20" color="black" toggled={isOpen} toggle={setIsOpen} />
         </StyledButton>

         {/* Site Navigation */}
         <Navigation
            className="site-navigation"
            isOpen={isOpen}
            onClick={() => {
               setIsOpen(false);
            }}
         >
            {/* Navigation items */}
            <ul className="nav-ul">
               <li className="nav-li">
                  <Link to="/">Home</Link>
               </li>
               <li className="nav-li">
                  <Link to="/about">About</Link>
               </li>
               <li className="nav-li">
                  <Link to="/">Contact</Link>
               </li>
            </ul>
         </Navigation>
      </StyledHeader>
   );
};

export default Header;
