import React, { useState } from 'react';
import styled from 'styled-components';
import {
    Calendar,
    CalendarDayDetail,
    CalendarAddButton,
    CalendarSearch,
} from '../components';
import { format } from 'date-fns';
import { useQueryCalenders } from '../queries/queryFn';
import useInput from 'hooks/useInput';
import { useRecoilValue } from 'recoil';
import isSearchState from 'recoil/isSearchState';

const ScreenCalender = () => {
    const [selectedDay, setSelectedDay] = useState<Date | undefined>(
        new Date(),
    );

    const [selectDate, setSelectDate] = useState(format(new Date(), 'yyMM'));

    const changeDate = (e: any) => {
        setSelectDate(format(e, 'yyMM'));
    };

    const { isLoading } = useQueryCalenders(selectDate);

    const [search, onChangeSearch] = useInput('');

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
            {isSearch && <CalendarSearch />}
        </CalenderWrapper>
    );
};

export default ScreenCalender;

const CalenderWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
`;
