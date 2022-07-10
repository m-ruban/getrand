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

const routes = [
    {
        path: '/',
        exact: true,
        component: () => <Main />,
        api: () => ['/api/v1/main/', '/api/v1/populars/'],
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
        path: '/reviews/:page([0-9]+)?/',
        exact: true,
        component: () => <Reviews />,
        api: ({ page }) => {
            return [`/api/v1/reviews/${page || 0}/?limit=11`, '/api/v1/populars/?categories=true'];
        },
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
        path: '/walkthrough/:page([0-9]+)?/',
        exact: true,
        component: () => <Guides />,
        api: ({ page }) => {
            return [`/api/v1/walkthrough/${page || 0}/?limit=11`, '/api/v1/populars/?categories=true'];
        },
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
        path: '/games/:page([0-9]+)?/',
        exact: true,
        component: () => <Games />,
        api: ({ page }) => {
            return [`/api/v1/games/${page || 1}/?limit=10`, '/api/v1/populars/?categories=true'];
        },
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
        path: '/companies/:page([0-9]+)?/',
        exact: true,
        component: () => <Companies />,
        api: ({ page }) => {
            return [`/api/v1/companies/${page || 1}/?limit=10`, '/api/v1/populars/?categories=true'];
        },
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
        getInitState: ([page, populars]) => ({
            mainCategories: populars.data.categories,
            popularReviews: populars.data.reviews,
            popularGuides: populars.data.guides,
            article: page.data.article,
            metaTags: page.data.metaTags,
            breadcrumbs: page.data.breadcrumbs,
        }),
    },
];

export default routes;
