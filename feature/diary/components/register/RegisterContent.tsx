import Image from 'next/image';
import styled from 'styled-components';
import Close from 'public/images/icons/close.svg';
import type { RegisterContentPropsType } from '../../types';
import Content from '../common/Content';

const RegisterContent = ({
    startDate,
    calendarTitle,
    imgUrl,
    diary,
    onChangeContent,
    handleDelete,
}: RegisterContentPropsType) => {
    return (
        <RegisterInputContainer>
            <Content
                calendarTitle={calendarTitle}
                title={diary.title}
                content={diary.content}
                _onChange={(e) => onChangeContent(e)}
                date={startDate}
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
