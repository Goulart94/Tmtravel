import styled, { keyframes } from "styled-components";


export const MenuDiv = styled.div`

margin: 2rem 3rem 0;


.icon{
   font-size: 2.5rem;
   color: ${p => p.theme.colors.gray300};
 
}



`
export const MenuAnimetion = keyframes`

from {
    top: 0;
}
to {
    bottom: 10rem;
}
`



export const HeaderContainer = styled.header`
height: 10rem;
background: ${p=>p.theme.colors.blue700};
animation: ${MenuAnimetion} 2s linear ;
display: flex;
align-items: center;
justify-content: space-between;

.iconClose{
   font-size: 2.2rem;
   color: ${p => p.theme.colors.gray300};
   margin-left: 3rem;
  

}
`





