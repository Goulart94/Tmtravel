import styled from "styled-components";

export const Container = styled.section`

width: 100%;

display: flex;
justify-content: space-between;

padding: 4rem;

`
export const ContentSale = styled.div`

width:450px;
height: 450px;
background: ${p=>p.theme.colors.gray300}
border-radius: 5px;
margin:none;

div{
    width: 100%;
    

    img{
        width:100%;
        border-bottom: solid 1px ${p=>p.theme.colors.blue700};
        margin: none;
        border-radius: 5px;
        
    }
}
`