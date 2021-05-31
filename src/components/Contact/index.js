import React from "react";
import styled from "styled-components";

const StyledSection = styled.section`
   height: 50vh;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   @media screen and (min-width: 50em) {
      height: 75vh;
      min-height: 600px;
   }
`;

const ContactInnerWrapper = styled.div`
   width: auto;
   height: auto;
`;

const StyledContext = styled.p`
   font-size: 0.75em;
   text-transform: uppercase;
   font-weight: normal;
   @media screen and (min-width: 50em) {
      font-size: 0.85em;
   }
`;

const StyledTitle = styled.p`
   font-size: 2em;
   font-weight: bold;
   letter-spacing: 2px;
   @media screen and (min-width: 50em) {
      font-size: 4em;
   }
`;

const StyledEmail = styled.a`
   color: #f55f44;
   font-size: 1.15em;
   @media screen and (min-width: 50em) {
      font-size: 2em;
   }
`;

const Contact = () => {
   return (
      <StyledSection className="contact">
         <ContactInnerWrapper>
            <StyledContext>Contact</StyledContext>
            <StyledTitle className="email-contact">Like my work?</StyledTitle>
            <StyledEmail
               href="mailto:webdeveloper@vcasilla.com?subject=Hello Vincent!"
               rel="noopener noreferrer"
            >
               webdeveloper@vcasilla.com
            </StyledEmail>
         </ContactInnerWrapper>
      </StyledSection>
   );
};

export default Contact;
