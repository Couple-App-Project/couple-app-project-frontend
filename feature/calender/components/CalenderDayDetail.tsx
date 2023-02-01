import React from 'react';
import styled from 'styled-components';
import { format, eachDayOfInterval, parseISO } from 'date-fns';
import type { CalenderMainPropsType } from '../types/CalenderMainPropsType';
import { useRecoilValue } from 'recoil';
import calendersState from 'recoil/calendersState';
import { ko } from 'date-fns/locale';

const CalenderDayDetail = ({ selectedDay }: CalenderMainPropsType) => {
    const calenderList = useRecoilValue(calendersState);
    const day = selectedDay && format(selectedDay, 'yyyy-MM-dd');

    const dayArray = calenderList
        .map((el) => {
            return {
                ...el,
                dateArray: eachDayOfInterval({
                    start: parseISO(el.startDate),
                    end: parseISO(el.endDate),
                }).map((el) => format(el, 'yyyy-MM-dd', { locale: ko })),
            };
        })
        .filter((el) => day && el.dateArray.includes(day));

    return (
        <DayDetailWrpper>
            {dayArray?.map((cur, idx) => {
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

export default CalenderDayDetail;

const DayDetailWrpper = styled.ul``;
