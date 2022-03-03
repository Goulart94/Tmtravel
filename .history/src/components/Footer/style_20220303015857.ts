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
margin: 2rem;
width: 720px;
height: 250px;
background: white;

h1{

}

`