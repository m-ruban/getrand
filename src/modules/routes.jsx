import Main from 'pages/Main';

const routes = [
    {
        path: '/',
        exact: true,
        component: Main,
        api: [
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
];

export default routes;
