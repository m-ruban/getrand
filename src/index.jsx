import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { loadableReady } from '@loadable/component';
import { createBrowserHistory } from 'history';
import { setLanguageResolver } from 'lang/language';

import { createStore } from 'models/store';

import { captureClientError, ErrorBoundary } from 'modules/sentry';

import { App } from 'components/App';

const language = window.__language__ === 'en' ? 'en' : 'ru';
setLanguageResolver(() => language);
delete window.__language__;

const history = createBrowserHistory();
const store = createStore(history, window.__state__);
delete window.__state__;

const container = document.getElementById('app');
const serverHtml = container.innerHTML;

loadableReady(() => {
    hydrate(
        <Provider store={store}>
            <ErrorBoundary fallback={<div dangerouslySetInnerHTML={{ __html: serverHtml }} />}>
                <App history={history} />
            </ErrorBoundary>
        </Provider>,
        container
    );
}).catch(captureClientError);
