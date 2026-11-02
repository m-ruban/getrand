export type Language = 'ru' | 'en';

let resolveLanguage: () => Language = () => 'ru';

export const setLanguageResolver = (resolver: () => Language): void => {
    resolveLanguage = resolver;
};

export const getLanguage = (): Language => resolveLanguage();

export const stripLanguagePrefix = (url: string): string => url.replace(/^\/en(?=\/|\?|#|$)/, '') || '/';

export const languagePath = (url: string, language: Language = getLanguage()): string => {
    const path = stripLanguagePrefix(url);
    const normalized = `/${path.replace(/^[\\/]+/, '')}`;
    return language === 'en' ? `/en${normalized}` : normalized;
};
