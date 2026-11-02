import * as Sentry from '@sentry/react';

const config = window.__sentry__;
delete window.__sentry__;

Sentry.init({
    ...config,
    enabled: Boolean(config && config.enabled !== false && config.dsn),
    sendDefaultPii: false,
    initialScope: { tags: { runtime: 'client' } },
});

export const { ErrorBoundary } = Sentry;
export const captureClientError = (error) => Sentry.captureException(error);
