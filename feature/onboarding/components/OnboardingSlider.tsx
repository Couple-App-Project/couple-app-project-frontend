import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import type { SliderProps } from '../types/sliderPropsType';
import styled from 'styled-components';

const OnboardingSlider = ({ children, className }: SliderProps) => {
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
    };

    return (
        <SliderWrap className={className}>
            <Slider {...settings}>{children}</Slider>
        </SliderWrap>
    );
};

export default OnboardingSlider;

const SliderWrap = styled.section`
    position: relative;
    margin-bottom: 80px;

    & .slick-dots {
        position: static;
        bottom: 0px;
    }
`;
