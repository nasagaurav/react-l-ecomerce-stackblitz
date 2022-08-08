import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
function Cart(props) {
  const state = useSelector((s) => s);
  const dispatch = useDispatch();

  return <div>Cart</div>;
}
export default Cart;
