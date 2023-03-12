import React from 'react';
import styled from 'styled-components';
import { format } from 'date-fns';
import type { CalendarMainPropsType } from '../../types/CalendarMainPropsType';
import { useRecoilValue } from 'recoil';
import calendersState from 'recoil/calendersState';
import { dayArray } from '../../modules/functions';
import { changeDate } from 'utils/functions';
import Link from 'next/link';

const CalendarDayDetail = ({ selectedDay }: CalendarMainPropsType) => {
    const calenderList = useRecoilValue(calendersState);
    const day = selectedDay && format(selectedDay, 'yyyy-MM-dd');

    const selectDetailList = dayArray(calenderList).filter(
        (el) => day && el.dateArray.includes(day),
    );

    return (
        <DayDetailWrpper>
            <h3>{changeDate(selectedDay!)}</h3>
            <ul>
                {selectDetailList?.map((cur, idx) => {
                    return (
                        <Link href={`/calendar/${cur.calendarId}`} key={idx}>
                            <li>
                                <div className={`${cur.type}`} />
                                <h4>{cur.title}</h4>
                                <span>{`${cur.startTime} - ${cur.endTime}`}</span>
                            </li>
                        </Link>
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
    margin-bottom: 12vh;
    overflow: auto;

    h3 {
        margin-bottom: 0.75rem;
    }

    h3,
    h4 {
        color: ${(props) => props.theme.grey_6};
        ${(props) => props.theme.Body_2};
    }

    ul {
        li {
            position: relative;
            padding: 1rem 0 1rem 3rem;
            background-color: ${(props) => props.theme.white};
            border: 1px solid ${(props) => props.theme.grey_2};
            border-radius: 6px;

            &:not(:last-child) {
                margin-bottom: 0.5rem;
            }

            div {
                position: absolute;
                left: 1.5rem;
                top: 50%;
                transform: translateY(-50%);
                width: 0.5rem;
                height: 0.5rem;
                border-radius: 50%;

                &.기념일 {
                    background-color: ${(props) => props.theme.mediumBlue};
                }
                &.데이트 {
                    background-color: ${(props) => props.theme.primaryPink};
                }
            }

            span {
                font-size: 0.75rem;
                font-weight: 400;
                color: ${(props) => props.theme.grey_4};
            }
        }
    }
`;