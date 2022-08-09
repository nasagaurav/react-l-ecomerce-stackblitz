import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
function Cart(props) {
  const state = useSelector((s) => s);
  const dispatch = useDispatch();
  const { cart } = state;
  return (
    <div>
      <h1>My Cart ({cart.length}) </h1>
      <table>
        <thead>
          <tr>
            <th>title</th>
            <th>image</th>
            <th>price</th>
            <th>qty</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((x) => (
            <tr>
              <td>{x.title}</td>
              <td>
                <img src={x.image} width={100} />
              </td>
              <td>{x.new}</td>
              <td>{x.qty}</td>
              <td>remove</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default Cart;
