import styled from "styled-components";


export const Title = styled.h1`
margin-top: 2rem;
text-align: center;
font-size: 4rem;
color: ${p=>p.theme.colors.blue700};
font-weight: 700;
span{
    color: ${p => p.theme.colors.yellow300};
}
`

export const Container = styled.section`

width: 100%;

display: flex;
justify-content: space-between;
align-items: center;


h1{
    display: block;
}

`
export const ContentSale = styled.div`

width:450px;
height: 450px;
background: ${p=>p.theme.colors.gray100};
border-radius: 5px;
margin:none;
transition: 0.6S;
        &:hover{
            cursor:pointer;
            transform: scale(1.05);
        }

div{
    width: 100%;
    height: 250px;
    img{
        width:100%;
        height: 250px;
        margin: none;
        border-radius: 5px;
        
    }
}

h1{
    padding-left: 1rem;
    padding-top: 1rem;
    font-size: 2.2rem;
    color: ${p=>p.theme.colors.blue700};
}
h3{
    margin-top: 1rem;
    padding-left: 1rem;
    font-size: 1.2rem;
    color: ${p=>p.theme.colors.blue700}

    
    
}

`
export const Button = styled.button`
width: 200px;
height: 4rem;
border: none;
border-radius: 10px;
color:${p=>p.theme.colors.blue700};
font-size: 1.5rem;
font-weight: 700;
background: ${p=>p.theme.colors.yellow300};
position:relative;
left: 8rem;
top: 1rem;

&:hover{
    filter: brightness(0.8);
    
}


`