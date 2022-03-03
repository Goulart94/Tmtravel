import styled from "styled-components";

export const FooterContainer = styled.footer`
width: 100%;
background: ${p=>p.theme.colors.blue700};
display: flex;
justify-content: space-between;

h1{
    display: inline-block;
    width: 100%;
    margin: 2rem;
    
}

`
export const Content = styled.div`
margin: 2rem;
width: 720px;
height: 250px;
background: white;

`