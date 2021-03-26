import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AppProvider } from "./providers";
import { BrowserRouter as Router } from "react-router-dom";

import "./i18n";

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <Router>
        <Suspense fallback="loading">
          <App />
        </Suspense>
      </Router>
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
