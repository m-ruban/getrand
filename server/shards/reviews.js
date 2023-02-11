import { host } from 'modules/links';

import fetcher from 'server/fetcher';

const articlesByType = async (req, res) => {
    let articles = [];
    let pagination = [];
    const page = req.query?.page || 0;
    const url = `/api/v1/reviews/${page}/?limit=10`;
    try {
        const response = await fetcher.get(`${host}${url}`);
        articles = response.data.articles;
        pagination = response.data.pagination;
    } catch (_) {}
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
        const response = await fetcher.get(`${host}${url}`);
        articles = response.data.articles;
    } catch (_) {}
    res.contentType('application/json');
    res.status(200);
    res.json({ articles });
};

export { articlesByIds, articlesByType };
