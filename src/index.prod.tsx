import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { App } from 'components/App';
import { createStore } from 'models/store';

// @ts-ignore
const store = createStore(window.__PRELOADED_STATE__);
// @ts-ignore
delete window.__PRELOADED_STATE__;

ReactDOM.hydrate(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);
