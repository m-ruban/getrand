import { Reducer } from '@reduxjs/toolkit';

import counter from 'models/counter';

export const reducers = {
    counter,
    router: undefined,
};

export type RootStore<R = typeof reducers> = { [K in keyof R]: R[K] extends Reducer<infer D> ? D : never };
