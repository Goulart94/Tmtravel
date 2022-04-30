
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
    margin-bottom:10px;
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
    @media (max-width:1300px) { 
  
  
      flex-direction: column;
    }


  
 `
export const ContentTickets = styled.div`


margin: 20px 10px 50px 10px;
background-color: ${p=>p.theme.colors.yellow300};
border-radius: 10px;
box-shadow: 0px 0px 10px rgb(31, 17, 100, 80%);
transition: 0.3s;
@media (max-width:520px) {
    width: 350px;

    .details{
    
    
    height: auto;
    border-bottom: 1px solid ${p=> p.theme.colors.gray300};
    justify-content: space-between;
    display: flex;
    
    

    .ContentCenter{
    
    display: flex;
    flex-direction: column;
   
    max-width: 160px;
    
    
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
        max-width: 60px;
    }
    .mobile{
        color: red;
    }
    div{
        color: ${p => p.theme.colors.gray700};
        padding: 0.5rem;
        margin: 0 auto;
        text-align: center;
        
        h2{
            color: ${p=>p.theme.colors.blue700};
            font-weight: 700;
            font-size: 1.2rem;
        }
        span{
            font-size: 0.75rem;
            font-weight: 400;
        }
       .iconSuitCase{
        position: relative;
        top: 15px;
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
  .ticketPrice{
    display: flex;
    flex-direction: column;

  }

}

 }
@media (min-width:520px) and (max-width:780px) { 
  width: 400px;
    
    
    .details{
    
    
    height: auto;
    border-bottom: 1px solid ${p=> p.theme.colors.gray300};
    justify-content: space-between;
    display: flex;
    
    

    .ContentCenter{
    
    display: flex;
    flex-direction: column;
   
    max-width: 160px;
    
    
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
        max-width: 60px;
    }
    div{
        color: ${p => p.theme.colors.gray700};
        padding: 0.5rem;
        text-align: center;
        
        h2{
            color: ${p=>p.theme.colors.blue700};
            font-weight: 700;
            font-size: 1.2rem;
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
  .ticketPrice{
    display: flex;
    flex-direction: column;

  }
  .mobile{
        color: red;
    }

}

}



@media (max-width:1300px) { 
  
    .ticket{
        flex-direction: column;

    }
    .ticketPrice{
    display: flex;
    justify-content: space-between;
    border-top: 2px dashed ${p=> p.theme.colors.gray300};
    background: ${p=> p.theme.colors.white100};
    border-radius: 10px;    
    color: ${p => p.theme.colors.gray700};
    padding: 2rem 0.5rem;
    Button{
        float: right;
    }
    div{
        margin-bottom: 10px;
    }
    span{
        font-size: 0.75rem;  
    }
    h2{
        color: ${p=>p.theme.colors.blue700};
        font-weight: 700;
        
        
        font-size: 2rem;
        span{
            font-size: 0.9rem;
            
        }
    }
    
}
 
   
}




&:hover{
    box-shadow: 0px 0px 10px rgb(31, 17, 100);
}

.ticket{
    display: flex;
    background-color: ${p =>p.theme.colors.yellow300};
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    position: relative;
    top: 36px;

  
}



.ticketFly{
    width: 100%;
    background: ${p=> p.theme.colors.white100};
    border-radius: 10px;
    
    display: inline-block;
    align-items: center;
  
  
    
}
@media (min-width:1300px){

    .ticketPrice{

    
    border-left: 2px dashed ${p=> p.theme.colors.gray300};
    max-width: 195px;
    height: 318px;
    background: ${p=> p.theme.colors.white100};
    border-radius: 10px;
    
    
    color: ${p => p.theme.colors.gray700};
    padding: 1rem 0.5rem;
  
    span{
        font-size: 0.75rem;
        margin-bottom: 20px;  
    }
    h2{
        color: ${p=>p.theme.colors.blue700};
        font-weight: 700;
        margin-top: 2rem;
        
        font-size: 2rem;
        span{
            font-size: 0.9rem;
        }
    }
    
   }
}
@media (min-width:780px) { 
    .details{
    
    padding: 0 2rem;
    height: 142px;
    border-bottom: 1px solid ${p=> p.theme.colors.gray300};
    
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
}



`
export const ContentChange = styled.div`
max-width: 300px;
height: 1058px;
@media (min-width: 1300px){
  position: relative;
  bottom: 18px;
}

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
    height: 100%;
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

@media (max-width:1300px){
   max-width: 661px;
   height: auto;
   margin-top: 20px;
   
}
@media (max-width:780px){
   max-width: 370px;
   height: auto;
   margin-top: 20px;
   
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
