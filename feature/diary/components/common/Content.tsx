import { useRouter } from 'next/router';
import styled from 'styled-components';
import Delete from 'public/icons/trash.svg';
import CalendarIcon from 'public/images/icons/calendar-icon.svg';
import Edit from 'public/images/icons/edit.svg';
import { changeDate } from 'utils/functions';
import { pixelToRem } from 'utils/utils';
import type { ContentPropsType } from 'feature/diary/types';

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
        display: flex;
        justify-content: center;
        align-items: center;
        width: fit-content;
        margin-bottom: ${pixelToRem(16)};
        padding: ${pixelToRem(6)} ${pixelToRem(7)};
        border: 1px solid ${({ theme }) => theme.grey_2};
        border-radius: 5px;

        span {
            margin-left: ${pixelToRem(8)};
            color: ${({ theme }) => theme.grey_6};
            ${({ theme }) => theme.Body_3};
        }
    }
    .date-content {
        display: flex;
        align-items: center;
        justify-content: space-between;

        margin-bottom: ${pixelToRem(8)};
        color: ${({ theme }) => theme.grey_6};
        ${({ theme }) => theme.Body_2}
    }

    input {
        width: 100%;
        padding: 0;
        border: none;
        color: ${({ theme }) => theme.grey_6};
        &::placeholder {
            color: ${({ theme }) => theme.grey_4};
        }
        &:disabled {
            background-color: transparent;
        }
        &.title {
            ${({ theme }) => theme.Subhead_3}
            margin-bottom: ${pixelToRem(6)};
        }
        &.content {
            ${({ theme }) => theme.Body_2}
        }
    }
`;
