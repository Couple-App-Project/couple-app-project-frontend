import useS3Upload from 'hooks/useS3Upload';

const WriteInput = () => {
    const [uploadToClient, imagesUrl, uploadFile, fileUrl] = useS3Upload();

    return (
        <>
            {imagesUrl.length &&
                imagesUrl.map((el, i) => {
                    return <img src={el} key={i} />;
                })}
            <input
                type="file"
                accept="image/jpg,image/png,image/jpeg,image/gif"
                multiple
                onChange={(e) => uploadToClient(e)}
            />
            <button onClick={() => uploadFile(imagesFile)}>Upload to S3</button>
        </>
    );
};

export default WriteInput;
