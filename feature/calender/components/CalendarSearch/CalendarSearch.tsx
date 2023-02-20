import React, { useState } from 'react';
import styled from 'styled-components';
import Back from 'public/images/icons/arrow-back.svg';
import { useQueryCalendarSearch } from 'feature/calender/queries/queryFn';
import { useRouter } from 'next/router';

const CalendarSearch = () => {
    const router = useRouter();

    const [search, setSearch] = useState({ keyword: '', type: undefined });

    const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
        });
    };

    const { data } = useQueryCalendarSearch(search);

    return (
        <SearchContainer>
            <div className="search-input">
                <div onClick={() => router.push('/calendar')}>
                    <Back />
                </div>
                <input
                    type="text"
                    value={search.keyword}
                    name="keyword"
                    onChange={(e) => onChangeSearch(e)}
                />
            </div>
        </SearchContainer>
    );
};

export default CalendarSearch;

const SearchContainer = styled.div`
    position: absolute;
    z-index: 5;
    width: 100%;
    height: 100%;
    background: ${(props) => props.theme.white};
`;
