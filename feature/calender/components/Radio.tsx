import React from 'react';

const Radio = (props: any) => {
    const { value, _onChange, children } = props;
    return (
        <label>
            <input
                type="radio"
                name="scheduleType"
                value={value}
                onChange={_onChange}
            />
            {children}
        </label>
    );
};

export default Radio;
