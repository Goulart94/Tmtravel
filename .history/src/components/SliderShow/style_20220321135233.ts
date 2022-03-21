import styled from "styled-components";

export const Container = styled.div`
.carrosel{
      margin-top: -20px;
  
}

`


export const SliderOne = styled.div`

background-image:  url('../../../images/slider1.jpeg');
background-repeat: no-repeat;
background-repeat: no-repeat;
background-size: cover;
background-position: 10% 160%;

height: 800px;

display: flex;

align-items: center;
text-align: center;
  
`

export const Slidertwo= styled.div`

background-image:  url('../../../images/slider2.jpeg');
background-repeat: no-repeat;
background-repeat: no-repeat;
background-size: cover;
background-position: 10% 95%;
height:100vh;

display: flex;
align-items: center;
text-align: center;
  
`
export const Sliderthree = styled.div`

background-image:  url('../../../images/slider3.jpeg');
background-repeat: no-repeat;
background-repeat: no-repeat;
background-size: cover;
background-position: 10% 95%;
height:100vh;

display: flex;
align-items: center;
text-align: center;

 
  
`
export const ContainerTextOne = styled.div`

@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap');

font: 700 2.2rem "Caveat", cursive;
color:${p=>p.theme.colors.yellow300};
border: solid 1px transparent;
border-radius: 10px;
background: rgba(0, 252, 255, 0.1);

height: auto;
text-align: center;
position: relative;
bottom: 2rem;
left: 6rem;


`
export const ContainerTextTwo = styled.div`

@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap');

font: 700 2.2rem "Caveat", cursive;
color:${p=>p.theme.colors.yellow300};
border: solid 1px transparent;
border-radius: 10px;
background: rgba(0, 252, 255, 0.1);

height: auto;
text-align: center;
position: relative;

left: 37rem;


`