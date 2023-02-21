import React, { useState } from 'react';
import styled from 'styled-components';
import { useQueryCalendarSearch } from 'feature/calender/queries/queryFn';
import {
    SearchInput,
    SearchType,
    SearchList,
} from 'feature/calender/components';

const CalendarSearch = () => {
    const [search, setSearch] = useState({ keyword: '', type: undefined });

    const onChangeSearch = (
        e?:
            | React.ChangeEvent<HTMLInputElement>
            | React.MouseEvent<HTMLButtonElement>,
    ) => {
        if (e) {
            setSearch((prev) => {
                return {
                    ...prev,
                    [e.target.name]: (e.target as HTMLButtonElement).value,
                };
            });
        } else {
            setSearch((prev) => {
                return {
                    ...prev,
                    keyword: '',
                };
            });
        }
    };

    const { data } = useQueryCalendarSearch(search);

    return (
        <SearchContainer>
            <SearchInput
                search={search.keyword}
                onChangeSearch={onChangeSearch}
            />
            <SearchType search={search.type} onChangeSearch={onChangeSearch} />
            <SearchList list={data?.data.data} search={search.keyword} />
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
