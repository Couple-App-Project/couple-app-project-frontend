import styled from 'styled-components';
import { CalendarSearchPropsType } from 'feature/calender/types/CalendarSearchPropsType';

const SearchType = ({ type, onChangeType }: CalendarSearchPropsType) => {
    return (
        <SearchTypeContainer className="search-type">
            <button
                name="type"
                value="데이트"
                className={type === '데이트' ? 'date' : ''}
                onClick={(e) => onChangeType(e)}
            >
                데이트
            </button>
            <button
                name="type"
                value="기념일"
                className={type === '기념일' ? 'anniversary' : ''}
                onClick={(e) => onChangeType(e)}
            >
                기념일
            </button>
        </SearchTypeContainer>
    );
};

export default SearchType;

const SearchTypeContainer = styled.div`
    button {
        width: 4.875rem;
        padding: 0.375rem 0;
        border-radius: 62px;
        border: 1px solid ${(props) => props.theme.grey_2};
        background-color: ${(props) => props.theme.white};
        color: ${(props) => props.theme.grey_4};
        ${(props) => props.theme.Body_1}

        &:last-child {
            margin-left: 0.5rem;
        }

        &.date {
            background-color: ${(props) => props.theme.primaryPink};
            color: ${(props) => props.theme.white};
        }
        &.anniversary {
            background-color: ${(props) => props.theme.mediumBlue};
            color: ${(props) => props.theme.white};
        }
    }
`;
