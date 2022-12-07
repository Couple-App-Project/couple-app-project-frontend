import type { StaticImageData } from 'types/staticImageDataType';

interface Items {
    src: StaticImageData;
    alt: string;
}

export interface ItemsInterface extends Array<Items> {}
