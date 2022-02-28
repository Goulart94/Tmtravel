import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    overflow: hidden;
}
@media (max-width: 1080px) {
    html{
        font-size: 93.75%;
    }
}
@media (max-width: 720px) {
    html{
        font-size: 87.5%;
    }
}
body{
    background: #FCFCFC;
    
body, input, textarea, select, button{
    font: 400 1rem "Oswald", sans-serif;
}
a {
    color: inherit;
    text-decoration: none;
}

`
