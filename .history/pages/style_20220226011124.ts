import styled from "styled-components";
import algarve from '../public/images/algarve.png';
import alemanha from '../public/images/alemanha.png';
import espanha from '../public/images/espanha.png';
import paris from '../public/images/paris.png';
import italia from '../public/images/italia.png';


export const ContainerBackground = styled.div`

height: 100vh;



width: 100vh;
height: 100vh;
background-position: center center;
background-size: cover;
background-repeat: no-repeat;
backface-visibility: hidden;
animation: slideBg 8s linear infinite 0s;
animation-timing-function: ease-in-out;
background-image: url('../public/images/algarve.png') ;


@keyframes slideBg{
    0%{
        background-image:  url('../public/images/algarve.png');
    }
    25%{
        background-image:  url('../public/images/espanha.png');
    }
    50%{
        background-image:  url('../public/images/paris.png');
    }
    75%{
        background-image:  url(${alemanha});
    }
    100%{
        background-image:  url(${italia});
    }
    
}

`
