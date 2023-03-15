import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import type { SliderPropsType } from 'types/SliderPropsType';
import styled from 'styled-components';

const Sliders = ({
    children,
    className,
    dots,
    autoplay,
    margin,
}: SliderPropsType) => {
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
        <SliderWrapper className={className} margin={margin}>
            <Slider {...settings}>{children}</Slider>
        </SliderWrapper>
    );
};

export default Sliders;

const SliderWrapper = styled.section<{ margin: string }>`
    position: relative;
    margin-bottom: ${(props) => props.margin};

    /* & .slick-dots {
        position: static;
        bottom: 0px;
    } */
`;
