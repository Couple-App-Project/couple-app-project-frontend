import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import { Sliders } from 'components';
import { pixelToRem } from 'utils/utils';
import { RouteButton } from '../components';
import sliderItems from '../modules/variables/sliderItems';

const ScreenOnboarding = () => {
    return (
        <OnboardingWrapper>
            <Sliders className="sliders" dots autoplay>
                {sliderItems.map((el, i) => {
                    return (
                        <div className="slider-items" key={i}>
                            <h2>{el.title}</h2>
                            <p>{el.contentT}</p>
                            <p>{el.contentB}</p>
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
            <RouteButton />
        </OnboardingWrapper>
    );
};

export default ScreenOnboarding;

const OnboardingWrapper = styled.main`
    height: 100vh;
    background-color: #f9f9f9;
    position: relative;
    .slider-items {
        width: 100%;

        h2 {
            color: ${({ theme }) => theme.grey_6};
            ${({ theme }) => theme.Subhead_1};
            margin-bottom: ${pixelToRem(16)};
            text-align: center;
        }

        p {
            color: ${({ theme }) => theme.grey_4};
            ${({ theme }) => theme.Body_2}
            text-align : center;

            &:last-of-type {
                margin-bottom: ${pixelToRem(38)};
            }
        }

        & > span {
            position: unset !important;
            & .slider-img {
                object-fit: contain !important;
                position: relative !important;
                height: 55vh !important;
            }
        }
    }
`;
