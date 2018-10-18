import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import App from "./components/App/App";

import thunk from "redux-thunk";
import reducers from "./store/reducers";
import { setAuthentification } from "./store/actions";

// Bootstrap (Use framework you want here, I like bootstrap then I use bootstrap)
import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/style/app.css";

const invariant = require("redux-immutable-state-invariant").default();
const createStoreWithMiddleware = applyMiddleware(invariant, thunk)(
  createStore
);

const store = createStoreWithMiddleware(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const token = localStorage.getItem("Token");
if (token) {
  store.dispatch(setAuthentification(true));
}

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
