import { host } from 'modules/links';

import fetcher from 'server/fetcher';
import { apiLanguage, withLanguage } from 'server/language';
import { captureServerError } from 'server/sentry';

const articlesByType = async (req, res) => {
    let articles = [];
    let pagination = [];
    const page = req.query?.page || 0;
    const url = `/api/v1/reviews/${page}/?limit=10`;
    try {
        const response = await fetcher.get(apiLanguage(`${host}${url}`));
        articles = response.data.articles;
        pagination = response.data.pagination;
    } catch (error) {
        if (error.response?.status !== 404) {
            captureServerError(error, { api: url.split('?')[0] });
        }
    }
    res.contentType('application/json');
    res.status(200);
    res.json({ articles, pagination });
};

const articlesByIds = async (req, res) => {
    let articles = [];
    const ids = req.query?.id || [];
    const params = ids.map((id) => 'id[]=' + id).join('&');
    const url = '/api/v1/articlies-by-ids/?' + params;
    try {
        const response = await fetcher.get(apiLanguage(`${host}${url}`));
        articles = response.data.articles;
    } catch (error) {
        if (error.response?.status !== 404) {
            captureServerError(error, { api: url.split('?')[0] });
        }
    }
    res.contentType('application/json');
    res.status(200);
    res.json({ articles });
};

const localizedArticlesByIds = withLanguage(articlesByIds);
const localizedArticlesByType = withLanguage(articlesByType);
export { localizedArticlesByIds as articlesByIds, localizedArticlesByType as articlesByType };
