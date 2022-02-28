import { Carousel } from "react-bootstrap";
import {  ContainerText, SliderOne, Sliderthree, Slidertwo } from "./style"



export const SlederShow = () => (
    <Carousel>
  <Carousel.Item>
    <SliderOne>
      <ContainerText>
        <p>Colecione momentos, não coisas.</p>
      </ContainerText>
           
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