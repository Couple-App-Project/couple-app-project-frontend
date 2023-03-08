import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { OnboardingSlider, RouteBtnContent } from '../components';
import sliderItems from '../modules/variables/sliderItems';

const ScreenOnboarding = () => {
    return (
        <OnboardingWrapper>
            <OnboardingSlider className="slider-wrap">
                {sliderItems.map((el, i) => {
                    return (
                        <div className="slider-items" key={i}>
                            <Image
                                src={el.src}
                                alt={el.alt}
                                layout="fill"
                                className="slider-img"
                            />
                        </div>
                    );
                })}
            </OnboardingSlider>
            <RouteBtnContent />
        </OnboardingWrapper>
    );
};

export default ScreenOnboarding;

const OnboardingWrapper = styled.article`
    .slider-items {
        width: 100%;

        & > span {
            position: unset !important;
            & .slider-img {
                object-fit: contain !important;
                position: relative !important;
                height: auto !important;
            }
        }
    }
`;
