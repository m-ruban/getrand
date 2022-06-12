import { MetaTags } from 'models/metaTags';

import { host } from 'modules/links';

const tags = ({ title, description, keywords }: MetaTags, path: string): string => {
    const tags = [
        `<title>${title}</title>`,
        `<meta name="description" lang="ru" content="${description}" />`,
        `<meta name="keywords" content="${keywords}"/>`,
        `<meta property="og:title" content="${title}" />`,
        `<meta property="og:description" content="${description}" />`,
        `<meta property="og:image" content="${host}/img/logo/golem.png" />`,
        `<meta property="og:url" content="${host}${path}" />`,
    ];
    return tags.join('');
};

export default tags;
