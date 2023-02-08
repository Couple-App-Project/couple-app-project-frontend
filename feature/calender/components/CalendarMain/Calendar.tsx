import React from 'react';
import styled from 'styled-components';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { ko } from 'date-fns/locale';
import { getYear } from 'date-fns';
import type { CalendarMainPropsType } from '../../types/CalendarMainPropsType';
import { useRecoilValue } from 'recoil';
import calendersState from 'recoil/calendersState';
import { isSunday, dayArray } from '../../modules/functions';
import { CalendarCaption, CalendarDay } from '../index';

const Calendar = ({
    changeDate,
    selectedDay,
    setSelectedDay,
}: CalendarMainPropsType) => {
    const calenderList = useRecoilValue(calendersState);
    const date = dayArray(calenderList)
        .filter((v) => v.type === '데이트')
        .reduce((acc, cur) => {
            return acc.concat(...cur.dateArray);
        }, [] as string[])
        .map((el) => new Date(el));
    const anniversary = dayArray(calenderList)
        .filter((v) => v.type === '기념일')
        .reduce((acc, cur) => {
            return acc.concat(...cur.dateArray);
        }, [] as string[])
        .map((el) => new Date(el));

    return (
        <DayPickers
            fromYear={getYear(new Date())}
            toYear={getYear(new Date()) + 5}
            captionLayout="dropdown"
            onMonthChange={(e: Date) => changeDate && changeDate(e)}
            required
            mode="single"
            selected={selectedDay}
            onSelect={setSelectedDay}
            locale={ko}
            components={{ Caption: CalendarCaption, DayContent: CalendarDay }}
            modifiers={{ isSunday, date, anniversary }}
            modifiersClassNames={{
                isSunday: 'sunday-class',
                date: 'date-class',
                anniversary: 'anniversary-class',
            }}
        />
    );
};

export default Calendar;

const DayPickers = styled(DayPicker)`
    .rdp-month {
        width: 100%;
    }

    .rdp-head_row th:first-child,
    .sunday-class {
        color: #fa1c37;
    }
    button {
        color: #3b3d49;
    }

    .rdp-day_selected {
        background-color: transparent;
        .day-content {
            background-color: #3b3d49;
            color: #fff;
        }
    }
`;
