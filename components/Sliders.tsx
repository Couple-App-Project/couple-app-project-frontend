import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';
import { pixelToRem } from 'utils/utils';
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
        <SliderWrapper className={className} margin={margin ? margin : ''}>
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
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: end;
    padding-bottom: ${pixelToRem(100)};
    .custom-paging {
        position: absolute;
        bottom: ${pixelToRem(16)};
        right: ${pixelToRem(24)};
        padding: ${pixelToRem(4)} ${pixelToRem(10)};
        background-color: rgba(0, 0, 0, 0.4);
        border-radius: 60px;
        ${({ theme }) => theme.Title_6}

        span:first-child {
            color: ${({ theme }) => theme.white};
        }
        span:last-child {
            color: rgba(255, 255, 255, 0.5);
        }
    }

    & .slick-dots {
        position: fixed;
        bottom: 0px;
        padding: ${pixelToRem(40)} 0;

        & > li {
            margin: 0 1px;

            button:before {
                font-size: 12px;
                color: ${({ theme }) => theme.grey_3};
                opacity: 1;
            }

            &.slick-active {
                button:before {
                    color: ${({ theme }) => theme.primaryPink};
                }
            }
        }
    }
`;
