import type { EmojiClickDataType } from './EmojiClickDataType';

interface RegisterBarPropsType {
    handleUpload: (e: React.ChangeEvent<HTMLInputElement>) => Promise<void>;
    onEmojiClick: (emojiObject: EmojiClickDataType) => void;
}

export type { RegisterBarPropsType };
