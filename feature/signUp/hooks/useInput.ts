import { useState, useCallback, ChangeEvent } from "react";

type UserInputProps = [string, (e: ChangeEvent) => void];

const useInput = (initialValue: string): UserInputProps => {
  const [value, setValue] = useState(initialValue);

  const handler = useCallback((e: any) => {
    setValue(e.target.value);
  }, []);

  return [value, handler];
};

export default useInput;
