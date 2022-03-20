
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
    display: inline-block;
    align-items: center;
  
    
}
.ticketPrice{
    width: 195px;
    border-left: 2px dashed ${p=> p.theme.colors.gray300};
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
    flex-wrap: nowrap;
    padding: 1.9rem 0;
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
height: 1567px;
margin-top: -29px;
margin-right: 20px;
color:${p=>p.theme.colors.yellow300};
background: ${p => p.theme.colors.blue700};
border : 1px solid ${p => p.theme.colors.blue700};
border-radius: 10px;
box-shadow: 0px 0px 10px rgb(31, 17, 100, 80%);

h2{
    text-align: center;
    margin-bottom: 20px;
    font-weight:700;
    
    
}
.contentCoin{
    
 
    align-items: center;
    text-align:center;
    


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

    &:hover{
        cursor: pointer;
        box-shadow: 0px 0px 10px rgb(31, 17, 100, 80%);
    }
    
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


.content{
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
width: 175px;
height: 3rem;
border-radius: 20px;
background: ${p =>p.theme.colors.yellow300};
border: none;
margin-top: 2rem;
color: ${p=>p.theme.colors.gray700};
font-weight: 700;
transition: 0.4s;

&:hover{
    cursor: pointer;
    filter: brightness(0.8);
}



`
