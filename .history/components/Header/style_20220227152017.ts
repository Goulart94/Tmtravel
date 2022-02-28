import styled from "styled-components";


export const MenuDiv = styled.div`

margin: 2rem 3rem 0;

.icon{
   font-size: 2.5rem;
   color: ${p => p.theme.colors.gray300};
}



`



export const HeaderContainer = styled.header`

height: 7rem;
background: ${p=>p.theme.colors.cyan500};

display: flex;
align-items: center;
justify-content: space-between;

.icon{
   font-size: 1.5rem;
   color: #FFF;

}


`