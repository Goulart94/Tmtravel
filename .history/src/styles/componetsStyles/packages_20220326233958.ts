
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
    margin: 1rem auto;
    padding: 0 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    img{
       max-width: 800px;
       height: 600px;
       border-radius: 15px;
    }
    .ContainerText{
       max-width: 600px;
       height: 100%;
       margin: 0;
    }
 `