import type { StaticImageDataType } from 'types/StaticImageDataType';

interface Items {
    title: string;
    contentT: string;
    contentB: string;
    src: StaticImageDataType['src'];
    alt: string;
}

export interface SliderItemsType extends Array<Items> {}
