import { Carousel } from "react-bootstrap";
import {  SliderOne, Sliderthree, Slidertwo } from "./style"
import slider1 from '../../../public/images/slider1.jpeg';


export const SlederShow = () => (
    <Carousel>
  <Carousel.Item>
    <SliderOne>

    </SliderOne>
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <Slidertwo>
      
    </Slidertwo>

   
  </Carousel.Item>
  <Carousel.Item>
    <Sliderthree>

    </Sliderthree>

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
);