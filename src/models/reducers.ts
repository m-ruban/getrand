import { Reducer } from '@reduxjs/toolkit';

import announce from 'models/announce';
import breadcrumbs from 'models/breadcrumbs';
import lastCompanies from 'models/lastCompanies';
import lastGuides from 'models/lastGuides';
import lastReviews from 'models/lastReviews';
import mainCategories from 'models/mainCategories';
import metaTags from 'models/metaTags';
import pagination from 'models/pagination';
import popularGuides from 'models/popularGuides';
import popularReviews from 'models/popularReviews';
import request from 'models/request';
import reviews from 'models/reviews';

export const reducers = {
    announce,
    mainCategories,
    lastReviews,
    lastGuides,
    lastCompanies,
    popularGuides,
    popularReviews,
    metaTags,
    breadcrumbs,
    reviews,
    pagination,
    request,
    router: undefined,
};

export type Store<R = typeof reducers> = { [K in keyof R]: R[K] extends Reducer<infer D> ? D : never };

interface AugmentedLocation extends Location {
    query: Partial<Record<string, string>>;
}

export interface RootStore extends Store {
    router: { location: AugmentedLocation };
}
