
import styled from "styled-components";


export const ContainerImage =styled.div`
width:100%;
height: 350px;

background-image:  url('../../../images/pacotesImg2.jpg');
background-repeat: no-repeat;
background-repeat: no-repeat;
background-size: cover;
transform: 1);
background-position: 5% -16%;
border-bottom: 1px solid ${p=> p.theme.colors.yellow300};
`
export const Title = styled.h1`

    
    text-align: center;
    font-size: 4rem;
    color: ${p=>p.theme.colors.blue700};
    border-bottom: 2px solid ${p=>p.theme.colors.yellow300}; 

`

 export const PackagesSection = styled.section`
   
    border-bottom: 2px solid ${p=>p.theme.colors.yellow300}; 
    max-width: 1320px;
    margin: 3rem auto;
    padding: 0 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    img{
       max-width: 700px;
       height: 400px;
       border-radius: 15px;
    }
    .ContainerText{
       display:block;
       
       align-items: center;
       max-width: 500px;
       height: 100%;
       margin: 0;
    }
    
 `
 export const Button = styled.button`
 align-items: center;
 height: 4rem;
 border: none;
 border-radius: 10px;
 padding:1rem;
 color:${p=>p.theme.colors.blue700};
 font-weight: 700;
 background: ${p=>p.theme.colors.yellow300};
 margin: 1rem 4rem;
 transition: 0.4s;
 &:hover{
     filter: brightness(0.8);
     
 }
 
 
 `