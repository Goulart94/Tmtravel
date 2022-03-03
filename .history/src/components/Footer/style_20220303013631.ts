import styled from "styled-components";

export const FooterContainer = styled.footer`
width: 100%;
height:500px;
background: ${p=>p.theme.colors.blue700};
display: flex;
justify-content: space-between;

h1{
    display: inline-block;
    
}

`
export const Content = styled.div`
margin: 2rem;
width: 720px;
height: 250px;
background: white;

`