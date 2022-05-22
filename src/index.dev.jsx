import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';

import { createStore } from 'models/store';

import { App } from 'components/App';

const history = createBrowserHistory();
const store = createStore(history);

render(
    <Provider store={store}>
        <App history={history} />
    </Provider>,
    document.getElementById('app')
);