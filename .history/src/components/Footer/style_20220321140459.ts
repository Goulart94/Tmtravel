import styled from "styled-components";

export const FooterContainer = styled.footer`
width: 100%;
background: ${p=>p.theme.colors.blue700};
margin-top: 4rem;




.title{
    text-align: center;
    font-size: 2.5rem;
    font-weight: 700;
    color: ${p=>p.theme.colors.yellow300};
    margin-top: 2rem;
    
}

`
export const Container = styled.section`
display: flex;
justify-content: space-between;

`
export const Content = styled.div`
margin: 3rem 4rem 1rem 4rem;
max-width: 720px;
height: 250px;
padding-left: 4rem;

h1{
    color: ${p=>p.theme.colors.white100};
    font-size: 3rem;
    font-weight: 900;
    margin-bottom: 2rem;
}
p{
    color: ${p=>p.theme.colors.white100};
    line-height: 1.5rem;
    font-size: 1rem;
    
}
div{
    
  text-align: center;
    
    span{
        
        font-size: 3rem;
        color: ${p=>p.theme.colors.white100};
        transition: 0.3s;

       &:hover{
            color: ${p=>p.theme.colors.yellow300};
        }

    } 
}


`