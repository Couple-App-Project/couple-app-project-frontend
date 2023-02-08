import React from 'react';
import styled from 'styled-components';
import { DayContent, DayContentProps } from 'react-day-picker';

const CalendarDay = (props: DayContentProps) => {
    return (
        <div className="day-content">
            <DayContent {...props} />
        </div>
    );
};

export default CalendarDay;
