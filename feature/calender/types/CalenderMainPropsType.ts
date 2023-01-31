interface CalenderMainPropsType {
    changeDate?: (e: any) => void;
    selectedDay: Date | undefined;
    setSelectedDay?: React.Dispatch<React.SetStateAction<Date | undefined>>;
}

export type { CalenderMainPropsType };
