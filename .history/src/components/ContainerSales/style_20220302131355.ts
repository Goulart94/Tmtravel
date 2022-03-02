import styled from "styled-components";

export const Container = styled.section`

width: 100%;
height: 500px;
display: flex;
justify-content: space-between;

padding: 4rem;

`
export const ContentSale = styled.div`

width: 400px;
height: 400px;
border: solid 1px ${p=>p.theme.colors.cyan500};
`