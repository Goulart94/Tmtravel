import styled, { keyframes } from "styled-components";


export const MenuDiv = styled.div`

width:100%;
height:8.5rem;
display:flex;
border-bottom: solid 2.5px ${p=>p.theme.colors.blue700};

.icon{
   margin-left: 2rem;
   margin-top: 3rem;
   font-size: 2rem;
   color: ${p => p.theme.colors.gray300};
   position:relative;
   bottom:7px;
 
}
span{
    font-size: 1.3rem;
    color: ${p => p.theme.colors.gray300};
    margin-top: 3rem;
    margin-left: 0.5rem;
    padding-right: 1rem;
    
    
}
div{
    width:100%;
    text-align: center;
    img{
    width: 200px;
    position:relative;
    bottom:5px;
    right: 2.5rem;
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
height: auto;
background: ${p=>p.theme.colors.blue700};
animation: ${MenuAnimetion} 1.2s forwards;
animation-play-state: running;
display:flex;


opacity:0;
border-bottom: solid 3px ${p=>p.theme.colors.yellow300};
.iconClose{
   
  
   font-size: 2.5rem;
   color: ${p => p.theme.colors.yellow300};
   position:relative;
   margin-left: 3rem;
   margin-top: 2.5rem;
  

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
    width: 200px;
    position:relative;
    bottom:5px;
}

`
export const ContentNav = styled.div`

width: 100%;
text-align: center;

nav{
    width: 100%;
    color: ${p=> p.theme.colors.white100};
    
    a{
        display: inline-block;
        position: relative;
        height: 4rem;
        padding: 0 0.5rem;
        line-height: 5rem;
        font-size:1.4rem;

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




`








