import React, { useState } from 'react';
import { format } from 'date-fns';
import { DateRange, DayPicker } from 'react-day-picker';

const CalenderMain = () => {
    const [range, setRange] = useState<DateRange | undefined>();

    let footer = <p>Please pick the first day.</p>;
    if (range?.from) {
        if (!range.to) {
            footer = <p>{format(range.from, 'PPP')}</p>;
        } else if (range.to) {
            footer = (
                <p>
                    {format(range.from, 'PPP')}–{format(range.to, 'PPP')}
                </p>
            );
        }
    }

    return (
        <DayPicker
            defaultMonth={new Date()}
            selected={range}
            onSelect={setRange}
            footer={footer}
        />
    );
};

export default CalenderMain;
