import React from "react";
import styled from "styled-components";

const StyledSection = styled.section`
    height: 40vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0px 35px;
    @media screen and (min-width: 25em) {
        height: 75vh;
        min-height: 600px;
    }
`;

const ContactInnerWrapper = styled.div`
    width: auto;
    height: auto;
    max-width: 650px;
    @media screen and (min-width: 75em) {
        max-width: none;
    }
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
    font-size: 1.5em;
    font-weight: bold;
    letter-spacing: 1px;
    line-height: 1;
    @media screen and (min-width: 25em) {
        font-size: 2em;
    }
    @media screen and (min-width: 50em) {
        font-size: 4em;
    }
`;

const StyledEmail = styled.a`
    color: #f55f44;
    font-size: 0.9em;
    @media screen and (min-width: 25em) {
        font-size: 1.2em;
    }
    @media screen and (min-width: 50em) {
        font-size: 2em;
    }
`;

const Contact = () => {
    return (
        <StyledSection className="contact" id="contact">
            <ContactInnerWrapper>
                <StyledContext>Contact</StyledContext>
                <StyledTitle className="email-contact">Like my work? Let's chat!</StyledTitle>
                <StyledEmail
                    href="mailto:webdeveloper@vcasilla.com?subject=Hello Vincent!"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    webdeveloper@vcasilla.com
                </StyledEmail>
            </ContactInnerWrapper>
        </StyledSection>
    );
};

export default Contact;
