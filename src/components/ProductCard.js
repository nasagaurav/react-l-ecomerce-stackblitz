import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

function ProductCard(props) {
  const state = useSelector((s) => s);
  const dispatch = useDispatch();

  const { loggedin } = state;

  // props._id,
  // props._title,
  // props.description,
  // props.old,
  // props.new,
  // props.rating,
  // props.discount,
  // props.tags,
  // props.image,

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
      <div></div>
    </div>
  );
}

export default ProductCard;
