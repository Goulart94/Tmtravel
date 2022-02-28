import styled from "styled-components";

export const ContainerBackground = styled.div`

width: 100vh;
height: 100vh;
&::before{
content: "";
background-position: center center;
background-size: cover;
background-repeat: no-repeat;
backface-visibility: hidden;
animation: slideBg 8s linear infinite 0s;
animation-timing-function: ease-in-out;
background-image:  ${'../../public/images/algarve.jpg'};
}

`
