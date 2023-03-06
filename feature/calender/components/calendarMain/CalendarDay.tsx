import React from 'react';
import styled from 'styled-components';
import { DayContent, DayContentProps } from 'react-day-picker';

const CalendarDay = (props: DayContentProps) => {
    return (
        <DayWrapper className="day-content">
            <DayContent {...props} />
            <ul className="calendar-circle">
                <li className="anniversary-circle" />
                <li className="date-circle" />
            </ul>
        </DayWrapper>
    );
};

export default CalendarDay;

const DayWrapper = styled.div`
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 700;

    .calendar-circle {
        position: absolute;
        left: 0px;
        bottom: 2px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;

        li {
            width: 0.25rem;
            height: 0.25rem;
            border-radius: 50%;

            &.anniversary-circle {
                background-color: ${(props) => props.theme.mediumBlue};
            }
            &.date-circle {
                margin-left: 0.1rem;
                background-color: ${(props) => props.theme.primaryPink};
            }
        }
    }
`;
