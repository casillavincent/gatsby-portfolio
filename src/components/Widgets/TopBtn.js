import React, { useState, useEffect } from "react";
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
    /* Change the color of the arrow when page is scrolled to the bottom */
    const [isBottom, setIsBottom] = useState(false);

    useEffect(() => {
        const bodyEl = document.querySelector("body");
        bodyEl.onscroll = function (ev) {
            if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
                setIsBottom(true);
            } else {
                setIsBottom(false);
            }
        };
    });

    return (
        <StyledButton
            className="back-to-top-btn"
            title="Scroll to Top"
            onClick={() => {
                window.scrollTo(0, 0);
            }}
        >
            <BsArrowUpShort size="3em" color={isBottom ? "#f55f44" : "black"} />
        </StyledButton>
    );
};

export default TopBtn;
