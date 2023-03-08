import styled from 'styled-components';
import { changeDate } from 'utils/functions';
import CalendarIcon from 'public/images/icons/calendar-icon.svg';

interface ContentPropsType {
    title: string;
    content: string;
    _onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    disabled: boolean;
    date: string;
}

const Content = ({
    title,
    content,
    _onChange,
    disabled,
    date,
}: ContentPropsType) => {
    return (
        <ContentContainer>
            <div className="date-content">
                <CalendarIcon />
                <span>{changeDate(new Date(date))}</span>
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
};

export default Content;

const ContentContainer = styled.div`
    .date-content {
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
