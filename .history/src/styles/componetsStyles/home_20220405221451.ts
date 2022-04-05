import styled from "styled-components";

export const ContainerSlider = styled.div`
width: 100%;
height: 600px;
border-bottom: 2px solid ${p => p.theme.colors.yellow300};
@media (max-width: 420px){
      
      height: 400px;


}
`