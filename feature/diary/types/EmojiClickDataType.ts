enum SkinTones {
    NEUTRAL = 'neutral',
    LIGHT = '1f3fb',
    MEDIUM_LIGHT = '1f3fc',
    MEDIUM = '1f3fd',
    MEDIUM_DARK = '1f3fe',
    DARK = '1f3ff',
}

enum EmojiStyle {
    NATIVE = 'native',
    APPLE = 'apple',
    TWITTER = 'twitter',
    GOOGLE = 'google',
    FACEBOOK = 'facebook',
}

export declare type EmojiClickDataType = {
    activeSkinTone: SkinTones;
    unified: string;
    unifiedWithoutSkinTone: string;
    emoji: string;
    names: string[];
    getImageUrl: (emojiStyle: EmojiStyle) => string;
};
