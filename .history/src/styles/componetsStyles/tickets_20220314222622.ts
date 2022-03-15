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

.ticket{
    display: flex;
    height: 318px;
    background-color: ${p =>p.theme.colors.white100};
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    position: relative;
    top: 36px;
    box-shadow: 0px 0px 10px rgb(0 0 0 / 70%);
}
}

.ticketFly{
    width: 705px;
    margin-left: 1px;
    height: 318px;
    background: ${p=> p.theme.colors.gray100};
    border-radius: 10px;
    position: relative;
    
}
.ticketPrice{
    width: 192px;
    
    margin-right: 1px;
    height: 318px;
    background: ${p=> p.theme.colors.gray100};
    border-radius: 10px;
    
    
}


`
