export const host = 'http://gamespirit.org';

export const REVIEWS = 'reviews';

export const GUIDES = 'walkthrough';

export const EMPTY_IMAGE = 'http://gamespirit.org/img/content/no-image.png';

const getRandPages = ['', `${REVIEWS}/`, `${GUIDES}/`, 'games/', 'faq/', 'about/', 'companies/'];

export const articleLink = (section: string, keyword: string): string => {
    return `/${section}/${keyword}/`;
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
    return `${host}/categories${path}`;
};

export const companyLink = (path: string): string => {
    return `/companies/${path}/`;
};

export const altIconImgSrc = (image: string): string => {
    return `${host}/image/icon/alt/${image}`;
};

export const sectionLink = (path: string): string => {
    if (getRandPages.includes(path)) {
        return `/${path}`;
    }
    return `${host}/${path}`;
};
