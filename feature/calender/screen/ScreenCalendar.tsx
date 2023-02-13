import React, { useState } from 'react';
import styled from 'styled-components';
import {
    Calendar,
    CalendarDayDetail,
    CalendarAddButton,
    CalendarSearch,
} from '../components';
import { format } from 'date-fns';
import { useQueryCalendarSearch, useQueryCalendars } from '../queries/queryFn';
import { useRecoilValue } from 'recoil';
import isSearchState from 'recoil/isSearchState';

const ScreenCalender = () => {
    const [selectedDay, setSelectedDay] = useState<Date | undefined>(
        new Date(),
    );

    const [search, setSearch] = useState({ keyword: '', type: undefined });

    const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
        });
    };

    const [selectDate, setSelectDate] = useState(format(new Date(), 'yyMM'));

    const changeDate = (e: any) => {
        setSelectDate(format(e, 'yyMM'));
    };

    const { isLoading } = useQueryCalendars(selectDate);
    const { data } = useQueryCalendarSearch(search);

    const isSearch = useRecoilValue(isSearchState);

    return (
        <CalenderWrapper>
            <Calendar
                selectedDay={selectedDay}
                setSelectedDay={setSelectedDay}
                changeDate={changeDate}
            />
            <CalendarDayDetail selectedDay={selectedDay} />
            <CalendarAddButton />
            {isSearch && (
                <CalendarSearch
                    search={search}
                    onChangeSearch={onChangeSearch}
                />
            )}
        </CalenderWrapper>
    );
};

export default ScreenCalender;

const CalenderWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
`;
