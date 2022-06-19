import React from 'react';
import loadable from '@loadable/component';

const Main = loadable(() => import('pages/Main'));
const Guides = loadable(() => import('pages/Guides'));
const Reviews = loadable(() => import('pages/Reviews'));
const Games = loadable(() => import('pages/Games'));
const About = loadable(() => import('pages/About'));
const FAQ = loadable(() => import('pages/FAQ'));

const routes = [
    {
        path: '/',
        exact: true,
        component: () => <Main />,
        api: () => [
            '/api/v1/announce/',
            '/api/v1/categories/',
            '/api/v1/reviews/?limit=6',
            '/api/v1/walkthrough/?limit=4',
            '/api/v1/companies/?limit=4',
            '/api/v1/reviews/popular/',
            '/api/v1/walkthrough/popular/',
            '/api/v1/meta-tags/?keyword=main',
        ],
        getInitState: ([
            announce,
            categories,
            reviews,
            guides,
            companies,
            popularReviews,
            popularGuides,
            metaTags,
        ]) => ({
            announce: announce.data,
            mainCategories: categories.data,
            lastReviews: reviews.data,
            lastGuides: guides.data,
            lastCompanies: companies.data,
            popularReviews: popularReviews.data,
            popularGuides: popularGuides.data,
            metaTags: metaTags.data,
        }),
    },
    {
        path: '/reviews/:page?/',
        exact: true,
        component: () => <Reviews />,
        api: ({ page }) => {
            return [
                '/api/v1/reviews/breadcrumbs/',
                '/api/v1/reviews/popular/',
                '/api/v1/walkthrough/popular/',
                `/api/v1/reviews/?limit=11&page=${page || 0}`,
                `/api/v1/reviews/pagination/${page || 0}/`,
                '/api/v1/meta-tags/?keyword=reviews',
                '/api/v1/categories/?limit=4',
            ];
        },
        getInitState: ([breadcrumbs, popularReviews, popularGuides, reviews, pagination, metaTags, categories]) => ({
            breadcrumbs: breadcrumbs.data,
            popularReviews: popularReviews.data,
            popularGuides: popularGuides.data,
            reviews: reviews.data,
            pagination: pagination.data,
            metaTags: metaTags.data,
            mainCategories: categories.data,
        }),
    },
    {
        path: '/walkthrough/:page?/',
        exact: true,
        component: () => <Guides />,
        api: ({ page }) => {
            return [
                '/api/v1/walkthrough/breadcrumbs/',
                '/api/v1/reviews/popular/',
                '/api/v1/walkthrough/popular/',
                `/api/v1/walkthrough/?limit=11&page=${page || 0}`,
                `/api/v1/walkthrough/pagination/${page || 0}/`,
                '/api/v1/meta-tags/?keyword=walkthrough',
                '/api/v1/categories/?limit=4',
            ];
        },
        getInitState: ([breadcrumbs, popularReviews, popularGuides, guides, pagination, metaTags, categories]) => ({
            breadcrumbs: breadcrumbs.data,
            popularReviews: popularReviews.data,
            popularGuides: popularGuides.data,
            guides: guides.data,
            pagination: pagination.data,
            metaTags: metaTags.data,
            mainCategories: categories.data,
        }),
    },
    {
        path: '/games/:page?/',
        exact: true,
        component: () => <Games />,
        api: ({ page }) => {
            return [
                '/api/v1/reviews/popular/',
                '/api/v1/walkthrough/popular/',
                '/api/v1/categories/?limit=4',
                `/api/v1/games/${page || 1}/?limit=10`,
            ];
        },
        getInitState: ([popularReviews, popularGuides, categories, page]) => {
            return {
                popularReviews: popularReviews.data,
                popularGuides: popularGuides.data,
                mainCategories: categories.data,
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
            return [
                '/api/v1/reviews/popular/',
                '/api/v1/walkthrough/popular/',
                '/api/v1/categories/?limit=4',
                '/api/v1/faq/',
            ];
        },
        getInitState: ([popularReviews, popularGuides, categories, page]) => {
            return {
                popularReviews: popularReviews.data,
                popularGuides: popularGuides.data,
                mainCategories: categories.data,
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
            return [
                '/api/v1/reviews/popular/',
                '/api/v1/walkthrough/popular/',
                '/api/v1/categories/?limit=4',
                '/api/v1/about/',
            ];
        },
        getInitState: ([popularReviews, popularGuides, categories, page]) => {
            return {
                popularReviews: popularReviews.data,
                popularGuides: popularGuides.data,
                mainCategories: categories.data,
                metaTags: page.data.metaTags,
                breadcrumbs: page.data.breadcrumbs,
            };
        },
    },
];

export default routes;
