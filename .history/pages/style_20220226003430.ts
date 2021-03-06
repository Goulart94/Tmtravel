import styled from "styled-components";
import algarve from '../public/images/algarve.png';

export const ContainerBackground = styled.div`

width: 100vh;
height: 100vh;
background-position: center center;
background-size: cover;
background-repeat: no-repeat;
backface-visibility: hidden;
animation: slideBg 8s linear infinite 0s;
animation-timing-function: ease-in-out;
background-image:  url('../public/images/algarve.png');

@keyframes slideBg{
    0%{
        background-image:  url('../public/images/algarve.png');
    }
    25%{
        background-image:  url('../public/images/italia.png');
    }
    50%{
        background-image:  url('../public/images/paris.png');
    }
    75%{
        background-image:  url('../public/images/espanha.png');
    }
    100%{
        background-image:  url('../public/images/alemanha.png');
    }
    
}

`
