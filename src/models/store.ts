import { configureStore, Reducer } from '@reduxjs/toolkit';

import counter from 'models/counter';

const reducer = {
    counter,
};

export const createStore = (preloadedState?) => {
    return configureStore({
        reducer,
        preloadedState,
    });
};

export type RootStore<R = typeof reducer> = { [K in keyof R]: R[K] extends Reducer<infer D> ? D : never };
