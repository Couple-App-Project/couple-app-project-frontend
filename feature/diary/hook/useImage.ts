import { useState } from 'react';

type useImageType = [
    File[],
    string[],
    (e: React.ChangeEvent<HTMLInputElement> | any) => Promise<void>,
    (index: number) => void,
];

const useImage = (): useImageType => {
    const [imgFile, setImgFile] = useState<File[]>([]);
    const [imgUrl, setImgUrl] = useState<string[]>([]);

    const handleUpload = async (
        e: React.ChangeEvent<HTMLInputElement> | any,
    ) => {
        const imageLists = e.target.files!;

        let imageUrlLists = [...imgUrl];

        let imagesFileLists = [...imgFile];

        if (5 < imageLists.length) {
            alert('사진은 최대 5장까지만 업로드 가능합니다.');
        } else {
            for (let i = 0; i < imageLists.length; i++) {
                const currentImageUrl = URL.createObjectURL(imageLists[i]);
                imageUrlLists.push(currentImageUrl);
                imagesFileLists.push(imageLists[i]);
            }
        }

        setImgUrl(imageUrlLists);
        setImgFile(imagesFileLists);
    };

    const handleDelete = (index: number) => {
        setImgUrl([...imgUrl.filter((_, i) => i !== index)]);
        setImgFile([...imgFile.filter((_, i) => i !== index)]);
    };

    return [imgFile, imgUrl, handleUpload, handleDelete];
};

export default useImage;
