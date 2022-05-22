import { configureStore } from '@reduxjs/toolkit';
import { connectRouter, routerMiddleware } from 'connected-react-router';

import { reducers } from 'models/reducers';

export const createStore = (history, preloadedState) => {
    return configureStore({
        reducer: { ...reducers, router: connectRouter(history) },
        middleware: [routerMiddleware(history)],
        preloadedState,
    });
};
