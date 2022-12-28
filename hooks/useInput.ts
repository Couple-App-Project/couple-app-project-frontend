import { useState, useCallback } from 'react';
import { UseInputType } from '../types/UseInputType';

const useInput = (initialValue: string): UseInputType => {
    const [value, setValue] = useState(initialValue);

    const handler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }, []);

    return [value, handler];
};

export default useInput;
