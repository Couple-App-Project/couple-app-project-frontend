import React, { useState } from 'react';
import AWS from 'aws-sdk';

type useS3UploadType = [
    (e: React.ChangeEvent<HTMLInputElement>) => void,
    string[],
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

    const uploadFile = () => {
        let fileUrlList: string[] = [];

        for (let i = 0; i < imagesFile.length; i++) {
            const fileName = imagesFile[i].name.replaceAll(' ', '');
            const params = {
                ACL: 'public-read',
                Body: imagesFile[i],
                Bucket: process.env.NEXT_PUBLIC_S3_BUCKET,
                Key: fileName,
            } as any;

            myBucket
                .putObject(params)
                .on('httpUploadProgress', (evt) => {})
                .send((err) => {
                    if (err) console.log(err);
                });
            myBucket.getSignedUrl(
                'getObject',
                {
                    Bucket: params.Bucket,
                    Key: params.Key,
                },
                (err, url) => {
                    if (err) {
                        throw err;
                    }
                    fileUrlList.push(url);
                },
            );
        }
        setFileUrl(fileUrlList);
    };

    return [uploadToClient, imagesUrl, uploadFile, fileUrl];
};

export default useS3Upload;
