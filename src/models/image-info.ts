export interface DimImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface FillImage {
  src: string;
  alt: string;
  fill: true;
}

export type ImageInfo = DimImage | FillImage;
