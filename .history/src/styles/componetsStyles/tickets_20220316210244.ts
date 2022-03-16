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
    display: grid;

    grid-template-areas:{
      ' ContentTickets ContentTickets ContentTickets ContentTickets ContentTickets ContentTickets '
      
    }
    
 `
export const ContentTickets = styled.div`
width: 900px;
height: 354px;
margin-top: 10px;
margin-bottom: 50px;
background-color: ${p=>p.theme.colors.yellow300};
border-radius: 10px;
float: right;
box-shadow: 0px 0px 10px rgb(31, 17, 100, 80%);
grid-area: ContentTickets;
transition: 0.3s;



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
width: 100px;
height: 700px;
background: black;
grid-area: ContentChange ;


`
