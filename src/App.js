import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './style.css';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="Login" element={<Login />} />
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
