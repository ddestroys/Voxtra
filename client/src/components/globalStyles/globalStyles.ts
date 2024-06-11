import {createGlobalStyle} from "styled-components";
import 'react-toastify/dist/ReactToastify.css';

export const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        min-height: 100vh;
        font-family: Montserrat, sans-serif;
        background: linear-gradient(61.49deg, #400F51 -5.56%, #0E0F10 30.02%, #0E0F10 74.69%, #3D074F 103.91%);
      color: #FFFFFF;
    }

    body > iframe {
      display: none;
    }
`