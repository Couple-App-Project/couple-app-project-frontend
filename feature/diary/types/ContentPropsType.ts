interface ContentPropsType {
    calendarTitle: string;
    title: string;
    content: string;
    _onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    disabled: boolean;
    date: string;
    edit: boolean;
    handleModal: () => void;
}

export type { ContentPropsType };
