import styled from "styled-components";


export const Title = styled.h1`
margin-top: 1.5rem;
text-align: center;
font-size: 4rem;
color: ${p=>p.theme.colors.blue700};
font-weight: 400;
span{
    color: ${p => p.theme.colors.yellow300};
}
`

export const Container = styled.section`

width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
flex-wrap: nowrap;
padding: 0rem 5rem 0rem 5rem;

@media (max-width: 1090px){
    
    flex-direction: column;
     
}


h1{
    display: block;
    
}

`
export const ContentSale = styled.div`
margin-top: 2rem;
margin-bottom: 4rem;
display: flex;
flex-direction: column;
width:400px;
height: 450px;
background: #F7F7F7;
border-radius: 15px;
margin:none;
transition: 0.3S;
box-shadow: 0px 0px 10px rgb(31, 17, 100, 80%);

@media (min-width: 1250px) and (max-width: 1400px){
    width: 350px;
}
@media (min-width: 1090px) and (max-width: 1250px){
    width: 300px;
}
@media (min-width: 620px) and (max-width: 1090px){
    width: 600px;
}


    
  
        &:hover{
            cursor:pointer;
            box-shadow: 0px 0px 10px rgb(31, 17, 100);
           
            img{
                
                transform: scale(1.1);
                transition: 0.5S;
                
            }
        }

div{
    width: 100%;
    height: 250px;
    img{
        width:100%;
        height: 250px;
        margin: none;
        border-radius: 10px;
        
        
    }
}


.title{
    padding-left: 1rem;
    padding-top: 1rem;
    font-size: 2rem;
    color: ${p=>p.theme.colors.blue700};
    font-weight: 400;
}

  

.price{
        margin-top: 1rem;
        padding-left: 1rem;
        font-size: 1.2rem;
        color: ${p=>p.theme.colors.gray700};
        font-size: 0.9rem;

        span{
            font-size: 2rem;
            color: ${p=>p.theme.colors.blue700};
        }
    }

    
    


`
export const Button = styled.button`

height: 4rem;
border: none;
border-radius: 10px;
color:${p=>p.theme.colors.blue700};
font-size: 1.5rem;
font-weight: 400;
background: ${p=>p.theme.colors.yellow300};
margin: 1rem 4rem;
transition: 0.4s;
&:hover{
    cursor: pointer;
    filter: brightness(0.8);
    
}


`