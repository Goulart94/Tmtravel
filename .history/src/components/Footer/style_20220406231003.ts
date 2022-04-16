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
    margin-top: 1rem;
    
}

`
export const Container = styled.section`
display: flex;
justify-content: space-between;

@media (max-width: 720px){
    justify-content: start;
    flex-direction: column;
 
}

`
export const Content = styled.div`
margin: 1rem 4rem 2rem 4rem;
max-width: 720px;


h1{
    color: ${p=>p.theme.colors.white100};
    font-weight: 900;
    margin-bottom: 2rem;
 

}
p{
    color: ${p=>p.theme.colors.white100};
    line-height: 1.5rem;
    font-size: 1rem;
    
}
div{
    
  
    
    span{
        margin-right: 2rem;
        font-size: 3rem;
        color: ${p=>p.theme.colors.white100};
        transition: 0.3s;

        
    @media (max-width: 720px){
    font-size: 1.5rem;
    }

       &:hover{
            color: ${p=>p.theme.colors.yellow300};
        }

    } 
}


`