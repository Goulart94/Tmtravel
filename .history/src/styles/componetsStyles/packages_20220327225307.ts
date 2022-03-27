
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
    

`

 export const PackagesSection = styled.section`
   
    border-bottom: 2px solid ${p=>p.theme.colors.yellow300}; 
    max-width: 1320px;
    margin: 1rem auto;
    padding: 2rem 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #F7F7F7 ;
    border-radius: 10px;

    img{
       max-width: 700px;
       height: 400px;
       border-radius: 15px;
    }
    .ContainerText{
       display: flex;
       flex-wrap: wrap;
       flex-direction: column;
      
       max-width: 500px;
       padding: 1rem;
       margin: 0;
       color: ${p => p.theme.colors.blue700};

       h2{
        margin-top: 10px;
        font-size: 2rem;
        font-weight: 900;
        
        
       }
       h3{
         margin-top: 10px;
         font-weight: 700;
       }
       p{
         font-weight: 400;
       }
       
      span{
         font-size: 0.7rem;
      }
       
    
       
    }
    .spanPrice{
       font-size: 0.9rem;
       margin-right: 5px;
       color: ${p => p.theme.colors.yellow300};
       font-weight: 900;
      }
    
 `
 export const Button = styled.button`
 margin-top: 2rem;
 
 height: 4rem;
 border: none;
 border-radius: 10px;
 padding:1rem;
 color:${p=>p.theme.colors.blue700};
 font-weight: 700;
 background: ${p=>p.theme.colors.yellow300};

 transition: 0.4s;
 &:hover{
     filter: brightness(0.8);
     
 }
 
 
 `