import React from 'react';
import styled from 'styled-components';
import { format, getMonth, getDate, getDay } from 'date-fns';
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
    console.log(selectedDay);
    return (
        <DayDetailWrpper>
            <ul>
                {selectDetailList?.map((cur, idx) => {
                    return (
                        <li key={idx}>
                            <div className={`${cur.type}`} />
                            <h4>{cur.title}</h4>
                            <span>{`${cur.startTime} - ${cur.endTime}`}</span>
                        </li>
                    );
                })}
            </ul>
        </DayDetailWrpper>
    );
};

export default CalendarDayDetail;

const DayDetailWrpper = styled.div`
    flex: 1;
    background-color: ${(props) => props.theme.grey_1};
    padding: 1rem 1.5rem;
`;
