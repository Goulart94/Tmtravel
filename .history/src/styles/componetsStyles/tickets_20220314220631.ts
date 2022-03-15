import styled from "styled-components";

export const ContainerTickets = styled.div`
    max-width: 1320px;
    margin: 0 auto;
    padding: 0 2rem;
    margin-top: 10rem;
    height: 100vh ; 
 `
export const ContentTickets = styled.div`
width: 900px;
height: 354px;
background-color: ${p=>p.theme.colors.yellow300};
border-radius: 10px;

.ticketfly{
    width: 705px;
    height: 318px;
    background: ${p=> p.theme.colors.gray100};
    box-shadow: 0px 0px 8px rgb(0 0 0 / 140%);
    border-radius: 10px;
    position: relative;
    top: 33px;
}


`
