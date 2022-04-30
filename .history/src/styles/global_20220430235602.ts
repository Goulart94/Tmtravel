import {createGlobalStyle} from 'styled-components';


export const ThemeLigthGlobal = createGlobalStyle`


*{
    
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    overflow: hidden;
}
::-webkit-scrollbar-track {
    background-color: #F4F4F4;
}
html{
    overflow-y: scroll;
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
    background: ${p =>p.theme.colors.white100};
    
body, input, textarea, select, button{
    font: 400 1rem "Roboto", sans-serif;
}
a {
    color: inherit;
    text-decoration: none;
}

`
