import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    @import url("https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap");

    :root {
        --primary-color: #0a70b0;
        --black: #3a3a3a;
        --light-gray: #8e8e8e;
        --white: #fff;
    }
    .swal-button {
        background-color:var(--primary-color)
    }

    html {font-size: 16px}

    @media (max-width: 1600px) and (min-width: 1000px) {
        html {
            font-size: 12px
        }
    }
    @media (max-width: 999px) and (min-width: 800px) {
        html {
            font-size: 10px
        }
    }

    *,
    *::after,
    *::before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Manrope";
    }

    a,
    p, h1, h2, h3, h4, h5, h6,
    img {
        cursor: pointer;
    }
`;

export default GlobalStyles;
