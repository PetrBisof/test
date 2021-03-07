import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { useSelector } from "react-redux";

import { Provider } from "react-redux";
import { createStore } from "redux";
// import store from './redux/store'

const name = () => {
  return {
    type: "NAME",
  };
};

const getData = (state, action) => {
  switch (action.type) {
    case "NAME":
      return {name: "KKKKK"};
      default:
        return state
  }
};

let  store = createStore(getData);

store.dispatch(name());
store.subscribe(()=> console.log(store.getState));
console.log(store.getState);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
