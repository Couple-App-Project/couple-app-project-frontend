import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';
import type { SliderPropsType } from 'types/SliderPropsType';

const Sliders = ({
    children,
    className,
    dots,
    autoplay,
    margin,
}: SliderPropsType) => {
    const [activeSlider, setActiveSlideer] = useState(1);

    /**
     * option
     */
    const settings = {
        dots: dots ? true : false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: autoplay ? true : false,
        autoplaySpeed: 3000,
        arrows: false,
        afterChange: dots ? undefined : (i: number) => setActiveSlideer(i + 1),
    };

    return (
        <SliderWrapper className={className} margin={margin}>
            <Slider {...settings}>{children}</Slider>
            {!dots && (
                <div className="custom-paging">
                    <span>{activeSlider}</span>
                    <span>{` / ${React.Children.count(children)}`}</span>
                </div>
            )}
        </SliderWrapper>
    );
};

export default Sliders;

const SliderWrapper = styled.section<{ margin: string }>`
    position: relative;
    margin-bottom: ${(props) => props.margin};

    .custom-paging {
        position: absolute;
        bottom: 1rem;
        right: 1.25rem;
        padding: 3px 10px;
        background-color: rgba(0, 0, 0, 0.4);
        border-radius: 62px;
        ${(props) => props.theme.Title_6}

        span:first-child {
            color: ${(props) => props.theme.white};
        }
        span:last-child {
            color: rgba(255, 255, 255, 0.5);
        }
    }

    & .slick-dots {
        position: static;
        bottom: 0px;
    }
`;
