import { Reducer } from '@reduxjs/toolkit';

import announce from 'models/announce';
import counter from 'models/counter';
import lastCompanies from 'models/lastCompanies';
import lastGuides from 'models/lastGuides';
import lastReviews from 'models/lastReviews';
import mainCategories from 'models/mainCategories';
import popularGuides from 'models/popularGuides';
import popularReviews from 'models/popularReviews';

export const reducers = {
    counter,
    announce,
    mainCategories,
    lastReviews,
    lastGuides,
    lastCompanies,
    popularGuides,
    popularReviews,
    router: undefined,
};

export type RootStore<R = typeof reducers> = { [K in keyof R]: R[K] extends Reducer<infer D> ? D : never };
