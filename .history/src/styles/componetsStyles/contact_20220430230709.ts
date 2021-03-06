import styled from "styled-components";


export const ContainerImage =styled.div`
width:100%;
height: 350px;

background-image:  url('../../../images/contatosImg.jpg');
background-repeat: no-repeat;
background-repeat: no-repeat;
background-size: cover;
transform: 1);
background-position: 5% 57%;
border-bottom: 1px solid ${p=> p.theme.colors.yellow300};
`


export const AreaText = styled.div`
    max-width: 1320px;
    margin: 0 auto;
    padding: 0 2rem;
   

    display: flex;
    align-items: center;
    justify-content: space-between;
   
    bottom: 2rem;

    @media (min-width: 300px) and (max-width: 1077px ){
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: none;
        
        
    }
    

`
export const ContainerText = styled.main`
    max-width: 600px;
 

     h1{ 
         font-size: 70px;
         color: ${p => p.theme.colors.blue700};
         opacity: 0.8;
         span{
          font-size: 90px;
          color: ${p => p.theme.colors.yellow300};
         }
     }
     

    ul{
       margin-top: 20px;

        li{
        width: 100%;    
        font-size: 1rem;
        line-height: 1.5;
        font-weight: 400;
        opacity: 0.8;
        }
 
    }
    .icon{
       
        top: 8px;
        font-size: 2rem;
        margin-right: 2rem;
        opacity: 0.8;
    }
    p{

        width:46%;
        text-align: center;
        
        padding-top: 20px;
        padding-bottom: 10px;
        font-size: 1.2rem;
        font-weight: 400;
        border-bottom: solid 1px var(--gray-300);
        opacity: 0.8;
    }
    section{
        width: 50%;
        text-align:center;
        padding: 1rem;
        
    }
    .iconSection{
        
       
        font-size: 3rem;
        margin-right: 2rem;
        color: ${p=>p.theme.colors.blue700};
        transition: 0.3s;
        
        
        &:hover{
            cursor: pointer;
            transform: scale(1.2);
            
        }

    }
    @media (min-width: 720px) and (max-width: 1077px ){
        margin-bottom: 2rem;
        text-align: center;
        section{
        width: 100%;
        text-align:center;
        padding: 1rem;
        }
        p{
            width:95%;

        }
    
    }
    @media (min-width: 300px) and (max-width: 720px ){
        max-width:350px;
        
        section{
        width: 100%;
        text-align:center;
        padding: 1rem;
        }
        p{
            width:91%;

        }
        
    }

   
`
export const Form = styled.form`
max-width: 600px;
display: flex;
flex-direction: column;

top: 50px;
input[type=number]::-webkit-inner-spin-button { 
    -webkit-appearance: none;
    
}
input[type=number] { 
   -moz-appearance: textfield;
   appearance: textfield;

}


div{
   width: 100%;
  
   margin-top:5px;
}


label{
    margin-left: 10px;
    opacity: 0.8;

}
h1{
    
    margin:  10px;
    opacity: 0.8;
    
}
input:focus-within{
       box-shadow: 0px 0px 10px rgb(31, 17, 100);

}
@media (min-width: 720px) and (max-width: 1077px ){
        h1{
            text-align: center;
            margin-bottom: 2rem;
        }
}


`

export const BoxMensange = styled.input`
    width: 500px;
    height: 6rem;
    margin: 10px;
    border-radius: 5px;
    border: none;
    background: rgba(225, 225, 230);
    padding-left: 1rem;
    font-size: 1.1rem;
    
    transition: 0.2s;

    &:hover{
    
        filter: brightness(0.8);
    }
    @media (min-width: 1077px) and (max-width: 1300px){
        width: 400px;
    }
    
    @media (min-width: 300px) and (max-width: 720px){
     width: 300px;
    }
    
`

export const DadosContact = styled.input`
    width: 500px;
    height: 3rem;
    margin: 10px;
    border-radius: 5px;
    border: none;
    background: rgba(225, 225, 230);
    padding: 1rem;s
    font-size: 1.1rem;

    transition: 0.2s;

    &:hover{
        
        filter: brightness(0.9);
    }
    
    @media (min-width: 1077px) and (max-width: 1300px){
        width: 400px;
    }
    @media (min-width: 300px) and (max-width: 720px){
     width: 300px;
    }
    
 

`
export const SubmitButton = styled.button`
height: 4rem;
border: none;
border-radius: 10px;
color:${p=>p.theme.colors.blue700};
font-size: 1.2rem;
font-weight: 400;
background: ${p=>p.theme.colors.yellow300};
margin: 1rem 0.5rem;
transition: 0.4s;
&:hover{
    cursor: pointer;
    filter: brightness(0.8);
    
}

`
