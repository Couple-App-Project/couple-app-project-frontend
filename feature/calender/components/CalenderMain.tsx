import React, { useState } from 'react';
import styled from 'styled-components';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { ko } from 'date-fns/locale';
import { format, getYear } from 'date-fns';
import { useQueryCalenders } from '../queries/queryFn';

const CalenderMain = () => {
    const today = new Date();
    const [selectedDay, setSelectedDay] = useState<Date>(today);

    const footer = selectedDay ? (
        <p>You selected {format(selectedDay, 'PPP')}.</p>
    ) : (
        <p>Please pick a day.</p>
    );

    const [selectDate, setSelectDate] = useState(format(today, 'yyMM'));

    const changeDate = (e: any) => {
        setSelectDate(format(e, 'yyMM'));
    };

    const { data } = useQueryCalenders(selectDate);

    return (
        <DayPickers
            fromYear={getYear(today)}
            toYear={getYear(today) + 5}
            captionLayout="dropdown"
            onYearChange={(e: any) => changeDate(e)}
            onMonthChange={(e: any) => changeDate(e)}
            mode="single"
            selected={selectedDay}
            onSelect={setSelectedDay}
            showOutsideDays
            locale={ko}
            footer={footer}
        />
    );
};

export default CalenderMain;

const DayPickers = styled(DayPicker)``;
