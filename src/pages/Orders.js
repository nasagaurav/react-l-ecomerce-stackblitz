import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
function Orders(props) {
  const state = useSelector((s) => s);
  const dispatch = useDispatch();

  return <div>Orders</div>;
}
export default Orders;
