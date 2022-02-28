import { Carousel } from "react-bootstrap";
import {  ContainerText, SliderOne, Sliderthree, Slidertwo } from "./style"
import slider1 from '../../../public/images/slider1.jpeg';
import { ContainerFont } from "../../pages/_app";


export const SlederShow = () => (
    <Carousel>
  <Carousel.Item>
    <SliderOne>
      <ContainerText>
        <p>Ola</p>
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