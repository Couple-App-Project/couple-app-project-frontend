import React, { useState } from 'react';
import styled from 'styled-components';
import {
    SearchInput,
    SearchType,
    SearchList,
} from 'feature/calender/components';
import { useQueryCalendarSearch } from 'feature/calender/queries/queryFn';
import useInput from 'hooks/useInput';
import { pixelToRem } from 'utils/utils';

const CalendarSearch = () => {
    const [keyword, onChangeKeyword] = useInput('');
    const [type, setType] = useState<null | string>(null);

    /**
     * 일정 종류 필터
     * @param e MouseEvent
     */
    const onChangeType = (e: React.MouseEvent<HTMLButtonElement>) => {
        setType(
            (e.target as HTMLButtonElement).value === type
                ? null
                : (e.target as HTMLButtonElement).value,
        );
    };

    /**
     * 검색 조회
     */
    const { data } = useQueryCalendarSearch({ keyword, type });

    return (
        <SearchContainer>
            <SearchInput keyword={keyword} onChangeKeyword={onChangeKeyword} />
            <SearchType type={type} onChangeType={onChangeType} />
            <SearchList list={data} search={keyword} />
        </SearchContainer>
    );
};

export default CalendarSearch;

const SearchContainer = styled.div`
    padding: ${pixelToRem(24)};
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.white};
`;
