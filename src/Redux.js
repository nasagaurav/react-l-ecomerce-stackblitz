import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';
const intialState = {
  products: [],
  cart: [],
  tags: [],
  orders: [],
  loggedin: false,
  user: null,
  token: '',
};

function reducer(state = intialState, action) {
  console.log(action);
  switch (action.type) {
    case 'products':
      return { ...state, products: action.payload };
    case 'tags':
      return { ...state, tags: action.payload };
    case 'cart':
      return { ...state, cart: action.payload };
    case 'orders':
      return { ...state, orders: action.payload };
    case 'login':
      return { ...state, loggedin: true };
    case 'logout':
      return { ...state, loggedin: false };
    default:
      return state;
  }
}

const store = createStore(reducer);

function Redux() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}
export default Redux;
