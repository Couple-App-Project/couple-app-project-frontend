interface CalendarSearchPropsType {
    keyword?: string;
    type?: string | null;
    onChangeKeyword?: (e?: React.ChangeEvent<HTMLInputElement>) => void;
    onChangeType?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export type { CalendarSearchPropsType };
