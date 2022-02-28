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
height:auto;
background: ${p=>p.theme.colors.blue700};
animation: ${MenuAnimetion} 1.2s forwards;
animation-play-state: running;
display:flex;

opacity:0;
.iconClose{
   
  
   font-size: 2.5rem;
   color: ${p => p.theme.colors.gray300};
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
    width: 170px;
    position:relative;
    bottom:5px;
    
    
}

`
export const ContentNav = styled.div`

width: 100%;
text-align: center;

nav{
    color: ${p=> p.theme.colors.gray100};
    a{
             display: inline-block;
             padding: 0 0.5rem;
             line-height: 5rem;
             font-size:1.5rem;
             transition: 0.2s;

             & + a{
                 margin-left: 2rem;
             }
        &:hover{
            filter: brightness(0.6);
            font-weight: 600;

        }
        &.active{
            filter: brightness(0.8);
            
            font-weight: 600;

        }
             
        &.active::after{
            content: '';
                 height: 3px;
                 border-radius: 3px 3px 0 0;
                 background: var(--yellow-500);
                 width: 100%;
                 position: absolute;
                 bottom: 1px;
                 left: 0;

             }
    }
  

}




`








