import React, { useState } from 'react';
import { CalenderMain, CalenderDayDetail } from '../components';
import { format } from 'date-fns';
import { useQueryCalenders } from '../queries/queryFn';

const ScreenCalender = () => {
    const [selectedDay, setSelectedDay] = useState<Date>();

    const [selectDate, setSelectDate] = useState(format(new Date(), 'yyMM'));

    const changeDate = (e: any) => {
        setSelectDate(format(e, 'yyMM'));
    };

    const { isLoading } = useQueryCalenders(selectDate);

    return (
        <>
            <h1>캘린더페이지</h1>
            <CalenderMain
                selectedDay={selectedDay}
                setSelectedDay={setSelectedDay}
                changeDate={changeDate}
            />
            <CalenderDayDetail selectedDay={selectedDay} />
        </>
    );
};

export default ScreenCalender;
