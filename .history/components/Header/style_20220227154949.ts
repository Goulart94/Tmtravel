import styled from "styled-components";


export const MenuDiv = styled.div`

margin: 2rem 3rem 0;
transition: 0.4s;

.icon{
   font-size: 2.5rem;
   color: ${p => p.theme.colors.gray300};
}



`



export const HeaderContainer = styled.header`

height: 10rem;
background: ${p=>p.theme.colors.blue700};

display: flex;
align-items: center;
justify-content: space-between;

.iconClose{
   font-size: 2.2rem;
   color: ${p => p.theme.colors.gray300};
   margin-left: 3rem;
  

}


`