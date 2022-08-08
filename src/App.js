import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getProducts, getTags, getCart, getOrders } from './services';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Cart from './pages/Cart';
import Orders from './pages/Orders';
import Profile from './pages/Profile';
import Logout from './pages/Logout';
import ErrorPage from './pages/ErrorPage';

function App(props) {
  const dispatch = useDispatch();
  const loadAll = () => {
    getProducts().then((d) => dispatch({ type: 'products', payload: d }));
    getTags().then((d) => dispatch({ type: 'tags', payload: d }));
    getCart('myfaketoken').then((d) => dispatch({ type: 'cart', payload: d }));
    getOrders('myfaketoken').then((d) =>
      dispatch({ type: 'orders', payload: d })
    );
  };

  useEffect(loadAll, []);
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="Signup" element={<Signup />} />
          <Route path="Cart" element={<Cart />} />
          <Route path="Orders" element={<Orders />} />
          <Route path="Profile" element={<Profile />} />
          <Route path="Logout" element={<Logout />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
export default App;
