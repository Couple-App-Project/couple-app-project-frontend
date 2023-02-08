import { DefaultTheme } from 'styled-components';

const pixelToRem = (size: number) => `${size / 16}rem`;

const defaultTheme: DefaultTheme = {
    primaryPink: '#ff6e7f',
    mediumPink: '#fadfe2',
    softPink: '#fff0f2',
    primaryBlue: '#19C1D8',
    mediumBlue: '#48CFE1',
    red: '#fa1c37',
    black: '#000',
    white: '#fff',
    grey_6: '#3b3d49',
    grey_5: '#5c5f6d',
    grey_4: '#a8aab2',
    grey_3: '#e2e4ea',
    grey_2: '#efefef',
    grey_1: '#f5f5f5',

    Title_1: `font-size: ${pixelToRem(28)};
    line-height: ${pixelToRem(39)};
    font-weight: 600;`,
    Title_2: `font-size: ${pixelToRem(24)};
    line-height: ${pixelToRem(33)};
    font-weight: 600;`,
    Title_3: `font-size: ${pixelToRem(20)};
    line-height: ${pixelToRem(28)};
    font-weight: 600;`,
    Title_4: `font-size: ${pixelToRem(16)};
    line-height: ${pixelToRem(22)};
    font-weight: 600;`,
    Title_5: `font-size: ${pixelToRem(14)};
    line-height: ${pixelToRem(20)};
    font-weight: 600;`,
    Title_6: `font-size: ${pixelToRem(12)};
    line-height: ${pixelToRem(17)};
    font-weight: 600;`,
    Subhead_1: `font-size: ${pixelToRem(24)};
    line-height: ${pixelToRem(33)};
    font-weight: 700;`,
    Subhead_2: `font-size: ${pixelToRem(20)};
    line-height: ${pixelToRem(28)};
    font-weight: 700;`,
    Subhead_3: `font-size: ${pixelToRem(16)};
    line-height: ${pixelToRem(22)};
    font-weight: 700;`,
    Subhead_4: `font-size: ${pixelToRem(14)};
    line-height: ${pixelToRem(20)};
    font-weight: 700;`,
    Subhead_5: `font-size: ${pixelToRem(12)};
    line-height: ${pixelToRem(17)};
    font-weight: 700;`,
    Body_1: `font-size: ${pixelToRem(16)};
    line-height: ${pixelToRem(22)};
    font-weight: 400;`,
    Body_2: `font-size: ${pixelToRem(14)};
    line-height: ${pixelToRem(20)};
    font-weight: 400;`,
    Body_3: `font-size: ${pixelToRem(12)};
    line-height: ${pixelToRem(17)};
    font-weight: 400;`,
    Body_4: `font-size: ${pixelToRem(10)};
    line-height: ${pixelToRem(15)};
    font-weight: 400;`,
    Uhbee: `font-size: ${pixelToRem(16)};
    line-height: ${pixelToRem(22)};`,
};

export default defaultTheme;
