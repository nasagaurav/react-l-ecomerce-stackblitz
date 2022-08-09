import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ProductCard from './ProductCard';

function MyProducts(props) {
  const state = useSelector((s) => s);
  const dispatch = useDispatch();

  const { products } = state;
  return (
    <div>
      <div>MyProducts</div>
      {products.map((x) => (
        <ProductCard key={x._id} {...x} />
      ))}
    </div>
  );
}
export default MyProducts;
