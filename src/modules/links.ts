import { languagePath } from 'lang/language';

export const host = 'https://gamespirit.org';

export const REVIEWS = 'reviews';

export const GUIDES = 'walkthrough';

export const EMPTY_IMAGE = `${host}/img/content/no-image.png`;

const getRandPages = ['', `${REVIEWS}/`, `${GUIDES}/`, 'games/', 'faq/', 'about/', 'companies/', 'categories/'];

export const articleLink = (section: string, keyword: string): string => {
    return languagePath(`/${section}/${keyword}/`);
};

export const imgFullSrc = (keyword: string, image: string): string => {
    return `${host}/image/${keyword}/${image}`;
};

export const imgSrc = (keyword: string, image: string, isOld = false): string => {
    const prefix = isOld ? '' : 'preload_';
    return `${host}/image/${keyword}/${prefix}${image}`;
};

export const gallerySrcImg = (path: string): string => {
    return `${host}${path}`;
};

export const categoryLink = (path: string): string => {
    return languagePath(`/categories${path}`);
};

export const companyLink = (path: string): string => {
    return languagePath(`/companies/${path}/`);
};

export const altIconImgSrc = (image: string): string => {
    return `${host}/image/icon/alt/${image}`;
};

export const sectionLink = (path: string): string => {
    if (getRandPages.includes(path)) {
        return languagePath(`/${path}`);
    }
    return `${host}${languagePath(`/${path}`)}`;
};

export const localizedLink = (url: string): string => {
    if (url.startsWith(`${host}/`)) {
        return `${host}${languagePath(url.slice(host.length))}`;
    }
    return url.startsWith('/') && !url.startsWith('//') ? languagePath(url) : url;
};
