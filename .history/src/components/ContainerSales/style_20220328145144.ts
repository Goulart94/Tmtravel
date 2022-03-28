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
background: ${p=>p.theme.colors.gray100};
border-radius: 15px;
margin:none;
transition: 0.2S;
        &:hover{
            cursor:pointer;
         
            border: 3px solid ${p => p.theme.colors.yellow300};
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


h1{
    padding-left: 1rem;
    padding-top: 1rem;
    font-size: 1.8rem;
    color: ${p=>p.theme.colors.gray700};
}
h3{
    margin-top: 1rem;
    padding-left: 1rem;
    font-size: 1.2rem;
    color: ${p=>p.theme.colors.gray700};

    span{
        
        font-size: 0.7rem;
    }
}
    
    


`
export const Button = styled.button`

height: 4rem;
border: none;
border-radius: 10px;
color:${p=>p.theme.colors.blue700};
font-size: 1.5rem;
font-weight: 700;
background: ${p=>p.theme.colors.yellow300};
margin: 1rem 4rem;
transition: 0.4s;
&:hover{
    filter: brightness(0.8);
    
}


`