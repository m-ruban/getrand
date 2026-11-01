import { ReactNode } from 'react';
import { en } from 'lang/en';
import { ru } from 'lang/ru';

export type Language = 'ru' | 'en';
export type TrlKey = keyof typeof ru;

type DynamicTrlKey = {
    [K in TrlKey]: typeof ru[K] extends string ? never : K;
}[TrlKey];
export type StaticTrlKey = Exclude<TrlKey, DynamicTrlKey>;
type TrlParams<K extends DynamicTrlKey> = Parameters<typeof ru[K]>[0];

const dictionaries = { ru, en };

function getTrl(key: StaticTrlKey, language?: Language): string;
function getTrl<K extends DynamicTrlKey>(key: K, params: TrlParams<K>, language?: Language): ReactNode;
function getTrl(
    key: TrlKey,
    paramsOrLanguage?: TrlParams<DynamicTrlKey> | Language,
    language: Language = 'ru'
): ReactNode {
    const selectedLanguage = typeof paramsOrLanguage === 'string' ? paramsOrLanguage : language;
    const translation = dictionaries[selectedLanguage][key];
    if (typeof translation === 'function') {
        const render = translation as (params: TrlParams<DynamicTrlKey>) => ReactNode;
        return render(paramsOrLanguage as TrlParams<DynamicTrlKey>);
    }
    return translation;
}

export { getTrl };
