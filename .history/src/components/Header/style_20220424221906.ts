
import styled, { keyframes } from "styled-components";


export const MenuDiv = styled.div`

width:100%;
height: 6.5rem;
display:flex;
position: fixed;
border-bottom: solid 3px ${p=>p.theme.colors.yellow300};
z-index: 3;
background: ${p=>p.theme.colors.blue700};


div{
    
    position:relative;
    float: left;
    flex-wrap: wrap;

}
label{
    
       
    .icon{
   margin-left: 2rem;
   margin-top: 2rem;
   font-size: 2rem;
   color: ${p => p.theme.colors.yellow300};
   position:relative;
   bottom:-5px;
   transition: 0.2s;
   }

 
  
    font-size: 1.2rem;
    color: ${p => p.theme.colors.yellow300};
    margin-top: 1rem;
    margin-left: 2rem;
    padding-right: 1rem;
    transition: 0.2s;

    &:hover{
       cursor: pointer;
       filter: brightness(0.6);
      
    }
}

.Container{
    width:100%;
    text-align: center;
    img{
    width: 110px;
    position:relative;
    right: 2.5rem;
    top: 10px;
    
    } 
}
@media (min-width: 300px) and (max-width: 720px){

   .Container{
    width:100%;
    text-align: center;
    display: flex;
    justify-content: space-between;
    img{
    width: 90px;
    position: fixed;
    right: 0;
    top: 18px;
    } 
   }
   label{
    
       
    .icon{
   margin-left: 0;
   margin-top: 2.4rem;
   font-size: 2rem;
   color: ${p => p.theme.colors.yellow300};
   position:relative;
   bottom:-5px;
   transition: 0.2s;
   }

 
  
    font-size: 1.2rem;
    color: ${p => p.theme.colors.yellow300};
    margin-top: 1rem;
    margin-left: 2rem;
    padding-right: 1rem;
    transition: 0.2s;

    &:hover{
       cursor: pointer;
       filter: brightness(0.6);
      
    }
}
}


`
export const MenuAnimetion = keyframes`

from{
    opacity: 0;
}  
to {
     
      opacity: 1;
    
  }

`



export const HeaderContainer = styled.header`
width: 100%;
height: auto;
background: ${p=>p.theme.colors.blue700};
animation: ${MenuAnimetion} 1.2s forwards;
animation-play-state: running;
display:flex;
position: fixed;
z-index: 3;
border-bottom: solid 3px ${p=>p.theme.colors.yellow300};
.iconClose{
   font-size: 1.8rem;
   color: ${p => p.theme.colors.yellow300};
   position:relative;
   margin-left: 3rem;
   margin-top: 2.5rem;
   float: left;
   

   &:hover{
       cursor: pointer;
       filter: brightness(0.6);
      
   }
    
  

}
@media (min-width: 300px) and (max-width: 720px){
    width: 50%;
    height: 100vh;
    
    .iconClose{
   margin-left: 1rem;

   }

}


`
export const Conatainer = styled.div`

   align-items:center;
   width:100%;
   height: 100%;
  
`
export const ContentImg = styled.div`

text-align: center;
 
img{
    width: 100px;
    position:relative;
    top: 9px;
    right: 30px;
  
    
}
@media (min-width: 300px) and (max-width: 720px){
  img{
    display: none;
  }
}

`
export const ContentNav = styled.div`




nav{
    width: 100%;
    color: ${p=> p.theme.colors.white100};
    
    text-align: center;
    
    a{
        
        display: inline-block;
        position: relative;
        height: 4rem;
        padding: 0 0.5rem;
        line-height: 5rem;
        font-size:1.1rem;

        .iconBed{
            position: relative;
            top: 5px;
            font-size: 1.4rem;

        }

        & + a{
                margin-left: 2rem;

             }
        &:hover{
            filter: brightness(0.8);
            cursor: pointer;
            
        }
        &.active{
            color: ${p=>p.theme.colors.yellow300};
            
        }
             
    }

}
@media (min-width: 300px) and (max-width: 720px){

    nav{
    width: 100%;
    color: ${p=> p.theme.colors.white100};
    display: flex;
    flex-direction: column;
    text-align: center;
    
    a{
        margin: 0;
        display: block;
        position: none;
        height: 4rem;
        padding:0;
        line-height: 5rem;
        font-size:1.1rem;

        .iconBed{
            position: relative;
            top: 5px;
            font-size: 1.4rem;

        }

        & + a{
                margin-left: 2rem;

             }
        &:hover{
            filter: brightness(0.8);
            cursor: pointer;
            
        }
        &.active{
            color: ${p=>p.theme.colors.yellow300};
            
        }
             
    }

}
}




`








