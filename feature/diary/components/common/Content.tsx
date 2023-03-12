import styled from 'styled-components';
import { changeDate } from 'utils/functions';
import CalendarIcon from 'public/images/icons/calendar-icon.svg';
import Edit from 'public/images/icons/edit.svg';
import { useRouter } from 'next/router';

interface ContentPropsType {
    title: string;
    content: string;
    _onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    disabled: boolean;
    date: string;
    edit: boolean;
    id?: any;
}

const Content = ({
    title,
    content,
    _onChange,
    disabled,
    date,
    edit,
    id,
}: ContentPropsType) => {
    const router = useRouter();
    return (
        <ContentContainer>
            <div className="date-content">
                <div>
                    <CalendarIcon />
                    <span>{changeDate(new Date(date))}</span>
                </div>
                {edit && (
                    <div>
                        <Edit
                            onClick={() => router.push(`/diary/register/${id}`)}
                        />
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
    .date-content {
        display: flex;
        align-items: center;
        justify-content: space-between;

        margin-bottom: 0.875rem;
        color: ${(props) => props.theme.grey_6};
        ${(props) => props.theme.Body_2}

        span {
            margin-left: 0.4rem;
        }
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