import * as Sentry from '@sentry/node-core/light';
import dotenv from 'dotenv';

dotenv.config({ path: './.env' });

const environment = process.env.SENTRY_ENVIRONMENT || process.env.NODE_ENV || 'production';
const release = process.env.SENTRY_RELEASE || undefined;
const enabled = process.env.SENTRY_ENABLED !== 'false';

export const browserSentryConfig = {
    dsn: process.env.SENTRY_CLIENT_DSN,
    environment,
    release,
    enabled: enabled && Boolean(process.env.SENTRY_CLIENT_DSN),
};

Sentry.init({
    dsn: process.env.SENTRY_SSR_DSN,
    environment,
    release,
    enabled: enabled && Boolean(process.env.SENTRY_SSR_DSN),
    sendDefaultPii: false,
    defaultIntegrations: false,
    integrations: [
        Sentry.eventFiltersIntegration(),
        Sentry.linkedErrorsIntegration(),
        Sentry.onUncaughtExceptionIntegration(),
        Sentry.onUnhandledRejectionIntegration(),
    ],
    initialScope: { tags: { runtime: 'ssr' } },
});

export const sentryRequest = (req, res, next) =>
    Sentry.withIsolationScope((scope) => {
        scope.setContext('request', { method: req.method, path: req.path });
        return next();
    });

export const asyncHandler = (handler) => (req, res, next) =>
    Promise.resolve()
        .then(() => handler(req, res, next))
        .catch(next);

export const captureServerError = (error, context = {}) => Sentry.captureException(error, { extra: context });

export const sentryErrorHandler = (error, req, res, next) => {
    captureServerError(error);
    if (res.headersSent) {
        return next(error);
    }
    return res.status(500).send('Internal Server Error');
};
