interface CalendarSearchPropsType {
    search: string;
    onChangeSearch: (
        e?:
            | React.ChangeEvent<HTMLInputElement>
            | React.MouseEvent<HTMLButtonElement>,
    ) => void;
}

export type { CalendarSearchPropsType };
