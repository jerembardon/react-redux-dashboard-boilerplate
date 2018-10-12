import React, { Component } from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import thunk from "redux-thunk";

import reducers from "../reducers";
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(reducers);

class RootTest extends Component {
  render() {
    return (
      <Provider store={store}>
        <MemoryRouter>{this.props.children}</MemoryRouter>
      </Provider>
    );
  }
}

export default RootTest;
