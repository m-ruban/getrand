import React from 'react';
import loadable from '@loadable/component';

const Main = loadable(() => import('pages/Main'));
const Guides = loadable(() => import('pages/Guides'));
const Reviews = loadable(() => import('pages/Reviews'));
const Games = loadable(() => import('pages/Games'));
const About = loadable(() => import('pages/About'));
const FAQ = loadable(() => import('pages/FAQ'));
const Companies = loadable(() => import('pages/Companies'));
const Article = loadable(() => import('pages/Article'));
const Company = loadable(() => import('pages/Company'));
const UserArticles = loadable(() => import('pages/UserArticles'));
const CategoryArticles = loadable(() => import('pages/CategoryArticles'));
const Search = loadable(() => import('pages/Search'));
const Classifications = loadable(() => import('pages/Classifications'));
const NotFound = loadable(() => import('pages/NotFound'));

import { param2str } from 'modules/query';

const pageRe = ':page([0-9]+)?';
const lvlRe = '([a-zA-Z0-9-]+)';
const basicCategoryPage = {
    exact: true,
    component: () => <CategoryArticles />,
    api: ({ page, ...path }) => {
        return [
            `/api/v1/categories-tree/articles/?path=${Object.values(path).join('.')}&page=${page || 1}&limit=10`,
            '/api/v1/populars/?categories=true',
        ];
    },
    vkWidget: false,
    getInitState: ([page, populars]) => ({
        breadcrumbs: page.data.breadcrumbs,
        articles: page.data.articles,
        pagination: page.data.pagination,
        metaTags: page.data.metaTags,
        mainCategories: populars.data.categories,
        popularReviews: populars.data.reviews,
        popularGuides: populars.data.guides,
    }),
};

export const route404 = {
    component: () => <NotFound />,
    api: () => [],
    vkWidget: false,
    getInitState: () => ({}),
};

const routes = [
    {
        path: '/',
        exact: true,
        component: () => <Main />,
        api: () => ['/api/v1/main/', '/api/v1/populars/'],
        vkWidget: false,
        getInitState: ([page, populars]) => ({
            announce: page.data.announce,
            mainCategories: page.data.categories,
            lastReviews: page.data.reviews,
            lastGuides: page.data.guides,
            lastCompanies: page.data.companies,
            popularReviews: populars.data.reviews,
            popularGuides: populars.data.guides,
            metaTags: page.data.metaTags,
        }),
    },
    {
        path: `/reviews/${pageRe}/`,
        exact: true,
        component: () => <Reviews />,
        api: ({ page }) => {
            return [`/api/v1/reviews/${page || 0}/?limit=10`, '/api/v1/populars/?categories=true'];
        },
        vkWidget: false,
        getInitState: ([page, populars]) => ({
            breadcrumbs: page.data.breadcrumbs,
            reviews: page.data.articles,
            pagination: page.data.pagination,
            metaTags: page.data.metaTags,
            mainCategories: populars.data.categories,
            popularReviews: populars.data.reviews,
            popularGuides: populars.data.guides,
        }),
    },
    {
        path: `/walkthrough/${pageRe}/`,
        exact: true,
        component: () => <Guides />,
        api: ({ page }) => {
            return [`/api/v1/walkthrough/${page || 0}/?limit=10`, '/api/v1/populars/?categories=true'];
        },
        vkWidget: false,
        getInitState: ([page, populars]) => ({
            breadcrumbs: page.data.breadcrumbs,
            guides: page.data.articles,
            pagination: page.data.pagination,
            metaTags: page.data.metaTags,
            mainCategories: populars.data.categories,
            popularReviews: populars.data.reviews,
            popularGuides: populars.data.guides,
        }),
    },
    {
        path: `/games/${pageRe}/`,
        exact: true,
        component: () => <Games />,
        api: ({ page }) => {
            return [`/api/v1/games/${page || 1}/?limit=10`, '/api/v1/populars/?categories=true'];
        },
        vkWidget: false,
        getInitState: ([page, populars]) => {
            return {
                mainCategories: populars.data.categories,
                popularReviews: populars.data.reviews,
                popularGuides: populars.data.guides,
                games: page.data.games,
                breadcrumbs: page.data.breadcrumbs,
                pagination: page.data.pagination,
                metaTags: page.data.metaTags,
            };
        },
    },
    {
        path: '/faq/',
        exact: true,
        component: () => <FAQ />,
        api: () => {
            return ['/api/v1/faq/', '/api/v1/populars/?categories=true'];
        },
        vkWidget: false,
        getInitState: ([page, populars]) => {
            return {
                mainCategories: populars.data.categories,
                popularReviews: populars.data.reviews,
                popularGuides: populars.data.guides,
                faq: page.data.faq,
                metaTags: page.data.metaTags,
                breadcrumbs: page.data.breadcrumbs,
            };
        },
    },
    {
        path: '/about/',
        exact: true,
        component: () => <About />,
        api: () => {
            return ['/api/v1/about/', '/api/v1/populars/?categories=true'];
        },
        vkWidget: false,
        getInitState: ([page, populars]) => {
            return {
                mainCategories: populars.data.categories,
                popularReviews: populars.data.reviews,
                popularGuides: populars.data.guides,
                metaTags: page.data.metaTags,
                breadcrumbs: page.data.breadcrumbs,
            };
        },
    },
    {
        path: `/companies/${pageRe}/`,
        exact: true,
        component: () => <Companies />,
        api: ({ page }) => {
            return [`/api/v1/companies/${page || 1}/?limit=10`, '/api/v1/populars/?categories=true'];
        },
        vkWidget: false,
        getInitState: ([page, populars]) => {
            return {
                mainCategories: populars.data.categories,
                popularReviews: populars.data.reviews,
                popularGuides: populars.data.guides,
                companies: page.data.companies,
                metaTags: page.data.metaTags,
                breadcrumbs: page.data.breadcrumbs,
                pagination: page.data.pagination,
            };
        },
    },
    {
        path: '/reviews/:keyword([a-zA-Z0-9-]+)/',
        exact: true,
        component: () => <Article />,
        api: ({ keyword }) => {
            return [`/api/v1/reviews/${keyword}/`, '/api/v1/populars/?categories=true'];
        },
        vkWidget: true,
        getInitState: ([page, populars]) => ({
            mainCategories: populars.data.categories,
            popularReviews: populars.data.reviews,
            popularGuides: populars.data.guides,
            article: page.data.article,
            metaTags: page.data.metaTags,
            breadcrumbs: page.data.breadcrumbs,
        }),
    },
    {
        path: '/walkthrough/:keyword([a-zA-Z0-9-]+)/',
        exact: true,
        component: () => <Article />,
        api: ({ keyword }) => {
            return [`/api/v1/walkthrough/${keyword}/`, '/api/v1/populars/?categories=true'];
        },
        vkWidget: true,
        getInitState: ([page, populars]) => ({
            mainCategories: populars.data.categories,
            popularReviews: populars.data.reviews,
            popularGuides: populars.data.guides,
            article: page.data.article,
            metaTags: page.data.metaTags,
            breadcrumbs: page.data.breadcrumbs,
        }),
    },
    {
        path: '/companies/:keyword([a-zA-Z0-9-]+)/',
        exact: true,
        component: () => <Company />,
        api: ({ keyword }) => {
            return [`/api/v1/companies/${keyword}/`, '/api/v1/populars/?categories=true'];
        },
        vkWidget: true,
        getInitState: ([page, populars]) => ({
            mainCategories: populars.data.categories,
            popularReviews: populars.data.reviews,
            popularGuides: populars.data.guides,
            company: page.data.company,
            metaTags: page.data.metaTags,
            breadcrumbs: page.data.breadcrumbs,
        }),
    },
    {
        path: `/users/:login([a-zA-Z0-9-]+)/${pageRe}/`,
        exact: true,
        component: () => <UserArticles />,
        api: ({ login, page }) => {
            return [`/api/v1/users/${login}/${page || 1}/?limit=10`, '/api/v1/populars/?categories=true'];
        },
        vkWidget: false,
        getInitState: ([page, populars]) => ({
            breadcrumbs: page.data.breadcrumbs,
            articles: page.data.articles,
            pagination: page.data.pagination,
            metaTags: page.data.metaTags,
            mainCategories: populars.data.categories,
            popularReviews: populars.data.reviews,
            popularGuides: populars.data.guides,
        }),
    },
    {
        path: `/search/`,
        exact: false,
        component: () => <Search />,
        api: (_, { query, type, page }) => {
            const types = param2str('type', type);
            const params = [`query=${encodeURI(query || '')}`, `page=${page || 1}`, 'limit=10'];
            if (types) {
                params.push(types);
            }
            return [`/api/v1/search/?${params.join('&')}`, '/api/v1/populars/?categories=true'];
        },
        vkWidget: false,
        getInitState: ([page, populars]) => ({
            breadcrumbs: page.data.breadcrumbs,
            articles: page.data.articles,
            pagination: page.data.pagination,
            metaTags: page.data.metaTags,
            mainCategories: populars.data.categories,
            popularReviews: populars.data.reviews,
            popularGuides: populars.data.guides,
            searchCriteria: page.data.searchCriteria,
        }),
    },
    {
        path: `/categories/:lvl1${lvlRe}/${pageRe}/`,
        ...basicCategoryPage,
    },
    {
        path: `/categories/:lvl1${lvlRe}/:lvl2${lvlRe}/${pageRe}/`,
        ...basicCategoryPage,
    },
    {
        path: `/categories/:lvl1${lvlRe}/:lvl2${lvlRe}/:lvl3${lvlRe}/${pageRe}/`,
        ...basicCategoryPage,
    },
    {
        path: `/categories/`,
        exact: true,
        component: () => <Classifications />,
        vkWidget: false,
        api: () => {
            return [`/api/v1/categories-tree/`, '/api/v1/populars/?categories=true'];
        },
        getInitState: ([page, populars]) => ({
            breadcrumbs: page.data.breadcrumbs,
            classifications: page.data.classifications,
            metaTags: page.data.metaTags,
            mainCategories: populars.data.categories,
            popularReviews: populars.data.reviews,
            popularGuides: populars.data.guides,
        }),
    },
    route404,
];

export default routes;
