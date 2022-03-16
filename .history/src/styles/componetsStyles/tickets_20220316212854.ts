import styled from "styled-components";

export const ContainerImage =styled.div`
width:100%;
height: 330px;

background-image:  url('../../../images/familiapraia2.jpg');
background-repeat: no-repeat;
background-repeat: no-repeat;
background-size: cover;
background-position: 5% 37%;
`


export const ContainerTickets = styled.div`
    max-width: 1320px;
    margin: 0 auto;
    padding: 0 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    
   .divContainer{
       width: 950px;
       padding: 0 1rem;
   }
 `
export const ContentTickets = styled.div`
width: 900px;
height: 354px;
margin: 20px 10px 50px 10px;
background-color: ${p=>p.theme.colors.yellow300};
border-radius: 10px;

box-shadow: 0px 0px 10px rgb(31, 17, 100, 80%);

transition: 0.3s;
´


&:hover{
    box-shadow: 0px 0px 10px rgb(31, 17, 100);
}

.ticket{
    display: flex;
    height: 318px;
    background-color: ${p =>p.theme.colors.yellow300};
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    position: relative;
    top: 36px;
    
}
}

.ticketFly{
    width: 705px;
    height: 318px;
    background: ${p=> p.theme.colors.white100};
    border-radius: 10px;
    position: relative;
    
}
.ticketPrice{
    width: 195px;
    border-left: 2px dashed ${p=> p.theme.colors.gray300};
    height: 318px;
    background: ${p=> p.theme.colors.white100};
    border-radius: 10px;
    
    
}


`
export const ContentChange = styled.div`
width: 300px;
height: 1567px;
margin-top: -30px;
margin-right: 10px;
border : 1px solid ${p => p.theme.colors.blue700};
border-radius: 10px;




`
