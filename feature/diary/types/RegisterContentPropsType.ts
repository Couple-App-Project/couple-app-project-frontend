interface RegisterContentPropsType {
    startDate: string;
    imgUrl: string[];
    calendarTitle: string;
    diary: { title: string; content: string };
    onChangeContent: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleDelete: (index: number) => void;
}

export type { RegisterContentPropsType };
