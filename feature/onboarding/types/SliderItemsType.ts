import type { StaticImageDataType } from 'types/StaticImageDataType';

interface Items {
    src: StaticImageDataType;
    alt: string;
}

export interface SliderItemsType extends Array<Items> {}
