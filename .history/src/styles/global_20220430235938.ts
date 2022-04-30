import {createGlobalStyle} from 'styled-components';


export const ThemeLigthGlobal = createGlobalStyle`


*{
    
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    overflow: hidden;
}
/* Largura da barra de rolagem */
::-webkit-scrollbar {
    width: 10px;
}

/* Fundo da barra de rolagem */
::-webkit-scrollbar-track-piece {
    background-color: #EEE;
    border-left: 1px solid #CCC
}

/* Cor do indicador de rolagem */
::-webkit-scrollbar-thumb:vertical,
::-webkit-scrollbar-thumb:horizontal {
    background-color: #BAC0C4
}

/* Cor do indicador de rolagem - ao passar o mouse */
::-webkit-scrollbar-thumb:vertical:hover,
::-webkit-scrollbar-thumb:horizontal:hover {
    background-color: #717171
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
