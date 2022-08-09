import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';
const intialState = {
  products: [],
  tags: [],
  cart: [],
  orders: [],
  loggedin: !!localStorage.getItem('token'),
  user: localStorage.getItem('user'),
  token: localStorage.getItem('token'),
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
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        loggedin: action.payload.status,
      };
    case 'logout':
      return { ...state, loggedin: false, user: null };

    case 'add-to-cart':
      return { ...state, cart: action.payload };
    case 'removeFromCart':
      return { ...state, cart: action.payload };

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
