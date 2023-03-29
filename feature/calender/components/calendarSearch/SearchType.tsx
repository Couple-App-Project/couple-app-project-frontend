import styled from 'styled-components';
import { pixelToRem } from 'utils/utils';
import { CalendarSearchPropsType } from '../../types';

const SearchType = ({ type, onChangeType }: CalendarSearchPropsType) => {
    return (
        <SearchTypeContainer className="search-type">
            <button
                name="type"
                value="데이트"
                className={type === '데이트' ? 'date' : ''}
                onClick={(e) => onChangeType!(e)}
            >
                데이트
            </button>
            <button
                name="type"
                value="기념일"
                className={type === '기념일' ? 'anniversary' : ''}
                onClick={(e) => onChangeType!(e)}
            >
                기념일
            </button>
        </SearchTypeContainer>
    );
};

export default SearchType;

const SearchTypeContainer = styled.div`
    button {
        width: ${pixelToRem(78)};
        padding: ${pixelToRem(6)} 0;
        border-radius: 60px;
        border: 1px solid ${({ theme }) => theme.grey_2};
        background-color: ${({ theme }) => theme.white};
        color: ${({ theme }) => theme.grey_4};
        ${({ theme }) => theme.Body_1}

        &:last-child {
            margin-left: ${pixelToRem(8)};
        }

        &.date {
            background-color: ${({ theme }) => theme.primaryPink};
            color: ${({ theme }) => theme.white};
        }
        &.anniversary {
            background-color: ${({ theme }) => theme.mediumBlue};
            color: ${({ theme }) => theme.white};
        }
    }
`;
