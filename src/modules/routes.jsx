import Main from 'pages/Main';
import Reviews from 'pages/Reviews';

const routes = [
    {
        path: '/',
        exact: true,
        component: Main,
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
        component: Reviews,
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
];

export default routes;
