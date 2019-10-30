import * as Sentry from '@sentry/browser';

export function init() {
  Sentry.init({
    dsn: 'https://4f9b0ec6381245198a3f95a1b738666a@sentry.io/1802831'
  });
}

export function log(error) {
  Sentry.captureException(error);
}
