import styled from 'styled-components';
import dynamic from 'next/dynamic';
import ImageUpload from 'public/images/icons/image-upload.svg';
import Emoticon from 'public/images/icons/emoticon.svg';
import { useState } from 'react';

interface RegisterBarPropsTtpe {
    handleUpload: (e: React.ChangeEvent<HTMLInputElement>) => Promise<void>;
}

const Picker = dynamic(
    () => {
        return import('emoji-picker-react');
    },
    { ssr: false },
);

const RegisterBar = ({ handleUpload }: RegisterBarPropsTtpe) => {
    const [showEmogi, setShowEmogi] = useState(false);
    return (
        <RegisterBarContainer>
            <div className="image-upload-content">
                <ImageUpload />
                <input
                    type="file"
                    accept="image/jpg,image/png,image/jpeg,image/gif"
                    multiple
                    onChange={(e) => handleUpload(e)}
                />
            </div>
            <div className="emogi-content">
                <Emoticon onClick={() => setShowEmogi(!showEmogi)} />
                {showEmogi && <Picker />}
            </div>
        </RegisterBarContainer>
    );
};

export default RegisterBar;

const RegisterBarContainer = styled.div`
    .image-upload-content {
        position: relative;
        input {
            position: absolute;
            top: 0;
            left: 0;
            opacity: 0;
            width: 22px;
            height: 20px;
        }
    }
`;
