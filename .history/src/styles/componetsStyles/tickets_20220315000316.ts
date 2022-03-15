import styled from "styled-components";

export const ContainerImage =styled.div`
width:100%;
height: 370px;

background-image:  url('../../../images/praiafamilia.jpg');
background-repeat: no-repeat;
background-repeat: no-repeat;
background-size: cover;
background-position: 5% 34%;
`


export const ContainerTickets = styled.div`
    max-width: 1320px;
    margin: 0 auto;
    padding: 0 2rem;
    
 `
export const ContentTickets = styled.div`
width: 900px;
height: 354px;
margin-top: 30px;
background-color: ${p=>p.theme.colors.yellow300};
border-radius: 10px;
float: right;

.ticket{
    display: flex;
    height: 318px;
    background-color: ${p =>p.theme.colors.white100};
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    position: relative;
    top: 36px;
    box-shadow: 0px 0px 10px ;
}
}

.ticketFly{
    width: 705px;
    margin-bottom: 2px;
    height: 318px;
    background: ${p=> p.theme.colors.gray100};
    border-radius: 10px;
    position: relative;
    
}
.ticketPrice{
    width: 195px;
    border-left: 2px dashed ${p=> p.theme.colors.gray300};
    margin-bottom: 2px;
    height: 318px;
    background: ${p=> p.theme.colors.gray100};
    border-radius: 10px;
    
    
}


`
