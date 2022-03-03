import styled from "styled-components";

export const FooterContainer = styled.footer`
width: 100%;
background: ${p=>p.theme.colors.blue700};



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
margin: 0 4rem 2rem 4rem;
width: 720px;
height: 250px;
padding-left: 4rem;

h1{
    color: ${p=>p.theme.colors.white100};
    font-size: 3rem;
}



`