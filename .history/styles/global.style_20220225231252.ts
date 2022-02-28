import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    overflow: hidden;
}
body, input, textarea, select, button{
    font: 400 1rem "Oswald", sans-serif;
}

`
