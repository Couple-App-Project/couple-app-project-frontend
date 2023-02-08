import React from 'react';
import styled from 'styled-components';
import { format } from 'date-fns';
import type { CalendarMainPropsType } from '../../types/CalendarMainPropsType';
import { useRecoilValue } from 'recoil';
import calendersState from 'recoil/calendersState';
import { dayArray } from '../../modules/functions';

const CalendarDayDetail = ({ selectedDay }: CalendarMainPropsType) => {
    const calenderList = useRecoilValue(calendersState);
    const day = selectedDay && format(selectedDay, 'yyyy-MM-dd');

    const selectDetailList = dayArray(calenderList).filter(
        (el) => day && el.dateArray.includes(day),
    );

    return (
        <DayDetailWrpper>
            {selectDetailList?.map((cur, idx) => {
                return (
                    <li key={idx}>
                        <div className={`${cur.type}`} />
                        <h4>{cur.title}</h4>
                        <span>{`${cur.startTime} - ${cur.endTime}`}</span>
                    </li>
                );
            })}
        </DayDetailWrpper>
    );
};

export default CalendarDayDetail;

const DayDetailWrpper = styled.ul``;
