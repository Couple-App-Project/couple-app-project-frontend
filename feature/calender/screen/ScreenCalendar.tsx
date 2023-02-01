import React, { useState } from 'react';
import styled from 'styled-components';
import {
    CalenderMain,
    CalenderDayDetail,
    CalenderAddButton,
} from '../components';
import { format } from 'date-fns';
import { useQueryCalenders } from '../queries/queryFn';

const ScreenCalender = () => {
    const [selectedDay, setSelectedDay] = useState<Date | undefined>(
        new Date(),
    );

    const [selectDate, setSelectDate] = useState(format(new Date(), 'yyMM'));

    const changeDate = (e: any) => {
        setSelectDate(format(e, 'yyMM'));
    };

    const { isLoading } = useQueryCalenders(selectDate);

    return (
        <CalenderWrapper>
            <CalenderMain
                selectedDay={selectedDay}
                setSelectedDay={setSelectedDay}
                changeDate={changeDate}
            />
            <CalenderDayDetail selectedDay={selectedDay} />
            <CalenderAddButton />
        </CalenderWrapper>
    );
};

export default ScreenCalender;

const CalenderWrapper = styled.div``;
