import { MetaTags } from 'models/metaTags';

import { host } from 'modules/links';

const tags = ({ title, description, keywords, canonical }: MetaTags, path: string, preview: string): string => {
    const defaultPreviewTag = `${host}/img/logo/gs_preview.jpg`;
    const tags = [
        `<title>${title}</title>`,
        `<meta name="description" lang="ru" content="${description}" />`,
        `<meta name="keywords" content="${keywords}"/>`,
        `<meta property="og:title" content="${title}" />`,
        `<meta property="og:image" content="${preview || defaultPreviewTag}" />`,
        `<meta property="og:url" content="${host}${path}" />`,
        `<link rel="canonical" href="${host}${canonical}" />`,
        `<meta name="twitter:card" content="summary_large_image" />`,
    ];
    return tags.join('');
};

export default tags;
