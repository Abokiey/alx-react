import React from "react";
import ReactDOM from "react-dom";
import App from "./App/App";
import uiReducer, { initialState } from "./reducers/uiReducer";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { Map } from "immutable";

// Create a store using createStore from Redux containing the uiReducer state
const store = createStore(uiReducer, Map(initialState));

ReactDOM.render(
  <React.StrictMode>
    {/* Implement a provider passing the store to the main App */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
