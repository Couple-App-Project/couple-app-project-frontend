import React from 'react';
import styled from 'styled-components';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { ko } from 'date-fns/locale';
import { getYear, format } from 'date-fns';
import type { CalendarMainPropsType } from '../../types/CalendarMainPropsType';
import { useRecoilValue } from 'recoil';
import calendersState from 'recoil/calendersState';
import { isSunday, dayArray } from '../../modules/functions';
import { DayContent, DayContentProps } from 'react-day-picker';

const DayWrpper = (props: DayContentProps) => {
    return (
        <div className="day-content">
            <DayContent {...props} />
        </div>
    );
};

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
            components={{ DayContent: DayWrpper }}
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
