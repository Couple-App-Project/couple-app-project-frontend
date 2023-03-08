export const pixelToRem = (size: number) => `${size / 16}rem`;

export const pixelToVh = (size: number) => {
    if ('undefined' != typeof screen) {
        // @ts-ignore
        return `${(size / screen.height).toFixed(2) * 100}vh`;
    }
};

export const pixelToVw = (size: number) => {
    if ('undefined' != typeof screen) {
        // @ts-ignore
        return `${(size / screen.width).toFixed(2) * 100}vw`;
    }
};
