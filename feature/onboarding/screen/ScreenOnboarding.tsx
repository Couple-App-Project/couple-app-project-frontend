import styled from 'styled-components';
import { OnboardingSlider, RouteBtnContent } from '../components';

const ScreenOnboarding = () => {
    return (
        <OnboardingWrap>
            <OnboardingSlider />
            <RouteBtnContent />
        </OnboardingWrap>
    );
};

export default ScreenOnboarding;

const OnboardingWrap = styled.div``;
