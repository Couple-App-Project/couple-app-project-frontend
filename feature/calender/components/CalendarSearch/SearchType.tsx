import styled from 'styled-components';
import { CalendarSearchPropsType } from 'feature/calender/types/CalendarSearchPropsType';

const SearchType = ({ search, onChangeSearch }: CalendarSearchPropsType) => {
    return (
        <SearchTypeContainer className="search-type">
            <button
                name="type"
                value="데이트"
                className="date"
                onClick={(e) => onChangeSearch(e)}
            >
                데이트
            </button>
            <button
                name="type"
                value="기념일"
                className="anniversary"
                onClick={(e) => onChangeSearch(e)}
            >
                기념일
            </button>
        </SearchTypeContainer>
    );
};

export default SearchType;

const SearchTypeContainer = styled.div``;
