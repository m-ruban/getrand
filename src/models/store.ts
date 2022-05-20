import { configureStore } from '@reduxjs/toolkit';
import { Reducer } from '@reduxjs/toolkit';

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

export type Store<R = typeof reducer> = { [K in keyof R]: R[K] extends Reducer<infer D> ? D : never };
