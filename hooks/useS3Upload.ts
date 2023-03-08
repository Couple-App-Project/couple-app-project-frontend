import React, { useState } from 'react';
import AWS from 'aws-sdk';

type useS3UploadType = [
    (e: React.ChangeEvent<HTMLInputElement>) => void,
    string[],
    (value: string) => void,
    () => void,
    string[],
];

const useS3Upload = (): useS3UploadType => {
    AWS.config.update({
        accessKeyId: process.env.NEXT_PUBLIC_ACCESS_KEY,
        secretAccessKey: process.env.NEXT_PUBLIC_SECRET_ACCESS_KEY,
    });

    const myBucket = new AWS.S3({
        params: { Bucket: process.env.NEXT_PUBLIC_S3_BUCKE },
        region: process.env.NEXT_PUBLIC_S3_BUCKET_REGION,
    });

    const [imagesUrl, setImagesUrl] = useState<string[]>([]);
    const [imagesFile, setImagesFile] = useState<FileList[]>([]);
    const [fileUrl, setFileUrl] = useState<string[]>([]);

    const uploadToClient = (e: React.ChangeEvent<HTMLInputElement>) => {
        const imageLists = e.target.files;

        let imageUrlLists = [...imagesUrl];

        let imagesFileLists = [...imagesFile];
        //@ts-ignore
        if (5 < imageLists.length) {
            alert('사진은 최대 5장 이상만 업로드 가능합니다.');
        } else {
            //@ts-ignore
            for (let i = 0; i < imageLists.length; i++) {
                //@ts-ignore
                const currentImageUrl = URL.createObjectURL(imageLists[i]);
                imageUrlLists.push(currentImageUrl);
                //@ts-ignore
                imagesFileLists.push(imageLists[i]);
            }
        }

        setImagesUrl(imageUrlLists);
        setImagesFile(imagesFileLists);
    };

    const deleteToClient = (value: string) => {
        const index = imagesUrl.findIndex((v) => v === value);
        const newImagesUrl = imagesUrl.filter((v) => v !== value);
        const newImagesFile = imagesFile.filter((v, i) => i !== index);

        setImagesUrl(newImagesUrl);
        setImagesFile(newImagesFile);
    };

    const uploadFile = () => {
        let fileUrlList: string[] = [];

        for (let i = 0; i < imagesFile.length; i++) {
            //@ts-ignore
            const fileName = imagesFile[i].name.replaceAll(' ', '');
            const params = {
                ACL: 'public-read',
                Body: imagesFile[i],
                Bucket: process.env.NEXT_PUBLIC_S3_BUCKET,
                Key: fileName,
            } as any;

            const upload = myBucket.upload(params);
            const promise = upload.promise();
            promise.then(
                (data) => {
                    fileUrlList.push(data.Location);
                },
                (err) => {
                    console.log(err);
                },
            );
        }
        setFileUrl(fileUrlList);
    };

    return [uploadToClient, imagesUrl, deleteToClient, uploadFile, fileUrl];
};

export default useS3Upload;
