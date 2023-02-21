interface CalendarSearchPropsType {
    search: string | null;
    onChangeSearch: (
        e?:
            | React.ChangeEvent<HTMLInputElement>
            | React.MouseEvent<HTMLButtonElement>,
    ) => void;
}

export type { CalendarSearchPropsType };
