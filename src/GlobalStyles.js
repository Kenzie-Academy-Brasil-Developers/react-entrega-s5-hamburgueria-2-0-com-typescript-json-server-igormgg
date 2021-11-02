import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
    --color-primary: #27AE60;
    --color-secondary: #EB5757;
    --gray-600: #333333;
    --gray-300: #828282;
    --gray-100: #E0E0E0;
    --gray-0: #F5F5F5;
    --fb-negative: #E60000;
    --fb-warning: #FFCD07;
    --fb-success: #168821;
    --fb-information: #155BCB;
}

* {
    font-family: 'Inter', sans-serif;
}

button:hover {
    cursor: pointer;
}

`;

export default GlobalStyle;
