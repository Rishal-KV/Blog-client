import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { store, persistor } from "./Redux/store.ts";
import { Toaster } from "sonner";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Toaster richColors />
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
