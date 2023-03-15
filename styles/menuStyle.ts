import styled from 'styled-components';
import { pixelToVh } from 'utils/utils';

export const Menu = styled.article`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: ${pixelToVh(55)};
    border-bottom: 1px solid ${(props) => props.theme.grey_2};

    button {
        all: unset;
        display: flex;
        align-items: center;

        span {
            padding-left: 12px;
            ${(props) => props.theme.Body_1};
        }

        input {
            display: none;
        }
    }
`;
