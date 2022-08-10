import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../services";
import Container from "@mui/material/Container";
function Cart(props) {
  const state = useSelector((s) => s);
  const dispatch = useDispatch();
  const { cart, token } = state;

  const remove = (cart_id) => {
    removeFromCart(cart_id, token).then((d) => {
      // console.log("removeFromCart",d)
      dispatch({ type: "removeFromCart", payload: d });
    });
  };

  return (
    <Container>
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
                <td onClick={() => remove(x.cid)}>remove</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Container>
  );
}
export default Cart;
