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
justify-content: space-between;
align-items: center;
flex-wrap: nowrap;
padding: 1rem 3rem;

@media (max-width: 420px){
      background-size: cover;
      background-position: 45% 280%;
      padding: 1rem 1rem;


}
@media (max-width: 1000px){
      background-size: cover;
      background-position: 45% 40%;
      height: 400px;
      padding: 1rem 1.8rem;


}

@media (max-width: 1300px){
      background-size: cover;
      background-position: 45% 40%;
      padding: 1rem 1.8rem;


}
  
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
max-width: 300px;
max-height: 250px;
text-align: center;
@media (max-width: 780px){
      max-width: 120px;
      
      font: 700 1.1rem  "Caveat", cursive;

}



`
export const ContainerTextTwo = styled.div`

@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap');

font: 700 2.2rem "Caveat", cursive;
color:${p=>p.theme.colors.yellow300};
border: solid 1px transparent;
border-radius: 10px;
background: rgba(0, 252, 255, 0.1);
max-width: 300px;
max-height: 250px;
height: auto;
text-align: center;
@media (max-width: 780px){
      max-width: 120px;
      font: 700 1.1rem  "Caveat", cursive;

}





`