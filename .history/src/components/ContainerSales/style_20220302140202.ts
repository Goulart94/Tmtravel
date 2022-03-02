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
border: solid 1px ${p=>p.theme.colors.cyan500};

div{
    width: 100%;
    height: 300px;

    img{
        width:450px;
        
    }
}
`