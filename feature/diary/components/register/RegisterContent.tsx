import styled from 'styled-components';
import Image from 'next/image';
import CalendarIcon from 'public/images/icons/calendar-icon.svg';
import Close from 'public/images/icons/close.svg';

interface RegisterContentPropsType {
    startDate?: string | string[];
    endDate?: string | string[];
    imgUrl: string[];
    diary: { title: string; content: string };
    onChangeContent: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleDelete: (index: number) => void;
}

const RegisterContent = ({
    startDate,
    endDate,
    imgUrl,
    diary,
    onChangeContent,
    handleDelete,
}: RegisterContentPropsType) => {
    return (
        <RegisterInputContainer>
            <div className="date-content">
                <CalendarIcon />
                <span>
                    {startDate === endDate
                        ? startDate
                        : `${startDate} - ${endDate}`}
                </span>
            </div>
            <input
                type="text"
                name="title"
                value={diary.title || ''}
                onChange={(e) => onChangeContent(e)}
            />
            <input
                type="text"
                name="content"
                value={diary.content || ''}
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
        color: ${(props) => props.theme.grey_6};
        ${(props) => props.theme.Body_2}
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
