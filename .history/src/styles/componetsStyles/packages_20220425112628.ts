

import styled from "styled-components";

export const Container = styled.div`
width: 100%;
flex-direction: column;
display: flex;
align-items: center;

`

export const ContainerImage =styled.div`

width:100%;
height: 350px;
margin: 0;
background-image:  url('../../../images/pacotesImg2.jpg');
background-repeat: no-repeat;
background-repeat: no-repeat;
background-size: cover;
transform: 1;
border-bottom: 1px solid ${p=> p.theme.colors.yellow300};
@media(max-width: 850px){
   background-position: 31% 40%;
}


`

export const Title = styled.h1`

    
    text-align: center;
    font-size: 4rem;
    font-size: 4rem;
    font-weight: 400;
    color: ${p=>p.theme.colors.blue700};
    

`

 export const PackagesSection = styled.section`
   
    border-bottom: 2px solid ${p=>p.theme.colors.yellow300}; 
    max-width: 1200px;
    margin: 2rem;
    padding: 2rem 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #F7F7F7 ;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgb(31, 17, 100, 80%);
    transition: 0.3s;
     
    &:hover{
    box-shadow: 0px 0px 10px rgb(31, 17, 100);
    }

    img{
       
       width: 600px;
       height: 400px;
       border-radius: 15px;
       border: 2px solid ${p => p.theme.colors.yellow300};
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
         margin-bottom: 10px;
       }
       p{
         margin-top: 1rem;
         margin-bottom: 1rem;
         font-weight: 400;
       }
       
      .label{
       font-size: 0.7rem;

      }
      .containerButtom{
         width:100%;
         margin-top: 1rem;
         
      }
       
    
       
    }
    .spanPrice{
       font-size: 0.9rem;
       margin-right: 5px;
       color: ${p => p.theme.colors.yellow300};
       font-weight: 900;
      }
@media (min-width:810px) and (max-width: 1280px){

  
    max-width: 800px;
    margin: 2rem;
    padding: 2rem auto;
    display: flex;
    flex-direction: column;
    
     
   
    img{
       width: 700px;
       height: 400px;
      
    }
    .ContainerText{
       display: flex;
       flex-wrap: wrap;
       flex-direction: column;
       max-width: 700px;
       padding-bottom: 0.8rem; 
    }

 }
 @media (max-width: 450px){
    
    max-width: 320px;
    margin: 2rem;
    padding: 0.4rem;
    display: flex;
    flex-direction: column;
    
     
   
    img{
       margin-top: 10px;
       width: 300px;
       height: 200px;
      
    }
    p{
     display: none;
    }
    
   
    .ContainerText{
       display: flex;
       flex-wrap: wrap;
       flex-direction: column;
       width: 100%;
       padding-bottom: 0.8rem;
      }

 }
 @media (min-width: 450px) and (max-width: 810px){
    
    max-width: 520px;
    margin: 2rem;
    padding: 0.4rem;
    display: flex;
    flex-direction: column;
    
     
   
    img{
       margin-top: 10px;
       width: 400px;
       height: 250px;
      
    }
    .ContainerText{
       display: flex;
       flex-wrap: wrap;
       flex-direction: column;
       max-width: 100%;
       padding-bottom: 0.8rem;
      }
 }
 `
 export const Button = styled.button`

 margin: 0 auto;
 width: 100%;
 height: 4rem;
 border: none;
 border-radius: 10px;
 
 color:${p=>p.theme.colors.blue700};
 font-weight: 700;
 background: ${p=>p.theme.colors.yellow300};

 transition: 0.4s;
 &:hover{
  cursor: pointer;
     filter: brightness(0.8);
     
 }
 
 
 `