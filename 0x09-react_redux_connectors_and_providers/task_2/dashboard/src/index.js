import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App/App";
import uiReducer, { initialState } from "./reducers/uiReducer";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { Map } from "immutable";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";

// Create a store using configureStore from Redux Toolkit containing the uiReducer state
const store = configureStore({
  reducer: uiReducer,
  preloadedState: Map(initialState),
});

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    {/* Implement a provider passing the store to the main App */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
