import ReactDOM from "react-dom/client";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { BrowserRouter } from "react-router-dom";
import Router from "./routing/Router.jsx";
import { RecoilRoot } from "recoil";
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://0e0d8508e14039d388163688e3a024d6@o4507243329683456.ingest.de.sentry.io/4507243332829264",
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.replayIntegration(),
  ],
  // Performance Monitoring
  tracesSampleRate: 1.0, //  Capture 100% of the transactions
  // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
  tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
  // Session Replay
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});

ReactDOM.createRoot(document.getElementById("root")).render(
<RecoilRoot>
  <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_API_TOKEN}>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </GoogleOAuthProvider>
</RecoilRoot>
);
