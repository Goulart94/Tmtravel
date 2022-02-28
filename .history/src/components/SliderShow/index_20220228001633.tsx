import Carousel from 'styled-components-carousel';

export const Carousel = () => (
    <Carousel
        center
        infinite
        showArrows
        showIndicator
        slidesToShow={3}
    >
        <div>
            <span>1</span>
        </div>
        <div>
            <span>2</span>
        </div>
        <div>
            <span>3</span>
        </div>
    </Carousel>
);