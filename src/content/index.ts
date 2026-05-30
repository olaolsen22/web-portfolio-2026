import { en } from './translations/en';
import { nb } from './translations/nb';

export { en, nb };

export const translations = { en, nb } as const;

type DeepKeys<T, Prefix extends string = ''> = T extends object
  ? {
      [K in keyof T]: K extends string
        ? Prefix extends ''
          ? DeepKeys<T[K], K>
          : DeepKeys<T[K], `${Prefix}.${K}`>
        : never;
    }[keyof T]
  : Prefix;

export type TranslationKey = DeepKeys<typeof en>;
