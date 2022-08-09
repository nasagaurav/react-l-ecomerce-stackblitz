import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../services';
function ProductCard(props) {
  const state = useSelector((s) => s);
  const dispatch = useDispatch();

  const { loggedin, token } = state;

  // props._id,
  // props._title,
  // props.description,
  // props.old,
  // props.new,
  // props.rating,
  // props.discount,
  // props.tags,
  // props.image,

  const atc = () => {
    addToCart(props._id, token).then((d) => {
      console.log('after add to cart', d);
    });
  };

  return (
    <div>
      <div>
        <img width="100" height="100" src={props.image} />
      </div>
      <div>{props.title}</div>
      <div>{props.new}</div>
      <div>{props.rating}</div>
      <div>{props.discount}</div>
      <div>{props.tags}</div>
      {loggedin && <div onClick={atc}>add to cart</div>}
    </div>
  );
}

export default ProductCard;
