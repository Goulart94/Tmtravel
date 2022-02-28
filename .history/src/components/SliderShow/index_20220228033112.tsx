import { Carousel } from "react-bootstrap";
import {  ContainerTextOne, SliderOne, Sliderthree, Slidertwo } from "./style"



export const SlederShow = () => (
    <Carousel>
  <Carousel.Item>
    <SliderOne>
      <ContainerTextOne>
        <p>Colecione momentos, não coisas.</p>
      </ContainerTextOne>
           
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