import styled from "styled-components";
import algarve from '../public/images/algarve.png';
import alemanha from '../public/images/alemanha.png';
import espanha from '../public/images/espanha.png';
import paris from '../public/images/paris.png';
import italia from '../public/images/italia.png';


export const ContainerBackground = styled.div`

height: 100vh;

&::before{

width: 100vh;
height: 100vh;
background-position: center center;
background-size: cover;
background-repeat: no-repeat;
backface-visibility: hidden;
animation: slideBg 8s linear infinite 0s;
animation-timing-function: ease-in-out;
background-image:  src('../public/images/algarve.png');
z-index:-1;
opacity: 0.4;

@keyframes slideBg{
    0%{
        background-image:  src('../public/images/algarve.png');
    }
    25%{
        background-image:  src('../public/images/italia.png');
    }
    50%{
        background-image:  src();
    }
    75%{
        background-image:  src();
    }
    100%{
        background-image:  src();
    }
    
}
}
`
