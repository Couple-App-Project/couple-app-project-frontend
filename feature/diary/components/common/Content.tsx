import styled from 'styled-components';
import { changeDate } from 'utils/functions';
import CalendarIcon from 'public/images/icons/calendar-icon.svg';
import Edit from 'public/images/icons/edit.svg';
import Delete from 'public/icons/trash.svg';
import { useRouter } from 'next/router';

interface ContentPropsType {
    calendarTitle: string;
    title: string;
    content: string;
    _onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    disabled: boolean;
    date: string;
    edit: boolean;
    handlerDelete?: () => void;
    id?: any;
}

const Content = ({
    calendarTitle,
    title,
    content,
    _onChange,
    disabled,
    date,
    edit,
    handlerDelete,
    id,
}: ContentPropsType) => {
    const router = useRouter();
    return (
        <ContentContainer>
            <div className="calendar-title">
                <CalendarIcon />
                <span>{calendarTitle}</span>
            </div>
            <div className="date-content">
                <div>
                    <span>{changeDate(new Date(date))}</span>
                </div>
                {edit && (
                    <div>
                        <Edit
                            onClick={() => router.push(`/diary/register/${id}`)}
                        />
                        <Delete onClick={handlerDelete} />
                    </div>
                )}
            </div>
            <input
                type="text"
                value={title || ''}
                placeholder="제목"
                className="title"
                onChange={_onChange}
                disabled={disabled ? true : false}
            />
            <input
                type="text"
                value={content || ''}
                placeholder="둘만의 이야기를 기록해 보세요."
                className="content"
                onChange={_onChange}
                disabled={disabled ? true : false}
            />
        </ContentContainer>
    );
};

Content.defaultProps = {
    _onChange: () => {},
    disabled: false,
    edit: false,
    id: null,
};

export default Content;

const ContentContainer = styled.div`
    .calendar-title {
        display: inline-block;
        margin-bottom: 1rem;
        padding: 0.375rem 0.4rem;
        border: 1px solid ${(props) => props.theme.grey_2};
        border-radius: 5px;

        span {
            margin-left: 0.5rem;
            color: ${(props) => props.theme.grey_6};
            ${(props) => props.theme.Body_3};
        }
    }
    .date-content {
        display: flex;
        align-items: center;
        justify-content: space-between;

        margin-bottom: 0.875rem;
        color: ${(props) => props.theme.grey_6};
        ${(props) => props.theme.Body_2}
    }

    input {
        width: 100%;
        padding: 0;
        border: none;
        color: ${(props) => props.theme.grey_6};
        &::placeholder {
            color: ${(props) => props.theme.grey_4};
        }
        &:disabled {
            background-color: transparent;
        }
        &.title {
            ${(props) => props.theme.Subhead_3}
            margin-bottom: 0.4rem;
        }
        &.content {
            ${(props) => props.theme.Body_2}
        }
    }
`;
