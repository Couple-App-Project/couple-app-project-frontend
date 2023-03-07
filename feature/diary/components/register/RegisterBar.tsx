import styled from 'styled-components';
import dynamic from 'next/dynamic';
import ImageUpload from 'public/images/icons/image-upload.svg';
import Emoticon from 'public/images/icons/emoticon.svg';
import { useState } from 'react';

interface RegisterBarPropsTtpe {
    handleUpload: (e: React.ChangeEvent<HTMLInputElement>) => Promise<void>;
    onEmojiClick: (emojiObject: any) => void;
}

const Picker = dynamic(
    () => {
        return import('emoji-picker-react');
    },
    { ssr: false },
);

const RegisterBar = ({ handleUpload, onEmojiClick }: RegisterBarPropsTtpe) => {
    const [showEmogi, setShowEmogi] = useState(false);
    return (
        <RegisterBarContainer>
            <div className="image-upload-content">
                <label htmlFor="upload">
                    <ImageUpload />
                </label>
                <input
                    id="upload"
                    type="file"
                    accept="image/jpg,image/png,image/jpeg,image/gif"
                    multiple
                    onChange={(e) => handleUpload(e)}
                />
            </div>
            <div className="emogi-content">
                <Emoticon onClick={() => setShowEmogi(!showEmogi)} />
                {showEmogi && <Picker onEmojiClick={onEmojiClick} />}
            </div>
        </RegisterBarContainer>
    );
};

export default RegisterBar;

const RegisterBarContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 1rem 2rem;
    border-top: 1px solid ${(props) => props.theme.grey_2};
    .image-upload-content {
        input {
            display: none;
        }
    }
    .emogi-content {
        margin-left: 1.75rem;
    }
`;
