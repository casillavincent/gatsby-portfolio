import { createGlobalStyle } from "styled-components"

/* Global Styles */
const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Arvo&family=Lato:wght@100;300&display=swap');
    html * {
        padding: 0px;
        margin: 0px;
        box-sizing: border-box;
        font-family: 'Lato', sans-serif;

    }
    h1,h2,h3,h4,h5,h6 {
        font-family: 'Arvo', serif;
    }
    a {
        text-decoration: none;
        &:hover {
            cursor: pointer;
        }
    }
`
export default GlobalStyle
