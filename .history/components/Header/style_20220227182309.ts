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
display:flex;

opacity:0;


`
export const Conatainer = styled.div`

   align-items:center;
   width:100%;
   height: 100%;
   


  
`
export const ContentImg = styled.div`

text-align: center;

   
.iconClose{
   
  
   font-size: 2.2rem;
   color: ${p => p.theme.colors.gray300};
   margin-left: 3rem;
   margin-top: 2.5rem;
   padding: 3rem 0 auto;

  
  

}
 
img{
    width: 170px;
    position:relative;
    bottom:10px;
    z-index:1;
}

`






