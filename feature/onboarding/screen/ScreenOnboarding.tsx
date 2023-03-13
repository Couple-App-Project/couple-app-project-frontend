import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { Sliders } from 'components';
import { RouteBtnContent } from '../components';
import sliderItems from '../modules/variables/sliderItems';

const ScreenOnboarding = () => {
    return (
        <OnboardingWrapper>
            <Sliders className="sliders" margin="5rem" dots autoplay>
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
            </Sliders>
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
