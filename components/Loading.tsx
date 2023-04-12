import styled, { keyframes } from 'styled-components';
import Heart from 'public/images/icons/loading-heart.svg';
import { pixelToRem, pixelToVh, pixelToVw } from 'utils/utils';

const Loading = () => {
    return (
        <LoadingContainer>
            <div>
                <Heart />
                <div className="circle" />
                <p>잠시만 기다려 주세요..</p>
            </div>
        </LoadingContainer>
    );
};

export default Loading;
const rotationAnimation = keyframes`
    100% {
        transform: rotate(360deg);
    }
`;

const LoadingContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    & > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        svg {
            margin-bottom: ${pixelToRem(5)};
            animation: ${rotationAnimation} 1.5s linear infinite;
            transform-origin: 50% 50%;
        }

        .circle {
            width: ${pixelToVw(60)};
            height: ${pixelToVh(15)};
            background-color: ${({ theme }) => theme.grey_2};
            border-radius: 50%;
            margin-bottom: ${pixelToRem(12)};
        }

        p {
            color: ${({ theme }) => theme.grey_5};
            ${({ theme }) => theme.Body_1}
        }
    }
`;
