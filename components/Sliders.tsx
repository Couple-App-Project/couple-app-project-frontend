import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import type { SliderPropsType } from 'types/SliderPropsType';
import styled from 'styled-components';

const Sliders = ({ children, className, dots, autoplay }: SliderPropsType) => {
    const settings = {
        dots: dots ? true : false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: autoplay ? true : false,
        autoplaySpeed: 3000,
        arrows: false,
    };

    return (
        <SliderWrapper className={className}>
            <Slider {...settings}>{children}</Slider>
        </SliderWrapper>
    );
};

export default Sliders;

const SliderWrapper = styled.section`
    position: relative;
    margin-bottom: 80px;

    /* & .slick-dots {
        position: static;
        bottom: 0px;
    } */
`;
