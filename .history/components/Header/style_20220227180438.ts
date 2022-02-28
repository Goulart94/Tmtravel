import styled, { keyframes } from "styled-components";


export const MenuDiv = styled.div`

margin: 2rem 3rem 0;


.icon{
   font-size: 2.5rem;
   color: ${p => p.theme.colors.gray300};
 
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
height: 10rem;
background: ${p=>p.theme.colors.blue700};
animation: ${MenuAnimetion} 1.2s forwards;
animation-play-state: running;

opacity:0;


`
export const Conatainer = styled.div`

  
   width:100%;
   height: 100%;
   
   
.iconClose{
   position: relative;
   top:3rem; 
   font-size: 2.2rem;
   color: ${p => p.theme.colors.gray300};
   margin-left: 3rem;
   
  

}

  
`
export const ContentImg = styled.div`
width: auto;
text-align: center;
    


img{
    width: 170px;
    
    
    }
`






