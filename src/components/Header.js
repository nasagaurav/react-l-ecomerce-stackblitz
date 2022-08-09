import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
function Header(props) {
  const state = useSelector((s) => s);
  const dispatch = useDispatch();

  const { loggedin, user, cart, orders } = state;

  return (
    <div>
      <h1>Header</h1>
      <div>
        <Link to="/">home </Link>

        {!loggedin && (
          <div>
            <Link to="/login">login </Link>
            <Link to="/signup">signup </Link>
          </div>
        )}

        {loggedin && (
          <div>
            <Link to="/cart">cart ({cart.length})</Link>
            <Link to="/orders">orders ({orders.length})</Link>
            <Link to="/profile">profile </Link>
            <Link to="/logout">logout ({user})</Link>
          </div>
        )}
      </div>
    </div>
  );
}
export default Header;
