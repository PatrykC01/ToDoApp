import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store.ts";
import App from "./App.tsx";
import reportWebVitals from "./reportWebVitals.ts";
import "./App.scss"; // Importuj style

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals(console.log);
