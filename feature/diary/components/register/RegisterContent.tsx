import styled from 'styled-components';
import Image from 'next/image';
import CalendarIcon from 'public/images/icons/calendar-icon.svg';
import Close from 'public/images/icons/close.svg';
import { changeDate } from 'utils/functions';

interface RegisterContentPropsType {
    startDate: string;
    imgUrl: string[];
    diary: { title: string; content: string };
    onChangeContent: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleDelete: (index: number) => void;
}

const RegisterContent = ({
    startDate,
    imgUrl,
    diary,
    onChangeContent,
    handleDelete,
}: RegisterContentPropsType) => {
    return (
        <RegisterInputContainer>
            <div className="date-content">
                <CalendarIcon />
                <span>{changeDate(new Date(startDate))}</span>
            </div>
            <input
                type="text"
                value={diary.title || ''}
                placeholder="제목"
                className="title"
                onChange={(e) => onChangeContent(e)}
            />
            <input
                type="text"
                value={diary.content || ''}
                placeholder="둘만의 이야기를 기록해 보세요."
                className="content"
                onChange={(e) => onChangeContent(e)}
            />
            {imgUrl &&
                imgUrl.map((el, i) => {
                    return (
                        <div key={i} className="image-content">
                            <Image
                                src={el}
                                alt="사용자 이미지"
                                layout="fill"
                                objectFit="fill"
                            />
                            <span onClick={() => handleDelete(i)}>
                                <Close />
                            </span>
                        </div>
                    );
                })}
        </RegisterInputContainer>
    );
};

export default RegisterContent;

const RegisterInputContainer = styled.div`
    padding: 0 1.5rem;
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
        &::placeholder {
            color: ${(props) => props.theme.grey_4};
        }
        &.title {
            ${(props) => props.theme.Subhead_3}
            margin-bottom: 0.4rem;
        }
        &.content {
            ${(props) => props.theme.Body_2}
        }
    }

    .image-content {
        position: relative;
        width: 5rem;
        height: 5rem;

        span {
            position: absolute;
            z-index: 5;
            top: 0;
            right: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 1.25rem;
            height: 1.25rem;
            background-color: #00000050;

            svg > path {
                stroke: #fff;
            }
        }
    }
`;
