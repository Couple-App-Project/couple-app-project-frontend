import { useState, useCallback } from 'react';
import { UseInput } from '../types/useInputType';

const useInput = (initialValue: string): UseInput => {
    const [value, setValue] = useState(initialValue);

    const handler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }, []);

    return [value, handler];
};

export default useInput;
