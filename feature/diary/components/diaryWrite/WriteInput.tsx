import styled from 'styled-components';
import useS3Upload from 'hooks/useS3Upload';
import CalendarIcon from 'public/images/icons/calendar-icon.svg';

const WriteInput = () => {
    const [uploadToClient, imagesUrl, uploadFile, fileUrl] = useS3Upload();
    return (
        <WriteInputContainer>
            <div className="date-content">
                <CalendarIcon />
                <span>날짜 받아와야 됨</span>
            </div>
            <input type="text" />
            <input type="text" />
            {imagesUrl &&
                imagesUrl.map((el, i) => {
                    return <img src={el} key={i} />;
                })}

            <button onClick={uploadFile}>Upload to S3</button>
        </WriteInputContainer>
    );
};

export default WriteInput;

const WriteInputContainer = styled.div``;
