import styled from "styled-components";

export const FooterContainer = styled.footer`
width: 100%;
background: ${p=>p.theme.colors.blue700};
display: flex;
align-items: center;
justify-content: space-between;

h1{
    display: block;
    width:100%;
}

`
export const Content = styled.div`
margin: 4rem;
width: 720px;
height: 250px;
background: white;

`