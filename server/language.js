import { AsyncLocalStorage } from 'async_hooks';
import { getLanguage, setLanguageResolver } from 'lang/language';

export const TRANSLATION_COOKIE = 'i18n_test';
export const LANGUAGE_COOKIE = 'language';

export const languageFromCookies = (header = '') => {
    const cookies = header.split(';').reduce((result, cookie) => {
        const separator = cookie.indexOf('=');
        if (separator !== -1) {
            result[cookie.slice(0, separator).trim()] = cookie.slice(separator + 1).trim();
        }
        return result;
    }, {});
    return cookies[TRANSLATION_COOKIE] === '1' && cookies[LANGUAGE_COOKIE] === 'en' ? 'en' : 'ru';
};

export const apiLanguage = (url, language = getLanguage()) => {
    if (language === 'ru') {
        return url;
    }
    const separator = url.indexOf('?');
    const path = separator === -1 ? url : url.slice(0, separator);
    const query = separator === -1 ? '' : url.slice(separator + 1);
    const params = new URLSearchParams(query);
    params.set('lang', language);
    return `${path}?${params}`;
};

const languages = new AsyncLocalStorage();
setLanguageResolver(() => languages.getStore() || 'ru');

export const withLanguage = (handler) => (req, res, next) =>
    languages.run(languageFromCookies(req.headers.cookie), () => {
        res.set('Cache-Control', 'private, no-store');
        res.vary('Cookie');
        return handler(req, res, next);
    });
