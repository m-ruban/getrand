import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { loadableReady } from '@loadable/component';
import { createBrowserHistory } from 'history';

import { createStore } from 'models/store';

import { App } from 'components/App';

const history = createBrowserHistory();
const store = createStore(history, window.__state__);
delete window.__state__;

loadableReady(() => {
    hydrate(
        <Provider store={store}>
            <App history={history} />
        </Provider>,
        document.getElementById('app')
    );
});
