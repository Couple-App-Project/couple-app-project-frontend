import React, { useState } from 'react';
import styled from 'styled-components';
import { useQueryCalendarSearch } from 'feature/calender/queries/queryFn';
import {
    SearchInput,
    SearchType,
    SearchList,
} from 'feature/calender/components';
import useInput from 'hooks/useInput';

const CalendarSearch = () => {
    const [keyword, onChangeKeyword] = useInput('');
    const [type, setType] = useState<null | string>();

    const onChangeType = (e: React.MouseEvent<HTMLButtonElement>) => {
        setType(
            (e.target as HTMLButtonElement).value === type
                ? null
                : (e.target as HTMLButtonElement).value,
        );
    };

    const { data } = useQueryCalendarSearch({ keyword, type });

    return (
        <SearchContainer>
            <SearchInput keyword={keyword} onChangeKeyword={onChangeKeyword} />
            <SearchType type={type} onChangeType={onChangeType} />
            <SearchList list={data?.data.data} search={keyword} />
        </SearchContainer>
    );
};

export default CalendarSearch;

const SearchContainer = styled.div`
    padding: 1.5rem;
    width: 100%;
    height: 100%;
    background: ${(props) => props.theme.white};
`;
