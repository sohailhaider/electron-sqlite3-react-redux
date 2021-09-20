import * as React from "react";
import * as ReactDOM from "react-dom";
import Home from "./pages/Home.jsx";
import store from "./store";
import { Provider } from "react-redux";
import { ToastContainer } from 'react-toastify';

function render() {
  ReactDOM.render(
    <Provider store={store}>
      <Home />
      <ToastContainer />
    </Provider>,
    document.body
  );
}

render();
