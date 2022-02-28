import { Carousel } from "react-bootstrap";
import {  ContainerTextOne, ContainerTextTwo, SliderOne, Sliderthree, Slidertwo } from "./style"



export const SlederShow = () => (
    <Carousel>
  <Carousel.Item>
    <SliderOne>
      <ContainerTextOne>
        <p>Colecione momentos, não coisas.</p>
      </ContainerTextOne>
      <ContainerTextTwo>
        <p>Uma vez por ano, vá a algum lugar que você nunca esteve antes.</p>
      </ContainerTextTwo>
           
    </SliderOne> 
  </Carousel.Item>
  <Carousel.Item>
    <Slidertwo>
      
    </Slidertwo>
  </Carousel.Item>
  <Carousel.Item>
    <Sliderthree>

    </Sliderthree>
  </Carousel.Item>
</Carousel>
);