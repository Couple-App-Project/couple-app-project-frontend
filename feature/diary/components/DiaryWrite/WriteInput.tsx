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
    const [imagesUrl, setImagesUrl] = useState([]);
    const [imagesFile, setImagesFile] = useState([]);

    const uploadToClient = (e: any) => {
        const imageLists = e.target.files;

        let imageUrlLists = [...imagesUrl];

        let imagesFileLists = [...imagesFile];

        if (5 < imageLists.length) {
            alert('사진은 최대 5장 이상만 업로드 가능합니다.');
        } else {
            for (let i = 0; i < imageLists.length; i++) {
                const currentImageUrl = URL.createObjectURL(imageLists[i]);
                imageUrlLists.push(currentImageUrl);
                imagesFileLists.push(imageLists[i]);
            }
        }

        setImagesUrl(imageUrlLists);
        setImagesFile(imagesFileLists);
    };

    const uploadFile = (file) => {
        for (let i = 0; i < file.length; i++) {
            const fileName = file[i].name.replaceAll(' ', '');
            const params = {
                ACL: 'public-read',
                Body: file[i],
                Bucket: process.env.NEXT_PUBLIC_S3_BUCKET,
                Key: fileName,
            };
            myBucket
                .putObject(params)
                .on('httpUploadProgress', (data) => {
                    console.log(data);
                })
                .send((err, data) => {
                    if (err) console.log(err);
                    console.log(data);
                });
        }
    };

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
