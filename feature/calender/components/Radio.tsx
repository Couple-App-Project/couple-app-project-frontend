import React from 'react';

const Radio = (props: any) => {
    const { value, _onChange, checked, children } = props;
    return (
        <label>
            <input
                type="radio"
                name="scheduleType"
                value={value}
                onChange={_onChange}
                checked={checked}
            />
            {children}
        </label>
    );
};

export default Radio;
