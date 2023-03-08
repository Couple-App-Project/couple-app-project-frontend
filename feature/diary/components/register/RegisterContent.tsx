import styled from 'styled-components';
import Image from 'next/image';
import Close from 'public/images/icons/close.svg';
import Content from '../common/Content';

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
            <Content
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
