import React from "react";
import { BsArrowUpShort } from "react-icons/bs";
import styled from "styled-components";

const StyledButton = styled.button`
   background: none;
   border-style: none;
   width: 100%;
   height: 100px;
   @media screen and (min-width: 50em) {
      transition: all 0.2s ease-out;
      &:hover {
         cursor: pointer;
         margin-bottom: 5px;
         color: #f55f44;
      }
      width: 100px;
      position: fixed;
      bottom: 0px;
      left: 0px;
      z-index: 0;
   }
`;

const TopBtn = () => {
   return (
      <StyledButton
         className="back-to-top-btn"
         title="Scroll to Top"
         onClick={() => {
            window.scrollTo(0, 0);
         }}
      >
         <BsArrowUpShort size="3em" />
      </StyledButton>
   );
};

export default TopBtn;
