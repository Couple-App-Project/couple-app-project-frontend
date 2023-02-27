import { useState } from 'react';
import AWS from 'aws-sdk';

AWS.config.update({
    accessKeyId: process.env.NEXT_PUBLIC_ACCESS_KEY,
    secretAccessKey: process.env.NEXT_PUBLIC_SECRET_ACCESS_KEY,
});

const myBucket = new AWS.S3({
    params: { Bucket: process.env.NEXT_PUBLIC_S3_BUCKE },
    region: process.env.NEXT_PUBLIC_S3_BUCKET_REGION,
});

const WriteInput = () => {
    const [imagesFile, setImagesFile] = useState([]);

    const [imagesUrl, setImagesUrl] = useState([]);
    console.log(imagesUrl);

    const uploadToClient = (e: any) => {
        const fileArr = e.target.files;

        let fileURLs = [];

        let file;
        let filesLength = fileArr.length > 10 ? 10 : fileArr.length;

        for (let i = 0; i < filesLength; i++) {
            file = fileArr[i];

            let reader = new FileReader();
            reader.onload = () => {
                console.log(reader.result);
                fileURLs[i] = reader.result;
                setImagesUrl([...fileURLs]);
            };
            reader.readAsDataURL(file);
        }
        // if (e.target.files && e.target.files[0]) {
        //     const i = e.target.files[0];
        //     setImagesFile(i);
        //     setImagesUrl(i);
        // }
    };

    const uploadFile = (file) => {
        const fileName = file.name.replaceAll(' ', '');
        const params = {
            ACL: 'public-read',
            Body: file,
            Bucket: process.env.NEXT_PUBLIC_S3_BUCKET,
            Key: fileName,
        };

        myBucket
            .putObject(params)
            .on('httpUploadProgress', (evt, response) => {})
            .send((err, res) => {
                if (err) console.log(err);
                console.log(res);
            });
    };

    return (
        <>
            {/* {imagesUrl &&
                imagesUrl?.map((el, i) => {
                    return <img src={el} key={i} />;
                })} */}
            <input
                type="file"
                accept="image/jpg,image/png,image/jpeg,image/gif"
                multiple
                onChange={(e) => uploadToClient(e)}
            />
            <button onClick={() => uploadFile(imagesFile)}>
                {' '}
                Upload to S3
            </button>
        </>
    );
};

export default WriteInput;
