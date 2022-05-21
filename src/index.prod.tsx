import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { createStore } from 'models/store';

import { App } from 'components/App';

// @ts-ignore
const store = createStore(window.__state__);
// @ts-ignore
delete window.__state__;

ReactDOM.hydrate(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);
