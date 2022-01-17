import {TypographyTypes, Weights} from './types';

export const fontWeightMap: Map<Weights, string> = new Map<Weights, string>([
  ['thin', 'font-thin'],
  ['extralight', 'font-extralight'],
  ['light', 'font-light'],
  ['normal', 'font-normal'],
  ['medium', 'font-medium'],
  ['semibold', 'font-semibold'],
  ['bold', 'font-bold'],
  ['extrabold', 'font-extrabold'],
  ['black', 'font-black'],
]);

export const typeDefaultStyleMap: Map<TypographyTypes, string> = new Map<TypographyTypes, string>([
  ['title', 'text-2xl'],
  ['subtitle', 'text-[.75rem] mt-[-.5rem]'],
]);

export const typeTagMap: Map<TypographyTypes, string> = new Map<TypographyTypes, string>([
  ['title', 'h1'],
  ['subtitle', 'p'],
  ['heading', 'h2'],
  ['subheading', 'h3'],
  ['subheading-2', 'h4'],
  ['paragraph', 'p'],
  ['text', 'span'],
  ['code', 'code'],
]);
