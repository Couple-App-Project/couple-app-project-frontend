import { useState, useCallback, ChangeEvent } from "react";

type UserInputProps = [string, (e: ChangeEvent<HTMLInputElement>) => void];

const useInput = (initialValue: string): UserInputProps => {
  const [value, setValue] = useState(initialValue);

  const handler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);

  return [value, handler];
};

export default useInput;
