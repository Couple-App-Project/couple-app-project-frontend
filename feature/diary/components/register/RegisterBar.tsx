import dynamic from 'next/dynamic';
import { useState } from 'react';
import styled from 'styled-components';
import Emoticon from 'public/images/icons/emoticon.svg';
import ImageUpload from 'public/images/icons/image-upload.svg';
import type { RegisterBarPropsType } from 'feature/diary/types';

/**
 * 동적 가져오기
 */
const Picker = dynamic(
    () => {
        return import('emoji-picker-react');
    },
    { ssr: false },
);

const RegisterBar = ({ handleUpload, onEmojiClick }: RegisterBarPropsType) => {
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
