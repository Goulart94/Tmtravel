import { Carousel } from "react-bootstrap";
import {  ContainerTextOne, ContainerTextTwo, SliderOne, Sliderthree, Slidertwo } from "./style"



export const SlederShow = () => (
  

  <Carousel >
  <Carousel.Item>
    <SliderOne>
      <ContainerTextOne>
        <p>Colecione momentos, não coisas.</p>
      </ContainerTextOne>
      <ContainerTextTwo>
        <p>Uma vez por ano, vá a algum lugar que você nunca esteve antes.</p>
      </ContainerTextTwo>
      <Carousel.Caption></Carousel.Caption>
           
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
      <Carousel.Caption></Carousel.Caption>
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
      <Carousel.Caption></Carousel.Caption>
    </Sliderthree>
  </Carousel.Item>
</Carousel>

);