import React, { useState } from 'react';
import styled from 'styled-components';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { ko } from 'date-fns/locale';
import { format, getYear } from 'date-fns';
import { useQueryCalenders } from '../queries/queryFn';

const CalenderMain = () => {
    const today = new Date();
    const [selectedDay, setSelectedDay] = useState<Date>();

    const [selectDate, setSelectDate] = useState(format(today, 'yyMM'));

    const changeDate = (e: any) => {
        setSelectDate(format(e, 'yyMM'));
    };

    const { data } = useQueryCalenders(selectDate);

    const sunday = (day: Date) => {
        return day.getDay() === 0;
    };

    return (
        <DayPickers
            fromYear={getYear(today)}
            toYear={getYear(today) + 5}
            captionLayout="dropdown"
            onMonthChange={(e: any) => changeDate(e)}
            mode="single"
            selected={selectedDay}
            onSelect={setSelectedDay}
            locale={ko}
            modifiers={{ sunday }}
            modifiersClassNames={{ sunday: 'sunday-class' }}
        />
    );
};

export default CalenderMain;

const DayPickers = styled(DayPicker)`
    .rdp-caption_dropdowns {
        display: flex;
        flex-direction: row-reverse;
        justify-content: flex-end;
        align-items: center;
    }
    .rdp-dropdown_year,
    .rdp-dropdown_month {
        display: block;
    }

    .rdp-head_row th:first-child span,
    .sunday-class {
        color: #fa1c37;
    }
    button {
        color: #3b3d49;
    }

    .rdp-day_selected {
        background-color: #3b3d49;
    }
`;
