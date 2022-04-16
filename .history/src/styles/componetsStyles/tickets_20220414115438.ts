
import styled from "styled-components";

export const ContainerImage =styled.div`
width:100%;
height: 350px;

background-image:  url('../../../images/familiapraia2.jpg');
background-repeat: no-repeat;
background-repeat: no-repeat;
background-size: cover;
background-position: 5% 40%;
border-bottom: 1px solid ${p=> p.theme.colors.yellow300};
`
export const Title = styled.h1`

    margin-top: 20px;
    text-align: center;
    font-size: 4rem;
    font-weight: 400;
    color: ${p=>p.theme.colors.blue700};

`

export const ContainerTickets = styled.div`
    
    
    max-width: 1320px;
    margin: 0 auto;
    padding: 0 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .title{
       
        text-align: center;
        font-size: 4rem;
        color: ${p=>p.theme.colors.blue700};
    }
   .divContainer{
       max-width: 950px;
       padding: 0 1rem;

   }
 `
export const ContentTickets = styled.div`

height: 354px;
margin: 20px 10px 50px 10px;
background-color: ${p=>p.theme.colors.yellow300};
border-radius: 10px;
box-shadow: 0px 0px 10px rgb(31, 17, 100, 80%);
transition: 0.3s;


@media (max-width:1300px) { 
     height: 500px;
    
    .ticket{
        flex-direction: column;

    }
 
   
}
@media (max-width:1300px) { 
     height: 500px;
    
     .ticketPrice{
        width: 100%;

    }
 
   
}


&:hover{
    box-shadow: 0px 0px 10px rgb(31, 17, 100);
}

.ticket{
    display: flex;
    max-width: 820px;
    background-color: ${p =>p.theme.colors.yellow300};
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    position: relative;
    top: 36px;

  
}



.ticketFly{
    width: 705px;
    height: 318px;
    background: ${p=> p.theme.colors.white100};
    border-radius: 10px;
    position: relative;
    display: inline-block;
    align-items: center;
  
  
    
}
.ticketPrice{
    
    border-left: 2px dashed ${p=> p.theme.colors.gray300};
    width: 195px;
    height: 318px;
    background: ${p=> p.theme.colors.white100};
    border-radius: 10px;
    
    
    color: ${p => p.theme.colors.gray700};
    padding: 2rem 0.5rem;
    span{
        font-size: 0.75rem;  
    }
    h2{
        color: ${p=>p.theme.colors.blue700};
        font-weight: 700;
        margin-top: 3rem;
        
        font-size: 2rem;
        span{
            font-size: 0.9rem;
        }
    }
    
}
.details{
    
    padding: 0 2rem;
    height: 159px;
    border-bottom: 1px solid ${p=> p.theme.colors.gray300};
    justify-content: space-between; 
    display: flex;
    flex-wrap: nowrap;
    

    .ContentCenter{
    
    display: flex;
    justify-content: space-between;
    flex-wrap: nowrap;
    padding: 1.1rem 0;
    }

    .airPoint{
    

    overflow: hidden;
    max-width: 90px;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 0.75rem;
    font-weight: 400;
    padding:0;
    letter-spacing: 0.03333em;
    }
    .suitcase{
        text-align: center;
        width: 100px;
    }
    div{
        color: ${p => p.theme.colors.gray700};
        padding: 2rem 1rem 0 1rem;
        
       
        h2{
            color: ${p=>p.theme.colors.blue700};
            font-weight: 700;
        }
        span{
            font-size: 0.75rem;
            font-weight: 400;
            
            
            
        }
        

       .iconSuitCase{
        position: relative;
        top: 5px;
        margin-bottom: 1rem;
        font-size: 1.5rem;
        
       }

        .iconsAirPlane{
            position: relative;
            top: 5px;
            margin-right: 0.8rem;
            font-size: 2rem;
            color: ${p => p.theme.colors.gray700};
        }
    }
}



`
export const ContentChange = styled.div`
width: 300px;
height: 1165px;
margin-top: -29px;
margin-right: 20px;
color:${p=>p.theme.colors.blue700};
background: ${p => p.theme.colors.blue700};
border : 1px solid ${p => p.theme.colors.blue700};
border-radius: 10px;
box-shadow: 0px 0px 10px rgb(31, 17, 100, 80%);
transition: 0.3s;

h2{
    text-align: center;
    margin-bottom: 20px;
    font-weight:700;
}
p{
    color:${p=>p.theme.colors.blue700};
    font-weight: 400;
}
div{
    align-items: center;
    text-align:center;
}
.content{
   padding-bottom: 2rem;
   margin-bottom: 3rem; 
   border-bottom: 1px solid ${p=>p.theme.colors.blue700};
}
.contentCoin{
    padding: 1rem;
    display: flex;
    
}

.Coin{
    
    width: 40%;
    height: 2rem;
    padding:4px;
    
    font-size: 1.2rem;
    margin-right: 30px;
    border-radius: 15px;
    text-align: center;
    background: ${p=>p.theme.colors.blue700};
    color: ${p=>p.theme.colors.yellow300};
    border: none;
    box-shadow: 0px 0px 10px rgb(31, 17, 100, 80%);
   
    
}
.currencyValue{
    width: 40%;
    padding:4px ;
    font-size: 1rem;
    height: 2rem;
    color: ${p=>p.theme.colors.gray900};
    border: 1px solid ${p=>p.theme.colors.blue700};
    border-radius: 15px;
    box-shadow: 0px 0px 10px rgb(31, 17, 100, 80%);
 
}


.container{
    width: 100%;
    height: 1531px;
    background: ${p=> p.theme.colors.white100};
    border-radius: 10px;
    position: relative; 
    top: 36px;
    padding: 1rem 1rem;
    display: block;
    align-items: center;
    
}

&:hover{
    box-shadow: 0px 0px 10px rgb(31, 17, 100);
}





`
export const Button = styled.button`

margin: 0 auto;
padding: 1rem 3rem;
border-radius: 20px;
background: ${p =>p.theme.colors.yellow300};
border: none;
margin-top: 1rem;
color: ${p=>p.theme.colors.gray700};
font-weight: 700;
transition: 0.4s;

&:hover{
    cursor: pointer;
    filter: brightness(0.8);
}



`
