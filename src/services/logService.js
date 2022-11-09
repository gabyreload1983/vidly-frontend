/* import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing"; */

function init() {
  /*   Sentry.init({
    dsn: "https://0df5b513a66f4944b5fbc50f0104aaae@o4504115381272576.ingest.sentry.io/4504115616219136",
    integrations: [new BrowserTracing()],

    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 1.0,
  }); */
}
function log(error) {
  console.error(error);
  // Sentry.captureException(error);
}

export default {
  init,
  log,
};
