import { Carousel } from "react-bootstrap";
import {  SliderOne, Sliderthree, Slidertwo } from "./style"
import slider1 from '../../../public/images/slider1.jpeg';


export const SlederShow = () => (
    <Carousel>
  <Carousel.Item>
    <SliderOne>
           <p>ola</p>
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