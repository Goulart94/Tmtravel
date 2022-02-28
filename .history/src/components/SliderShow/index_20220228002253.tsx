import Carousel from 'styled-components-carousel';

export const SlederShow = () => (
    <Carousel
        center
        infinite
        showArrows
        
        slidesToShow={3}
    >
        <div>
            
        </div>
        <div>
            <span>2</span>
        </div>
        <div>
            <span>3</span>
        </div>
    </Carousel>
);