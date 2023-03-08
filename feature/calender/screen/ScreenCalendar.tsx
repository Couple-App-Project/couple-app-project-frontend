import React, { useState } from 'react';
import styled from 'styled-components';
import { Calendar, CalendarDayDetail, CalendarAddButton } from '../components';
import { format } from 'date-fns';
import { useQueryCalendars } from '../queries/queryFn';

const ScreenCalender = () => {
    const [selectedDay, setSelectedDay] = useState<Date | undefined>(
        new Date(),
    );

    const [selectDate, setSelectDate] = useState(format(new Date(), 'yyMM'));

    const changeDate = (e: any) => {
        setSelectDate(format(e, 'yyMM'));
    };

    const { isLoading } = useQueryCalendars(selectDate);

    return (
        <CalenderWrapper>
            <Calendar
                selectedDay={selectedDay}
                setSelectedDay={setSelectedDay}
                changeDate={changeDate}
            />
            <CalendarDayDetail selectedDay={selectedDay} />
            <CalendarAddButton />
        </CalenderWrapper>
    );
};

export default ScreenCalender;

const CalenderWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
`;
