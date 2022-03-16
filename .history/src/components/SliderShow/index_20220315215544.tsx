import { Carousel } from "react-bootstrap";
import {  ContainerTextOne, ContainerTextTwo, SliderOne, Sliderthree, Slidertwo, Container } from "./style"



export const SlederShow = () => (
  
  <Container >
  <Carousel className="carrosel">
  <Carousel.Item>
    <SliderOne>
      
      
           
    </SliderOne> 
  </Carousel.Item>
  <Carousel.Item>
    <Slidertwo>
      <ContainerTextOne>
        <p>As melhores histórias são encontradas entre as páginas de um passaporte…</p>
      </ContainerTextOne>
      <ContainerTextTwo>
        <p>O objetivo é morrer com memórias, não sonhos.</p>
      </ContainerTextTwo>
      
    </Slidertwo>
  </Carousel.Item>
  <Carousel.Item>
    <Sliderthree>
      <ContainerTextOne>
        <p>Depois de ver o mundo, você nunca se sentirá completamente em casa novamente.</p>
      </ContainerTextOne>
      <ContainerTextTwo>
        <p>Os lugares que você vai se transformam em uma parte de você, de alguma forma.</p>
      </ContainerTextTwo>

    </Sliderthree>
  </Carousel.Item>
</Carousel>
</Container>
);