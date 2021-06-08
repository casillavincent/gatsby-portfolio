import styled from "styled-components";

export const StyledHeader = styled.header`
    width: 100%;
    height: 75px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    top: 0px;
    left: 0px;
    @media screen and (min-width: 50em) {
        height: 90px;
    }
`;

export const StyledButton = styled.button`
    background: none;
    border-style: none;
    margin-right: 10px;
    transition: all 0.4s ease-out;

    @media screen and (min-width: 50em) {
        margin-right: 100px;
    }
`;

export const Navigation = styled.nav`
    transition: all 0.8s cubic-bezier(0.83, 0, 0.17, 1);
    position: fixed;
    z-index: 999;
    top: ${({ isOpen }) => (isOpen ? "75px" : "100%")};
    opacity: ${({ isOpen }) => (isOpen ? "100%" : "25%")};
    @media screen and (min-width: 50em) {
        top: ${({ isOpen }) => (isOpen ? "90px" : "100%")};
    }

    left: 0px;
    background: white;
    width: 100%;
    height: 100vh;

    ul {
        width: inherit;
        height: inherit;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    ul li {
        margin-bottom: 25px;
        list-style-type: none;
        a {
            color: black;
            font-size: 1.15em;
            transition: 0.25s ease-out;
            @media screen and (min-width: 50em) {
                font-size: 1.25em;
                &:hover {
                    color: #f55f44;
                    padding-left: 10px;
                }
            }
        }
    }
`;

export const Logo = styled.div`
    margin-left: 20px;
    transition: all 0.4s ease-out;

    a {
        font-size: 1.25em;
        padding: 10px;
        color: black;
    }
    @media screen and (min-width: 50em) {
        margin-left: 100px;
        a {
            font-size: 1.5em;
        }
    }
`;
