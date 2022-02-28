import styled from "styled-components";


export const SliderOne = styled.div`

background-image:  url('../../../images/slider1.jpeg');
background-repeat: no-repeat;
background-repeat: no-repeat;
background-size: cover;
background-position: 110% 143% ;
height:100vh;

display: flex;

align-items: center;
text-align: center;
  
`

export const Slidertwo= styled.div`

background-image:  url('../../../images/slider2.jpeg');
background-repeat: no-repeat;
background-repeat: no-repeat;
background-size: cover;
background-position: 110% 140%;
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
export const ContainerText = styled.section`

@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap');

font: 700 3rem "Caveat", cursive;
color:${p=>p.theme.colors.white100};
border: solid 1px transparent;
border-radius: 10px;
background: rgba(0, 252, 255, 0.2);
max-width: 540px;
height: auto;
text-align: center;
position: relative;
bottom: 12rem;
left: 7rem





`
/*src="../../images/slider1.jpeg"
      alt="First slide"*/