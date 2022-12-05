import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { OnboardingSlider, RouteBtnContent } from '../components';
import sliderItems from '../modules/variables/sliderItems';

const ScreenOnboarding = () => {
    return (
        <OnboardingWrap>
            <OnboardingSlider className="slider-wrap">
                {sliderItems.map((el, i) => {
                    return (
                        <SliderItems key={i}>
                            <Image
                                src={el.src}
                                alt={el.alt}
                                layout="fill"
                                className="slider-img"
                            />
                        </SliderItems>
                    );
                })}
            </OnboardingSlider>
            <RouteBtnContent />
        </OnboardingWrap>
    );
};

export default ScreenOnboarding;

const OnboardingWrap = styled.div``;

const SliderItems = styled.div`
    width: 100%;
    & > span {
        position: unset !important;
        & .slider-img {
            object-fit: contain !important;
            position: relative !important;
            height: auto !important;
        }
    }
`;
