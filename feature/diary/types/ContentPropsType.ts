interface ContentPropsType {
    calendarTitle: string;
    title: string;
    content: string;
    _onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    disabled: boolean;
    date: string;
    edit: boolean;
    handlerDelete?: () => void;
    id?: number;
}

export type { ContentPropsType };
