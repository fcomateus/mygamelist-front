import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
        color: ${({ theme }) => theme.COLORS.WHITE};
        font-family: 'Roboto Mono', sans-serif;

    }

    input {
        font-family: 'Roboto Mono', sans-serif;
    }

    a {
        text-decoration: none;
        color: ${({ theme }) => theme.COLORS.WHITE};
    }

    h1 {
        font-size: 30px;
        font-weight: normal;
    }

`;