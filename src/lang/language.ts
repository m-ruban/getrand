export type Language = 'ru' | 'en' | 'sr' | 'es';

export const isLanguage = (value: unknown): value is Language =>
    value === 'ru' || value === 'en' || value === 'sr' || value === 'es';

let resolveLanguage: () => Language = () => 'ru';

export const setLanguageResolver = (resolver: () => Language): void => {
    resolveLanguage = resolver;
};

export const getLanguage = (): Language => resolveLanguage();

export const stripLanguagePrefix = (url: string): string => url.replace(/^\/(?:en|sr|es)(?=\/|\?|#|$)/, '') || '/';

export const languagePath = (url: string, language: Language = getLanguage()): string => {
    const path = stripLanguagePrefix(url);
    const normalized = `/${path.replace(/^[\\/]+/, '')}`;
    return language === 'ru' ? normalized : `/${language}${normalized}`;
};
