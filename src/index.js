import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import allReducer from './reducers';
import { Provider } from 'react-redux';

const store = createStore(
  allReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// ACTION Increment
// const increment = () => {
//   return {
//     type: "INCREMENT"
//   };
// };

// const decrement = () => {
//   return {
//     type: "DECREMENT"
//   };
// };

// REDUCER 
// const counter = (state = 0, action) => {
//   switch (action.type) {
//     case "INCREMENT":
//       return state + 1;
//     case "DECREMENT":
//       return state - 1;
//     default:
//       console.log("Invalid action.type: " + action.type);
//   }
// };

// STORE - global app state
//const store = createStore(counter);

// Display it in the console
// store.subscribe(() => console.log("Store: state=" + store.getState()));

// // DISPATCH
// store.dispatch(increment());
// store.dispatch(decrement());

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
