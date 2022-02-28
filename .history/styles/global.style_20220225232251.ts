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
    background: linear-gradient(45deg,  rgba(16,153,189,0.4), rgba(1,168,176, 0.4)) ;
    
body, input, textarea, select, button{
    font: 400 1rem "Oswald", sans-serif;
}
a {
    color: inherit;
    text-decoration: none;
}

`
