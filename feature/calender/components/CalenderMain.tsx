import React from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const CalenderMain = () => {
    const initialDays: Date[] = [];
    const [days, setDays] = React.useState<Date[] | undefined>(initialDays);

    const footer =
        days && days.length > 0 ? (
            <p>선택: {JSON.stringify(days)}</p>
        ) : (
            <p>날짜를 선택해 주세요!</p>
        );

    return (
        <DayPicker
            showOutsideDays
            mode="multiple"
            selected={days}
            onSelect={setDays}
            footer={footer}
        />
    );
};

export default CalenderMain;
