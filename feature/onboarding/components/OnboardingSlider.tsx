import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import type { SliderPropsType } from '../types/SliderPropsType';
import styled from 'styled-components';

const OnboardingSlider = ({ children, className }: SliderPropsType) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
    };

    return (
        <SliderWrapper className={className}>
            <Slider {...settings}>{children}</Slider>
        </SliderWrapper>
    );
};

export default OnboardingSlider;

const SliderWrapper = styled.section`
    position: relative;
    margin-bottom: 80px;

    & .slick-dots {
        position: static;
        bottom: 0px;
    }
`;
